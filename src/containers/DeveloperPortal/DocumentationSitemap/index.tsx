import React, {FC} from 'react';

import {A, Container} from 'components';
import './DocumentationSitemap.scss';

// TODO: update links when ready
const DocumentationSitemap: FC = () => {
  return (
    <div className="DocumentationSitemap">
      <Container className="DocumentationSitemap__container">
        <div className="DocumentationSitemap__title">Documentation Sitemap</div>
        <div className="DocumentationSitemap__topics">
          <div className="DocumentationSitemap__topic-container">
            <div className="DocumentationSitemap__topic-header">Living Whitepaper</div>
            <A className="DocumentationSitemap__link" href="/" newWindow={false}>
              Principal Entities on the Network
            </A>
            <A className="DocumentationSitemap__link" href="/" newWindow={false}>
              Principal Events and Processes on the Network
            </A>
            <A className="DocumentationSitemap__link" href="/" newWindow={false}>
              Architecture - Deep Dive
            </A>
          </div>
          <div className="DocumentationSitemap__topic-container">
            <div className="DocumentationSitemap__topic-header">Projects</div>
            <A
              className="DocumentationSitemap__link"
              href="https://github.com/thenewboston-developers/Projects/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT"
            >
              Propose a Project
            </A>
            <A className="DocumentationSitemap__link" href="/projects" newWindow={false}>
              Approved Projects
            </A>
            <A
              className="DocumentationSitemap__link"
              href="/project-rules/overview#how-proposals-work"
              newWindow={false}
            >
              Rules and Guidelines
            </A>
          </div>
          <div className="DocumentationSitemap__topic-container">
            <div className="DocumentationSitemap__topic-header">Tools</div>
            <A className="DocumentationSitemap__link" href="/" newWindow={false}>
              APIs
            </A>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DocumentationSitemap;
