import React, {FC} from 'react';

import {A, Label, TotalAmount} from 'components';
import {AMOUNT_COLOR} from 'constants/github';
import {URLS} from 'constants/routes';
import {Assignee, GitHubLabel, GitHubUser} from 'types/github';

import './BountiesBounty.scss';

interface ComponentProps {
  amount: number;
  assignees: Assignee[];
  creator: GitHubUser;
  createdAt: string;
  githubLabels: GitHubLabel[];
  htmlUrl: string;
  number: number;
  repositoryName: string;
  title: string;
}

const BountiesBounty: FC<ComponentProps> = ({
  amount,
  assignees,
  creator,
  createdAt,
  githubLabels,
  htmlUrl,
  number,
  repositoryName,
  title,
}) => {
  const assignedUsers = assignees.filter((assignee) => !!assignee.login && !!assignee.avatar_url);

  const renderAssignees = () => {
    return assignedUsers.map(({avatar_url, login}) => (
      <img alt={login} className="BountiesBounty__assignee" key={login} src={avatar_url} />
    ));
  };

  const renderCreatorLink = () => {
    const url = `https://github.com/${creator.login}`;
    return (
      <A className="BountiesBounty__issue-details-link" href={url}>
        {creator.login}
      </A>
    );
  };

  const renderIssueLink = () => {
    const url = `${URLS.github}/${repositoryName}/issues/${number}`;
    return (
      <A className="BountiesBounty__issue-details-link" href={url}>
        {`#${number}`}
      </A>
    );
  };

  const renderLabels = () => {
    return githubLabels
      .filter(({color}) => color.toLowerCase() !== AMOUNT_COLOR)
      .map(({color, name}) => <Label className="BountiesBounty__Label" color={color} key={name} name={name} />);
  };

  const renderRepositoryLink = () => {
    const url = `${URLS.github}/${repositoryName}`;
    return (
      <A className="BountiesBounty__issue-details-link" href={url}>
        {repositoryName}
      </A>
    );
  };

  return (
    <div className="BountiesBounty">
      <div className="BountiesBounty__left">
        <A className="BountiesBounty__title" href={htmlUrl}>
          {title}
        </A>
        <div className="BountiesBounty__issue-details">
          {renderRepositoryLink()} &middot; {renderIssueLink()} &middot; Opened {createdAt} by {renderCreatorLink()}
        </div>
        {renderLabels()}
      </div>
      <div className="BountiesBounty__middle">
        {!!assignedUsers.length && (
          <>
            <div className="BountiesBounty__assignees-title">Assignees</div>
            {renderAssignees()}
          </>
        )}
      </div>
      <div className="BountiesBounty__right">
        <TotalAmount amount={amount} className="BountiesBounty__TotalAmount" title="Reward" />
      </div>
    </div>
  );
};

export default BountiesBounty;
