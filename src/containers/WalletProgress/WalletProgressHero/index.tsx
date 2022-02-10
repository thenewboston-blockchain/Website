import React, {FC} from 'react';

import clsx from 'clsx';
import {Container, ProgressBar} from 'components';
import {useWindowDimensions} from 'hooks';
import WalletProgressHeroImage from '../assets/WalletProgressHero.png';

import './WalletProgressHero.scss';

type Props = {
  className?: string;
  progressPercentage: number;
};

const WalletProgressHero: FC<Props> = ({className, progressPercentage}) => {
  const {width} = useWindowDimensions();

  return (
    <>
      <Container className={clsx('WalletProgressHero', className)}>
        <div className="WalletProgressHero__content">
          <h1 className="WalletProgressHero__content-title">Wallet+ Progress</h1>
          <p className="WalletProgressHero__content-description">
            This progress page consists of tasks that relate to our beta blockchain milestone.
          </p>
          <div className="WalletProgressHero__progress">
            <ProgressBar className="WalletProgressHero__progress-bar" height={16} percentage={progressPercentage} />
            <div className="WalletProgressHero__progress-percentage">{progressPercentage}% complete</div>
          </div>
        </div>
        {width <= 1366 && (
          <img alt="Wallet Progress Hero" className="WalletProgressHero__image" src={WalletProgressHeroImage} />
        )}
      </Container>
      {width > 1366 && (
        <img
          alt="Wallet Progress Hero"
          className={clsx('WalletProgressHero__image', 'WalletProgressHero__image-outer')}
          src={WalletProgressHeroImage}
        />
      )}
    </>
  );
};

export default WalletProgressHero;
