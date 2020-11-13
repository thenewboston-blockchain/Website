import React, {FC, ReactNode, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';
import intersection from 'lodash/intersection';
import Icon, {IconType} from 'components/Icon';
import {REPOSITORY_FILTERS} from 'constants/github';

import {BreadcrumbMenu, EmptyPage, FlatNavLinks, LabelFilter, Loader, PageTitle} from 'components';
import {GenericVoidFunction} from 'types/generic';
import {SortBy} from 'types/tasks';
import {Issue, Repository, RepositoryUrlParams} from 'types/github';
import {fetchGithubIssues} from 'utils/github';
import {sortByNumberKey} from 'utils/sort';
import {DropdownInput} from 'components/DropdownInput';
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
  const [sortByOptions, setSortByOptions] = useState<SortBy>(SortBy.none);
  const [sortByOrder, setSortByOrder] = useState<'asc' | 'desc'>('asc');
  const [dropdownOptions] = useState<string[]>([SortBy.none, SortBy.created, SortBy.reward]);

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

    // To support multiple sorting options together..
    // if (sortByOptions.includes(SortBy.reward)) {
    //   filteredIssues = filteredIssues.sort(sortByNumberKey('amount', sortByOrder));
    // }

    // if (sortByOptions.includes(SortBy.time)) {
    //   filteredIssues = filteredIssues.sort(sortByDateKey('created_at', sortByOrder));
    // }

    if (sortByOptions === SortBy.none) {
      return filteredIssues;
    }

    if (sortByOptions === SortBy.reward) {
      filteredIssues = filteredIssues.sort(sortByNumberKey('amount', sortByOrder));
    }
    if (sortByOptions === SortBy.created) {
      // Works opposite for some reason
      filteredIssues = filteredIssues.sort(sortByNumberKey('created_at', sortByOrder === 'asc' ? 'desc' : 'asc'));
    }

    return filteredIssues;
  };

  const handleDropdownChange = (selectedOption: any) => {
    setSortByOptions(selectedOption);
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

  const renderOrder = (): ReactNode => {
    return (
      <div>
        <Icon
          className="Tasks__sortby-icon"
          icon={sortByOrder === 'asc' ? IconType.sortAscending : IconType.sortDescending}
          onClick={() => {
            setSortByOrder((order) => (order === 'asc' ? 'desc' : 'asc'));
          }}
        />
      </div>
    );
  };

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
          <div className="Tasks__sortby-container">
            {renderOrder()}
            <DropdownInput options={dropdownOptions} callbackOnChange={handleDropdownChange} />
          </div>
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
