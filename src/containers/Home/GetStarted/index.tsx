import React, {FC} from 'react';

import {
  CommunityBuiltIcon,
  CompleteBountiesIcon,
  CreateProposalsIcon,
  DownloadWalletIcon,
  ReadDocumentationIcon,
  ViewOpeningsIcon,
} from '../icons';
import GetStartedCard from './GetStartedCard';

import './GetStarted.scss';

const getStartedDetails = [
  {
    description: 'Lorem ipsum dolor sit ametconsecteturadsaxzia adipiscing elit, sed do eiusmod tempor.',
    icon: <ReadDocumentationIcon size={40} />,
    title: 'Read Documentation',
    to: '/guide/introduction',
  },
  {
    description: 'Lorem ipsum dolor sit ametconsecteturadsaxzia adipiscing elit, sed do eiusmod tempor.',
    icon: <DownloadWalletIcon size={40} />,
    title: 'Download Wallet',
    to: '/download',
  },
  {
    description: 'Lorem ipsum dolor sit ametconsecteturadsaxzia adipiscing elit, sed do eiusmod tempor.',
    icon: <CommunityBuiltIcon size={40} />,
    title: 'Join the Community',
    to: '/social',
  },
  {
    description: 'Lorem ipsum dolor sit ametconsecteturadsaxzia adipiscing elit, sed do eiusmod tempor.',
    icon: <CreateProposalsIcon size={40} />,
    title: 'Create Proposals',
    to: '/projects/overview',
  },
  {
    description: 'Lorem ipsum dolor sit ametconsecteturadsaxzia adipiscing elit, sed do eiusmod tempor.',
    icon: <CompleteBountiesIcon size={40} />,
    title: 'Complete Bounties',
    to: '/tasks/All',
  },
  {
    description: 'Lorem ipsum dolor sit ametconsecteturadsaxzia adipiscing elit, sed do eiusmod tempor.',
    icon: <ViewOpeningsIcon size={40} />,
    title: 'View Openings',
    to: '/openings/All',
  },
];

const GetStarted: FC = () => {
  return (
    <div className="GetStarted">
      <div className="GetStarted__title">Get Started</div>
      <div className="GetStarted__main">
        {getStartedDetails.map(({description, icon, title, to}) => {
          return <GetStartedCard key={title} description={description} icon={icon} title={title} to={to} />;
        })}
      </div>
    </div>
  );
};

export default GetStarted;
