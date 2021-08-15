import React, {FC, useState} from 'react';
import clsx from 'clsx';

import {Icon, IconType} from '@thenewboston/ui';
import {Popover} from 'components';
import {NAVBAR_HEIGHT} from 'constants/offsets';
import {useLocation} from 'react-router';
import {Link as ReactRouterLink} from 'react-router-dom';
import {Link} from 'react-scroll';
import {useWindowDimensions} from 'hooks';
import {PATHNAME_TO_TITLE_MAPPING, PATHNAME_TO_DROPDOWN_SELECTIONS} from '../../constants';
import {orderedProjectDetailsTopic} from '../../containers/ProjectDetails/constants';

import './Breadcrumb.scss';

type Props = {
  className?: string;
  breadcrumbHeight: number;
  approvedProjectUrls?:
    | {
        title: string;
        url: string;
      }[]
    | null;
  projectName?: string;
};

const TOP_LINK_HEIGHT = 72;
const PROJECT_DETAILS_HEADER_HEIGHT = 180;
const PROJECT_DETAILS_HEADER_HEIGHT_768 = 260;

const Breadcrumb: FC<Props> = ({approvedProjectUrls, breadcrumbHeight, className, projectName}) => {
  const location = useLocation();
  const {width} = useWindowDimensions();
  const [projectsDropdownEl, setProjectsDropdownEl] = useState<HTMLButtonElement | null>(null);
  const [sectionDropdownEl, setSectionDropdownEl] = useState<HTMLButtonElement | null>(null);
  const [projectDetailsDropdownEl, setProjectDetailsDropdownEl] = useState<HTMLButtonElement | null>(null);
  const pathnames = location.pathname.slice(1).split('/');
  const projectDetailsHeaderHeight = width > 768 ? PROJECT_DETAILS_HEADER_HEIGHT : PROJECT_DETAILS_HEADER_HEIGHT_768;

  const toggleWhitepaperDropdown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!e) return;

    if (projectsDropdownEl) {
      setProjectsDropdownEl(null);
    } else {
      setProjectsDropdownEl(e.currentTarget);
    }
  };

  const toggleSectionDropdown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!e) return;

    if (sectionDropdownEl) {
      setSectionDropdownEl(null);
    } else {
      setSectionDropdownEl(e.currentTarget);
    }
  };

  const toggleProjectDetailsDropdown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!e) return;

    if (projectDetailsDropdownEl) {
      setProjectDetailsDropdownEl(null);
    } else {
      setProjectDetailsDropdownEl(e.currentTarget);
    }
  };

  return (
    <div className={clsx('Breadcrumb', className)}>
      {pathnames.map((pathname, index) => {
        // developer
        if (index === 0) {
          return width > 992 ? (
            <div className="Breadcrumb__link-container" key={pathname}>
              <ReactRouterLink className="Breadcrumb__link" to={`/${pathname}`}>
                {PATHNAME_TO_TITLE_MAPPING[pathname]}
              </ReactRouterLink>
            </div>
          ) : (
            <ReactRouterLink className="Breadcrumb__link-container" key={pathname} to={`/${pathname}`}>
              <span className="Breadcrumb__link">{PATHNAME_TO_TITLE_MAPPING[pathname]}</span>
            </ReactRouterLink>
          );
        }

        // projects
        const isLastIndex = index === pathnames.length - 1;
        if (index === 1) {
          return (
            <div className="Breadcrumb__link-container" key={pathname}>
              {width > 992 ? (
                <>
                  <Icon className="Breadcrumb__icon" icon={IconType.chevronRight} size={16} totalSize={16} />
                  <ReactRouterLink
                    className={clsx('Breadcrumb__link', isLastIndex && 'Breadcrumb__link--active')}
                    to={`/developer/${pathname}`}
                  >
                    {PATHNAME_TO_TITLE_MAPPING[pathname]}
                  </ReactRouterLink>
                </>
              ) : (
                <>
                  <Icon className="Breadcrumb__icon" icon={IconType.chevronRight} size={16} totalSize={16} />
                  <button className="Breadcrumb__button" onClick={toggleWhitepaperDropdown}>
                    <span className={clsx('Breadcrumb__link', isLastIndex && 'Breadcrumb__link--active')}>
                      {PATHNAME_TO_TITLE_MAPPING[pathname]}
                    </span>
                    <Icon
                      className="Breadcrumb__icon"
                      id={pathname}
                      icon={projectsDropdownEl ? IconType.chevronUp : IconType.chevronDown}
                      size={16}
                      totalSize={16}
                    />
                  </button>
                  <Popover
                    anchorEl={projectsDropdownEl}
                    anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
                    className="Breadcrumb__Popover"
                    closePopover={() => setProjectsDropdownEl(null)}
                    id="whitepaper"
                    open={!!projectsDropdownEl}
                    transformOrigin={{horizontal: 'center', vertical: 'top'}}
                    transformOffset={{horizontal: 0, vertical: 12}}
                  >
                    {PATHNAME_TO_DROPDOWN_SELECTIONS[pathname].map((selection) => {
                      return (
                        <ReactRouterLink className="Breadcrumb__Popover-link" key={selection.url} to={selection.url}>
                          {selection.title}
                        </ReactRouterLink>
                      );
                    })}
                  </Popover>
                </>
              )}
            </div>
          );
        }

        // rules or approved projects
        if (index === 2) {
          return (
            <div className="Breadcrumb__link-container" key={pathname}>
              {width > 992 ? (
                <>
                  <Icon className="Breadcrumb__icon" icon={IconType.chevronRight} size={16} totalSize={16} />
                  <ReactRouterLink
                    className={clsx('Breadcrumb__link', isLastIndex && 'Breadcrumb__link--active')}
                    to={`/developer/projects/${pathname}`}
                  >
                    {PATHNAME_TO_TITLE_MAPPING[pathname]}
                  </ReactRouterLink>
                </>
              ) : (
                <>
                  <button className="Breadcrumb__button" onClick={toggleSectionDropdown}>
                    <span className={clsx('Breadcrumb__link', isLastIndex && 'Breadcrumb__link--active')}>
                      {PATHNAME_TO_TITLE_MAPPING[pathname]}
                    </span>
                    <Icon
                      className="Breadcrumb__icon"
                      id={pathname}
                      icon={sectionDropdownEl ? IconType.chevronUp : IconType.chevronDown}
                      size={16}
                      totalSize={16}
                    />
                  </button>
                  <Popover
                    anchorEl={sectionDropdownEl}
                    anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
                    className="Breadcrumb__Popover"
                    closePopover={() => setSectionDropdownEl(null)}
                    id={pathname}
                    open={!!sectionDropdownEl}
                    transformOrigin={{horizontal: 'center', vertical: 'top'}}
                    transformOffset={{horizontal: 50, vertical: 12}}
                  >
                    {pathname === 'approved-projects'
                      ? approvedProjectUrls &&
                        approvedProjectUrls.map((selection) => {
                          return (
                            <ReactRouterLink
                              className="Breadcrumb__Popover-link"
                              key={selection.url}
                              to={selection.url}
                            >
                              {selection.title}
                            </ReactRouterLink>
                          );
                        })
                      : PATHNAME_TO_DROPDOWN_SELECTIONS[pathname]?.map((selection) => {
                          const selectionHash = selection.url.slice(selection.url.indexOf('#') + 1);
                          return (
                            <Link
                              activeClass="SideMenu__link--active"
                              className="Breadcrumb__Popover-link"
                              hashSpy
                              ignoreCancelEvents
                              key={selection.url}
                              offset={-(NAVBAR_HEIGHT + TOP_LINK_HEIGHT + breadcrumbHeight)}
                              smooth
                              spy
                              to={selectionHash}
                            >
                              {selection.title}
                            </Link>
                          );
                        })}
                  </Popover>
                </>
              )}
            </div>
          );
        }

        // individual project details
        return projectName ? (
          <div className="Breadcrumb__link-container" key={pathname}>
            {width > 992 ? (
              <>
                <Icon className="Breadcrumb__icon" icon={IconType.chevronRight} size={16} totalSize={16} />
                <span className="Breadcrumb__link--active">{projectName}</span>
              </>
            ) : (
              <>
                <button className="Breadcrumb__button" onClick={toggleProjectDetailsDropdown}>
                  <span className="Breadcrumb__link--active">{projectName}</span>
                  <Icon
                    className="Breadcrumb__icon"
                    id={pathname}
                    icon={projectDetailsDropdownEl ? IconType.chevronUp : IconType.chevronDown}
                    size={16}
                    totalSize={16}
                  />
                </button>
                <Popover
                  anchorEl={projectDetailsDropdownEl}
                  anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
                  className="Breadcrumb__Popover"
                  closePopover={() => setProjectDetailsDropdownEl(null)}
                  id={pathname}
                  open={!!projectDetailsDropdownEl}
                  transformOrigin={{horizontal: 'center', vertical: 'top'}}
                  transformOffset={{horizontal: 50, vertical: 12}}
                >
                  {orderedProjectDetailsTopic.map((topic) => {
                    return (
                      <Link
                        activeClass="SideMenu__link--active"
                        className="Breadcrumb__Popover-link"
                        hashSpy
                        ignoreCancelEvents
                        key={topic.anchor}
                        offset={-(NAVBAR_HEIGHT + TOP_LINK_HEIGHT + breadcrumbHeight + projectDetailsHeaderHeight)}
                        smooth
                        spy
                        to={topic.anchor}
                      >
                        {topic.title}
                      </Link>
                    );
                  })}
                </Popover>
              </>
            )}
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Breadcrumb;
