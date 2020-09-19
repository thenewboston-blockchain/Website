import React, {FC} from 'react';
import clsx from 'clsx';

import {A, ContributorTasks, CopyableAccountNumber, Qr} from 'components';
import {Contributor} from 'types/github';
import './ContributorList.scss';

import contributors from 'data/contributors.json';
import tasks from 'data/tasks.json';

interface ComponentProps {
  className?: string;
}

const ContributorList: FC<ComponentProps> = ({className}) => {
  if (!contributors || !tasks) return null;

  const renderContributors = () => {
    return contributors.map(({account_number, github_avatar_url, github_username}: Contributor, index) => (
      <div className="ContributorList__contributor" key={github_username}>
        <div className="ContributorList__rank">#{index + 1}</div>
        <div>
          <img className="ContributorList__user-avatar" src={github_avatar_url} alt={github_username} />
        </div>
        <div className="ContributorList__user-details">
          <A className="ContributorList__user-login" href={`https://github.com/${github_username}`}>
            {github_username}
          </A>
          <CopyableAccountNumber accountNumber={account_number} className="ContributorList__CopyableAccountNumber" />
          <div className="ContributorList__qr-container">
            <Qr text={account_number} width={100} />
          </div>
        </div>
        <ContributorTasks className="ContributorList__ContributorTasks" tasks={(tasks as any)[github_username] || []} />
        <div className="ContributorList__total-points">
          <div className="ContributorList__total-points-label">Total Earnings</div>
          <div className="ContributorList__total-points-value">{(1876500).toLocaleString()}</div>
        </div>
      </div>
    ));
  };

  return <div className={clsx('ContributorList', className)}>{renderContributors()}</div>;
};

export default ContributorList;
