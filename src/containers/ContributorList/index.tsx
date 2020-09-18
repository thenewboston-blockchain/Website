import React, {FC} from 'react';

import {A, ContributorTasks, CopyableAccountNumber, Qr} from 'components';
import './ContributorList.scss';
import clsx from 'clsx';

export interface Contributor {
  avatar_url: string;
  contributions: number;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

interface ComponentProps {
  className?: string;
  contributors: Contributor[];
}

const ContributorList: FC<ComponentProps> = ({className, contributors}) => {
  const getFormattedContributors = () => {
    const results: any = {};
    contributors.forEach((contributor) => {
      if (contributor.id in results) {
        results[contributor.id].contributions += contributor.contributions;
      } else {
        results[contributor.id] = contributor;
      }
    });
    return results;
  };

  const renderContributors = () => {
    const formattedContributors: object = getFormattedContributors();

    return Object.values(formattedContributors).map(({avatar_url, html_url, id, login}, index) => (
      <div className="ContributorList__contributor" key={id}>
        <div className="ContributorList__rank">#{index + 1}</div>
        <div>
          <img className="ContributorList__user-avatar" src={avatar_url} alt={login} />
        </div>
        <div className="ContributorList__user-details">
          <A className="ContributorList__user-login" href={html_url}>
            {login}
          </A>
          <CopyableAccountNumber
            accountNumber="dfddf07ec15cbf363ecb52eedd7133b70b3ec896b488460bcecaba63e8e36be5"
            className="ContributorList__CopyableAccountNumber"
          />
          <div className="ContributorList__qr-container">
            <Qr text="dfddf07ec15cbf363ecb52eedd7133b70b3ec896b488460bcecaba63e8e36be5" width={100} />
          </div>
        </div>
        <ContributorTasks className="ContributorList__ContributorTasks" />
        <div className="ContributorList__total-points">
          <div className="ContributorList__total-points-label">Total Points Earned</div>
          <div className="ContributorList__total-points-value">{(1876500).toLocaleString()}</div>
        </div>
      </div>
    ));
  };

  return <div className={clsx('ContributorList', className)}>{renderContributors()}</div>;
};

export default ContributorList;
