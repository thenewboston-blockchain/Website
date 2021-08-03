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

import './Breadcrumb.scss';

type Props = {
  className?: string;
  breadcrumbHeight: number;
};

const TOP_LINK_HEIGHT = 72;

const Breadcrumb: FC<Props> = ({breadcrumbHeight, className}) => {
  const location = useLocation();
  const {width} = useWindowDimensions();
  const [whitepaperDropdownEl, setWhitepaperDropdownEl] = useState<HTMLButtonElement | null>(null);
  const [sectionDropdownEl, setSectionDropdownEl] = useState<HTMLButtonElement | null>(null);
  const pathnames = location.pathname.slice(1).split('/');

  const toggleWhitepaperDropdown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!e) return;

    if (whitepaperDropdownEl) {
      setWhitepaperDropdownEl(null);
    } else {
      setWhitepaperDropdownEl(e.currentTarget);
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
              <Icon className="Breadcrumb__icon" icon={IconType.chevronRight} size={16} totalSize={16} />
            </div>
          ) : (
            <ReactRouterLink className="Breadcrumb__link-container" key={pathname} to={`/${pathname}`}>
              <span className="Breadcrumb__link">{PATHNAME_TO_TITLE_MAPPING[pathname]}</span>
              <Icon className="Breadcrumb__icon" icon={IconType.chevronRight} size={16} totalSize={16} />
            </ReactRouterLink>
          );
        }

        // whitepaper
        const isLastIndex = index === pathnames.length - 1;
        if (index === 1) {
          return (
            <div className="Breadcrumb__link-container" key={pathname}>
              {width > 992 ? (
                <>
                  <ReactRouterLink
                    className={clsx('Breadcrumb__link', isLastIndex && 'Breadcrumb__link--active')}
                    to={`/developer/${pathname}`}
                  >
                    {PATHNAME_TO_TITLE_MAPPING[pathname]}
                  </ReactRouterLink>
                  <Icon className="Breadcrumb__icon" icon={IconType.chevronRight} size={16} totalSize={16} />
                </>
              ) : (
                <>
                  <button className="Breadcrumb__button" onClick={toggleWhitepaperDropdown}>
                    <span className={clsx('Breadcrumb__link', isLastIndex && 'Breadcrumb__link--active')}>
                      {PATHNAME_TO_TITLE_MAPPING[pathname]}
                    </span>
                    <Icon
                      className="Breadcrumb__icon"
                      id={pathname}
                      icon={whitepaperDropdownEl ? IconType.chevronUp : IconType.chevronDown}
                      size={16}
                      totalSize={16}
                    />
                  </button>
                  <Popover
                    anchorEl={whitepaperDropdownEl}
                    anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
                    className="Breadcrumb__Popover"
                    closePopover={() => setWhitepaperDropdownEl(null)}
                    id="whitepaper"
                    open={!!whitepaperDropdownEl}
                    transformOrigin={{horizontal: 'center', vertical: 'top'}}
                    transformOffset={{horizontal: 0, vertical: 12}}
                  >
                    {PATHNAME_TO_DROPDOWN_SELECTIONS.whitepaper.map((selection) => {
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

        // section
        return (
          <div className="Breadcrumb__link-container" key={pathname}>
            {width > 992 ? (
              <span className="Breadcrumb__link--active">{PATHNAME_TO_TITLE_MAPPING[pathname]}</span>
            ) : (
              <>
                <button className="Breadcrumb__button" onClick={toggleSectionDropdown}>
                  <span className="Breadcrumb__link--active">{PATHNAME_TO_TITLE_MAPPING[pathname]}</span>
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
                  transformOffset={{horizontal: 0, vertical: 12}}
                >
                  {PATHNAME_TO_DROPDOWN_SELECTIONS[pathname].map((selection) => {
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
      })}
    </div>
  );
};

export default Breadcrumb;
