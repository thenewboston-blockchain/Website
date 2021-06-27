import React from 'react';

import DeveloperPortalHero from './DeveloperPortalHero';
import DeveloperPortalCards from './DeveloperPortalCards';
import DocumentationSitemap from './DocumentationSitemap';
import Tools from './Tools';

import './DeveloperPortal.scss';

export default function DeveloperPortal() {
  return (
    <div className="DeveloperPortal">
      <DeveloperPortalHero />
      <DeveloperPortalCards />
      <Tools />
      <DocumentationSitemap />
    </div>
  );
}
