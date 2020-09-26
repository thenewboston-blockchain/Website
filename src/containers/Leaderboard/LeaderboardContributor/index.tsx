import React, {FC, useState} from 'react';
import clsx from 'clsx';

import {A, ContributorTasks, CopyableAccountNumber, Qr, TotalAmount} from 'components';
import SlideUpAccountDetails from 'containers/SlideUpAccountDetails';
import {Task} from 'types/github';

import './LeaderboardContributor.scss';

interface ComponentProps {
  account_number: string;
  github_avatar_url: string;
  github_username: string;
  rank: number;
  tasks: Task[];
  total_earnings: number;
}

const LeaderboardContributor: FC<ComponentProps> = ({
  account_number,
  github_avatar_url,
  github_username,
  rank,
  tasks,
  total_earnings,
}) => {
  const [displaySlideUp, setDisplaySlideUp] = useState(false);

  const handleClick = (e: any): void => {
    if (e.target.nodeName === 'A') return;
    if (window.innerWidth > 768) return;
    setDisplaySlideUp(true);
  };

  const renderAvatar = () => (
    <div className="LeaderboardContributor__user-avatar-container">
      <div
        className={clsx('LeaderboardContributor__user-avatar-rank', {
          'LeaderboardContributor__user-avatar-rank--top-3': rank <= 3,
        })}
      >
        {rank}
      </div>
      <img className="LeaderboardContributor__user-avatar" src={github_avatar_url} alt={github_username} />
    </div>
  );

  const renderMainDetails = () => (
    <div className="LeaderboardContributor__main-details">
      <div className="LeaderboardContributor__account-details">
        <CopyableAccountNumber
          accountNumber={account_number}
          className="LeaderboardContributor__CopyableAccountNumber"
        />
        <div className="LeaderboardContributor__qr-container">
          <Qr text={account_number} width={80} />
        </div>
      </div>
      <ContributorTasks className="LeaderboardContributor__ContributorTasks" tasks={tasks} />
      <TotalAmount amount={total_earnings} className="LeaderboardContributor__TotalAmount" title="Total Earnings" />
    </div>
  );

  const renderRight = () => (
    <div className="LeaderboardContributor__right">
      <A className="LeaderboardContributor__user-login" href={`https://github.com/${github_username}`}>
        {github_username}
      </A>
      {renderMainDetails()}
    </div>
  );

  const renderSlideUp = () => {
    if (!displaySlideUp) return null;
    return (
      <SlideUpAccountDetails
        account_number={account_number}
        close={() => setDisplaySlideUp(false)}
        github_avatar_url={github_avatar_url}
        github_username={github_username}
      />
    );
  };

  return (
    <>
      {renderSlideUp()}
      <div className="LeaderboardContributor" onClick={handleClick} role="button" tabIndex={0}>
        {renderAvatar()}
        {renderRight()}
      </div>
    </>
  );
};

export default LeaderboardContributor;
