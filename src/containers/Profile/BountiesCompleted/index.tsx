import React, {FC} from 'react';
import clsx from 'clsx';

import {ContributorBounties, EmptyPage, TotalAmount} from 'components';
import {useWindowDimensions} from 'hooks';
import {Bounty} from 'types/github';
import {getBounties} from 'utils/data';

import './BountiesCompleted.scss';

interface ComponentProps {
  github_username: string;
}

const BountiesCompleted: FC<ComponentProps> = ({github_username}) => {
  const {width} = useWindowDimensions();

  const getCompletedBounties = () => {
    const bounties = getBounties();
    return bounties[github_username];
  };

  const getTotalEarnings = (bounties: Bounty[]) => {
    const amounts = bounties.map(({amount_paid}: Bounty) => parseInt(amount_paid, 10));
    return amounts.reduce((a, b) => a + b, 0);
  };

  const completedBounties = getCompletedBounties();
  const totalEarnings = completedBounties ? getTotalEarnings(completedBounties) : 0;
  const totalBounties = completedBounties ? completedBounties.length : 0;

  const renderMobileBounties = () => {
    return (
      <>
        <div className="BountiesCompleted__totals">
          <TotalAmount amount={totalBounties} className="BountiesCompleted__TotalBounties" title="Total Bounties" />
          <TotalAmount amount={totalEarnings} className="BountiesCompleted__TotalEarnings" title="Total Earnings" />
        </div>
        <ContributorBounties className="BountiesCompleted__ContributorBounties" bounties={completedBounties} />
      </>
    );
  };

  const renderBounties = () => {
    return (
      <>
        <ContributorBounties className="BountiesCompleted__ContributorBounties" bounties={completedBounties} />
        <TotalAmount amount={totalEarnings} className="TotalEarnings" title="Total Earnings" />
      </>
    );
  };

  return (
    <div className="BountiesCompleted">
      <h2 className="BountiesCompleted__title">Bounties Completed</h2>
      <div className={clsx('BountiesCompleted__bounties', {'BountiesCompleted__bounties--empty': totalBounties <= 0})}>
        {totalBounties > 0 && (width > 480 ? renderBounties() : renderMobileBounties())}
        {totalBounties <= 0 && <EmptyPage className="BountiesCompleted__empty-page" />}
      </div>
    </div>
  );
};

export default BountiesCompleted;
