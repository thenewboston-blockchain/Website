import React, {FC} from 'react';

import GetStartedCard from './GetStartedCard';

// icons
import CompleteBountiesIcon from '../icons/CompleteBountiesIcon';
import CreateProposalsIcon from '../icons/CreateProposalsIcon';
import DownloadWalletIcon from '../icons/DownloadWalletIcon';
import JoinTheCommunityIcon from '../icons/CommunityBuiltIcon';
import ReadDocumentationIcon from '../icons/ReadDocumentationIcon';
import ViewOpeningsIcon from '../icons/ViewOpeningsIcon';

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
    icon: <JoinTheCommunityIcon size={40} />,
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
        {getStartedDetails.map((detail) => {
          const {description, icon, title, to} = detail;
          return <GetStartedCard key={title} description={description} icon={icon} title={title} to={to} />;
        })}
      </div>
    </div>
  );
};

export default GetStarted;
