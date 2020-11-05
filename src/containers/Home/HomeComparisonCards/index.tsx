import React, {FC, ReactNode} from 'react';

import Bitcoin from 'assets/svgs/bitcoin.svg';
import Logo from 'assets/svgs/thenewboston-primary.svg';

import './HomeComparisonCards.scss';

const HomeComparisonCards: FC = () => {
  const renderComparisonCardStat = (attribute: string, value: string): ReactNode => (
    <div className="HomeComparisonCards__stat">
      <div className="HomeComparisonCards__stat-value">{value}</div>
      <div className="HomeComparisonCards__stat-attribute">{attribute}</div>
    </div>
  );

  return (
    <div className="HomeComparisonCards">
      <div className="HomeComparisonCards__card">
        <img alt="logo" className="HomeComparisonCards__crypto-logo" src={Logo} />
        {renderComparisonCardStat('txs per second', '3,238')}
        {renderComparisonCardStat('avg. block time', '0.015 seconds')}
      </div>
      <div className="HomeComparisonCards__versus-container">vs</div>
      <div className="HomeComparisonCards__card">
        <img alt="logo" className="HomeComparisonCards__crypto-logo" src={Bitcoin} />
        {renderComparisonCardStat('txs per second', '7')}
        {renderComparisonCardStat('avg. block time', '10 minutes')}
      </div>
    </div>
  );
};

export default HomeComparisonCards;
