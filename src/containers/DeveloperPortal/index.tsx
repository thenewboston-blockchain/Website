import React, {FC} from 'react';

import {PageTitle} from 'components';
import DeveloperPortalHero from './DeveloperPortalHero';
import DeveloperPortalCards from './DeveloperPortalCards';
import DocumentationSitemap from './DocumentationSitemap';
import Tools from './Tools';
import './DeveloperPortal.scss';

const DeveloperPortal: FC = () => {
  return (
    <>
      <PageTitle title="Developer Portal" />
      <div className="DeveloperPortal">
        <DeveloperPortalHero />
        <DeveloperPortalCards />
        <Tools />
        <DocumentationSitemap />
      </div>
    </>
  );
};

export default DeveloperPortal;
