import React, {FC} from 'react';

import {ROUTES, URLS} from 'constants/routes';
import CommunityBuiltIcon from '../icons/CommunityBuiltIcon.png';
import CompleteBountiesIcon from '../icons/CompleteBountiesIcon.png';
import CreateProposalsIcon from '../icons/CreateProposalsIcon.png';
import DownloadWalletIcon from '../icons/DownloadWalletIcon.png';
import ReadDocumentationIcon from '../icons/ReadDocumentationIcon.png';
import ViewOpeningsIcon from '../icons/ViewOpeningsIcon.png';
import GetStartedCard from './GetStartedCard';

import './GetStarted.scss';

const getStartedDetails = [
  {
    description: 'Learn about thenewboston blockchain.',
    icon: <img alt="Read Documentation" className="GetStarted__icon" src={ReadDocumentationIcon} />,
    isExternal: true,
    title: 'Read Documentation',
    to: URLS.developerPortal.whitepaper,
  },
  {
    description: 'Interact with the network using our official wallet.',
    icon: <img alt="Download Wallet" className="GetStarted__icon" src={DownloadWalletIcon} />,
    title: 'Download Wallet',
    to: ROUTES.download,
  },
  {
    description: 'Connect with the community to learn, grow, and create.',
    icon: <img alt="Join the Community" className="GetStarted__icon" src={CommunityBuiltIcon} />,
    title: 'Join the Community',
    to: ROUTES.social,
  },
  {
    description: 'Earn coins by building projects, gaining skills, and working as a team.',
    icon: <img alt="Create Proposals" className="GetStarted__icon" src={CreateProposalsIcon} />,
    isExternal: true,
    title: 'Create Proposals',
    to: URLS.developerPortal.projects,
  },
  {
    description: 'Work on bug fixes, graphics, and other small bounties to earn coins.',
    icon: <img alt="Complete Bounties" className="GetStarted__icon" src={CompleteBountiesIcon} />,
    title: 'Complete Bounties',
    to: `${ROUTES.bounties}/All`,
  },
  {
    description: 'Apply to be part of the core team.',
    icon: <img alt="View Openings" className="GetStarted__icon" src={ViewOpeningsIcon} />,
    title: 'View Openings',
    to: `${ROUTES.openings}/All`,
  },
];

const GetStarted: FC = () => {
  return (
    <div className="GetStarted">
      <div className="GetStarted__title">Get Started</div>
      <div className="GetStarted__main">
        {getStartedDetails.map(({description, icon, isExternal, title, to}) => {
          return (
            <GetStartedCard
              key={title}
              description={description}
              icon={icon}
              isExternal={isExternal}
              title={title}
              to={to}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GetStarted;
