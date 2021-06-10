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
    description: 'Learn about thenewboston blockchain.',
    icon: <ReadDocumentationIcon size={40} />,
    title: 'Read Documentation',
    to: '/guide/introduction',
  },
  {
    description: 'Interact with the network using our official wallet.',
    icon: <DownloadWalletIcon size={40} />,
    title: 'Download Wallet',
    to: '/download',
  },
  {
    description: 'Connect with the community to learn, grow, and create.',
    icon: <CommunityBuiltIcon size={40} />,
    title: 'Join the Community',
    to: '/social',
  },
  {
    description: 'Earn coins by building projects, gaining skills, and working as a team.',
    icon: <CreateProposalsIcon size={40} />,
    title: 'Create Proposals',
    to: '/projects/overview',
  },
  {
    description: 'Work on bug fixes, graphics, and other small tasks to earn coins.',
    icon: <CompleteBountiesIcon size={40} />,
    title: 'Complete Bounties',
    to: '/tasks/All',
  },
  {
    description: 'Apply to be part of the core team.',
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
