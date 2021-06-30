import React from 'react';

import {A, Container} from 'components';
import './DocumentationSitemap.scss';

// TODO: update links when ready
export default function DocumentationSitemap() {
  return (
    <div className="DocumentationSitemap">
      <Container className="DocumentationSitemap__container">
        <div className="DocumentationSitemap__title">Documentation Sitemap</div>
        <div className="DocumentationSitemap__subtitle">
          Lorm Ipsun dolor sit Lorm Ipsun dolor sitLorm Ipsun dolor sit Lorm Ipsun dolor sit Lorm Ipsun dolo`r
        </div>
        <div className="DocumentationSitemap__topics">
          <div className="DocumentationSitemap__topic-container">
            <div className="DocumentationSitemap__topic-header">Living Whitepaper</div>
            <A href="/" newWindow={false} className="DocumentationSitemap__link">
              Principal Entities on the Network
            </A>
            <A href="/" newWindow={false} className="DocumentationSitemap__link">
              Principal Events and Processes on the Network
            </A>
            <A href="/" newWindow={false} className="DocumentationSitemap__link">
              Architecture - Deep Dive
            </A>
          </div>
          <div className="DocumentationSitemap__topic-container">
            <div className="DocumentationSitemap__topic-header">Projects</div>
            <A
              href="https://github.com/thenewboston-developers/Projects/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT"
              className="DocumentationSitemap__link"
            >
              Propose a Project
            </A>
            <A href="/projects" newWindow={false} className="DocumentationSitemap__link">
              Approved Projects
            </A>
            <A
              href="/project-rules/overview#how-proposals-work"
              newWindow={false}
              className="DocumentationSitemap__link"
            >
              Rules and Guidelines
            </A>
          </div>
          <div className="DocumentationSitemap__topic-container">
            <div className="DocumentationSitemap__topic-header">Tools</div>
            <A href="/" newWindow={false} className="DocumentationSitemap__link">
              APIs
            </A>
          </div>
        </div>
      </Container>
    </div>
  );
}
