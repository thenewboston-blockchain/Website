import React from 'react';

import {PageTitle} from 'components';
import DeveloperPortalHero from './DeveloperPortalHero';
import DeveloperPortalCards from './DeveloperPortalCards';
import DocumentationSitemap from './DocumentationSitemap';
import Tools from './Tools';

import './DeveloperPortal.scss';

export default function DeveloperPortal() {
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
}
