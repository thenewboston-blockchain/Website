import React, {FC, useState} from 'react';

import {Icon, IconType} from '@thenewboston/ui';
import clsx from 'clsx';
import {A} from 'components';
import {NAVBAR_HEIGHT, TOP_LINKS_HEIGHT} from 'constants/offsets';
import {Link} from 'react-scroll';
import {useLocation, useHistory} from 'react-router';
import {Link as ReactRouterLink} from 'react-router-dom';
import {PATHNAME_TO_DROPDOWN_SELECTIONS, approvedProjectsPath, projectRulesPath} from '../../constants';

import './SideMenu.scss';

type Props = {
  breadcrumbHeight: number;
  approvedProjectUrls?:
    | {
        title: string;
        url: string;
      }[]
    | null;
};

const SideMenu: FC<Props> = ({approvedProjectUrls, breadcrumbHeight}) => {
  const {pathname} = useLocation();
  const history = useHistory();

  const isApprovedProjectsSelected = pathname.includes(approvedProjectsPath);
  const isProjectRulesSelected = pathname.includes(projectRulesPath);

  const [shouldOpenApprovedProjects, setShouldOpenApprovedProjects] = useState(isApprovedProjectsSelected);
  const [shouldOpenProjectRules, setShouldOpenProjectRules] = useState(isProjectRulesSelected);

  return (
    <div className="SideMenu">
      <div className="SideMenu__section">
        <button
          className={clsx('SideMenu__section-header', isApprovedProjectsSelected && 'SideMenu__section-header--active')}
          onClick={() => {
            if (!isApprovedProjectsSelected) {
              history.push(approvedProjectsPath);
            } else {
              setShouldOpenApprovedProjects((isOpened) => !isOpened);
            }
          }}
        >
          <div>APPROVED PROJECTS</div>
          <Icon
            className="SideMenu__toggle-icon"
            icon={isApprovedProjectsSelected && shouldOpenApprovedProjects ? IconType.chevronUp : IconType.chevronDown}
            size={20}
            totalSize={20}
          />
        </button>
        <div className="SideMenu__approved-projects-container">
          {isApprovedProjectsSelected &&
            shouldOpenApprovedProjects &&
            approvedProjectUrls &&
            approvedProjectUrls.map((selection) => {
              return (
                <ReactRouterLink
                  className={clsx('SideMenu__link', 'SideMenu__approved-projects-link')}
                  to={selection.url}
                  key={selection.url}
                >
                  {selection.title}
                </ReactRouterLink>
              );
            })}
        </div>
      </div>
      <div className="SideMenu__section">
        <button
          className={clsx('SideMenu__section-header', isProjectRulesSelected && 'SideMenu__section-header--active')}
          onClick={() => {
            if (!isProjectRulesSelected) {
              history.push(projectRulesPath);
            } else {
              setShouldOpenProjectRules((isOpened) => !isOpened);
            }
          }}
        >
          <div>RULES & GUIDELINES</div>
          <Icon
            className="SideMenu__toggle-icon"
            icon={isProjectRulesSelected && shouldOpenProjectRules ? IconType.chevronUp : IconType.chevronDown}
            size={20}
            totalSize={20}
          />
        </button>
        {isProjectRulesSelected &&
          shouldOpenProjectRules &&
          PATHNAME_TO_DROPDOWN_SELECTIONS.rules.map((selection) => {
            const selectionHash = selection.url.slice(selection.url.indexOf('#') + 1);
            return (
              <Link
                activeClass="SideMenu__link--active"
                className={clsx('SideMenu__link')}
                hashSpy
                ignoreCancelEvents
                key={selection.url}
                offset={-(NAVBAR_HEIGHT + TOP_LINKS_HEIGHT + breadcrumbHeight)}
                smooth
                spy
                to={selectionHash}
              >
                {selection.title}
              </Link>
            );
          })}
      </div>
      <div className="SideMenu__section">
        <A
          className="SideMenu__section-header"
          href="https://github.com/thenewboston-developers/Projects/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT"
        >
          PROPOSE A PROJECT
        </A>
      </div>
    </div>
  );
};

export default SideMenu;
