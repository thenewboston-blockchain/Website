import React, {FC, ReactNode, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';
import intersection from 'lodash/intersection';

import {REPOSITORY_FILTERS} from 'constants/github';

import {BreadcrumbMenu, EmptyPage, FlatNavLinks, LabelFilter, Loader, PageTitle} from 'components';
import {GenericVoidFunction} from 'types/generic';
import {Issue, Repository, RepositoryUrlParams} from 'types/github';
import {fetchGithubIssues} from 'utils/github';
import {sortByNumberKey} from 'utils/sort';

import TasksTask from './TasksTask';
import './Tasks.scss';

const Tasks: FC = () => {
  const history = useHistory();
  const {repository} = useParams<RepositoryUrlParams>();
  const [error, setError] = useState<boolean>(false);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [repositoryFilter, setRepositoryFilter] = useState<Repository>(Repository.all);
  const [selectedLabelNames, setSelectedLabelNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const results = await fetchGithubIssues();
        setIssues(results);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setRepositoryFilter(repository);
  }, [repository]);

  const getFilteredIssues = () => {
    let filteredIssues = issues.filter(({amount}) => amount !== 0);

    filteredIssues =
      repositoryFilter === Repository.all
        ? filteredIssues
        : filteredIssues.filter(({repositoryName}) => repositoryName === repositoryFilter);

    filteredIssues =
      selectedLabelNames.length === 0
        ? filteredIssues
        : filteredIssues.filter(({labels}) => {
            const labelNames = labels.map(({name}) => name);
            return !!intersection(labelNames, selectedLabelNames).length;
          });

    filteredIssues = filteredIssues.sort(sortByNumberKey('amount', 'desc'));

    return filteredIssues;
  };

  const handleLabelClick = (labelName: string): GenericVoidFunction => (): void => {
    const results = selectedLabelNames.includes(labelName)
      ? selectedLabelNames.filter((name) => name !== labelName)
      : [...selectedLabelNames, labelName];
    setSelectedLabelNames(results);
  };

  const handleNavOptionClick = (option: Repository) => (): void => {
    history.push(`/tasks/${option}`);
  };

  const renderFilters = () => (
    <>
      <FlatNavLinks<Repository>
        handleOptionClick={handleNavOptionClick}
        options={REPOSITORY_FILTERS}
        selectedOption={repository}
      />
      <LabelFilter
        className="Tasks__LabelFilter"
        handleLabelClick={handleLabelClick}
        selectedLabelNames={selectedLabelNames}
      />
    </>
  );

  const renderTasks = (): ReactNode => {
    const filteredIssues = getFilteredIssues();
    if (error || !filteredIssues.length) return <EmptyPage />;
    return filteredIssues.map(
      ({amount, assignees, created_at, html_url, labels, number, repositoryName, title, user}) => {
        const createdStr = formatDistanceToNow(parseISO(created_at), {includeSeconds: true});
        return (
          <TasksTask
            amount={amount}
            assignees={assignees}
            createdAt={`${createdStr} ago`}
            creator={user}
            githubLabels={labels}
            htmlUrl={html_url}
            key={html_url}
            number={number}
            repositoryName={repositoryName}
            title={title}
          />
        );
      },
    );
  };

  return (
    <>
      <PageTitle title="Tasks" />
      <div className="Tasks">
        <BreadcrumbMenu
          className="Tasks__BreadcrumbMenu"
          menuItems={renderFilters()}
          pageName={repository}
          sectionName="Tasks"
        />
        <div className="Tasks__left-menu">{renderFilters()}</div>
        <div className="Tasks__task-list">
          {loading ? (
            <div className="Tasks__loader-container">
              <Loader />
            </div>
          ) : (
            renderTasks()
          )}
        </div>
      </div>
    </>
  );
};

export default Tasks;
