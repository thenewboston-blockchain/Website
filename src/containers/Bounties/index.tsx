import React, {FC, ReactNode, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';
import intersection from 'lodash/intersection';
import {Icon, IconType} from '@thenewboston/ui';

import {
  BreadcrumbMenu,
  Container,
  DropdownInput,
  EmptyPage,
  FlatNavLinks,
  LabelFilter,
  Loader,
  PageTitle,
} from 'components';
import {ROUTES} from 'constants/routes';
import {fetchGithubIssues} from 'utils/github';
import {GenericVoidFunction} from 'types/generic';
import {Issue, Repository, RepositoryUrlParams} from 'types/github';
import {REPOSITORY_FILTERS} from 'constants/github';
import {SortBy} from 'types/bounties';
import {sortByDateKey, sortByNumberKey} from 'utils/sort';

import BountiesBounty from './BountiesBounty';
import './Bounties.scss';

const Bounties: FC = () => {
  const history = useHistory();
  const {repository} = useParams<RepositoryUrlParams>();
  const [dropdownOptions] = useState<string[]>([SortBy.none, SortBy.created, SortBy.reward]);
  const [error, setError] = useState<boolean>(false);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [repositoryFilter, setRepositoryFilter] = useState<Repository>(Repository.all);
  const [selectedLabelNames, setSelectedLabelNames] = useState<string[]>([]);
  const [sortByOption, setSortByOption] = useState<string>(SortBy.created);
  const [sortByOrder, setSortByOrder] = useState<'asc' | 'desc'>('desc');

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

    if (sortByOption === SortBy.none) {
      return filteredIssues;
    }
    if (sortByOption === SortBy.reward) {
      filteredIssues.sort(sortByNumberKey('amount', sortByOrder));
    }
    if (sortByOption === SortBy.created) {
      filteredIssues.sort(sortByDateKey('created_at', sortByOrder));
    }

    return filteredIssues;
  };

  const handleDropdownChange = (selectedOption: string) => {
    setSortByOption(selectedOption);
  };

  const handleLabelClick = (labelName: string): GenericVoidFunction => (): void => {
    const results = selectedLabelNames.includes(labelName)
      ? selectedLabelNames.filter((name) => name !== labelName)
      : [...selectedLabelNames, labelName];
    setSelectedLabelNames(results);
  };

  const handleSorting = () => {
    setSortByOrder((order) => (order === 'asc' ? 'desc' : 'asc'));
  };

  const handleNavOptionClick = (option: Repository) => (): void => {
    history.push(`${ROUTES.bounties}/${option}`);
  };

  const renderFilters = () => (
    <>
      <FlatNavLinks handleOptionClick={handleNavOptionClick} options={REPOSITORY_FILTERS} selectedOption={repository} />
      <LabelFilter
        className="Bounties__LabelFilter"
        handleLabelClick={handleLabelClick}
        selectedLabelNames={selectedLabelNames}
      />
    </>
  );

  const renderBounties = (): ReactNode => {
    const filteredIssues = getFilteredIssues();
    if (error || !filteredIssues.length) return <EmptyPage />;
    return filteredIssues.map(
      ({amount, assignees, created_at, html_url, labels, number, repositoryName, title, user}) => {
        const createdStr = formatDistanceToNow(parseISO(created_at), {includeSeconds: true});
        return (
          <BountiesBounty
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
      <PageTitle ogDescription={`${repositoryFilter} Bounties`} title={`${repositoryFilter} Bounties`} />
      <Container className="Bounties">
        <BreadcrumbMenu
          className="Bounties__BreadcrumbMenu"
          menuItems={renderFilters()}
          pageName={repository}
          sectionName="Bounties"
        />
        <div className="Bounties__left-menu">{renderFilters()}</div>
        <div className="Bounties__bounty-list">
          <div className="Bounties__sortby-container">
            {sortByOption !== SortBy.none && (
              <Icon
                className="Bounties__sortby-icon"
                icon={sortByOrder === 'asc' ? IconType.sortAscending : IconType.sortDescending}
                onClick={handleSorting}
              />
            )}
            <DropdownInput
              callbackOnChange={handleDropdownChange}
              defaultOption={SortBy.created}
              options={dropdownOptions}
            />
          </div>
          {loading ? (
            <div className="Bounties__loader-container">
              <Loader />
            </div>
          ) : (
            renderBounties()
          )}
        </div>
      </Container>
    </>
  );
};

export default Bounties;
