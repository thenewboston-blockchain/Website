import React, {FC} from 'react';

import {Container} from 'components';
import {Link} from 'react-router-dom';
import './DocumentationSitemap.scss';

const DocumentationSitemap: FC = () => {
  return (
    <div className="DocumentationSitemap">
      <Container className="DocumentationSitemap__container">
        <div className="DocumentationSitemap__title">Documentation Sitemap</div>
        <div className="DocumentationSitemap__topics">
          <div className="DocumentationSitemap__topic-container">
            <div className="DocumentationSitemap__topic-header">Living Whitepaper</div>
            <Link className="DocumentationSitemap__link" to="/developer/whitepaper/principal-entities">
              Principal Entities on the Network
            </Link>
            <Link className="DocumentationSitemap__link" to="/developer/whitepaper/principal-events">
              Principal Events and Processes on the Network
            </Link>
            <Link className="DocumentationSitemap__link" to="/developer/whitepaper/architecture">
              Architecture - Deep Dive
            </Link>
          </div>
          <div className="DocumentationSitemap__topic-container">
            <div className="DocumentationSitemap__topic-header">Projects</div>
            <Link
              className="DocumentationSitemap__link"
              to={{
                pathname:
                  'https://github.com/thenewboston-developers/Projects/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT',
              }}
              target="_blank"
            >
              Propose a Project
            </Link>

            <Link className="DocumentationSitemap__link" to="/projects">
              Approved Projects
            </Link>
            <Link className="DocumentationSitemap__link" to="/project-rules/overview#how-proposals-work">
              Rules and Guidelines
            </Link>
          </div>
          <div className="DocumentationSitemap__topic-container">
            <div className="DocumentationSitemap__topic-header">Tools</div>
            <Link className="DocumentationSitemap__link" to="/developer/api/bank-api">
              APIs
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DocumentationSitemap;
