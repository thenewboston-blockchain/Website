import React, {FC, useState} from 'react';

import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';
import {Popover} from 'components';
import {useWindowDimensions} from 'hooks';
import {Link as ReactRouterLink} from 'react-router-dom';
import {Link} from 'react-scroll';

import './BreadcrumbSection.scss';

type Props = {
  titleLink: string;
  title: string;
  isSectionSelected: boolean;
  hasItems: boolean;
  items?: {
    url: string;
    title: string;
  }[];
  isItemsInSamePage?: boolean;
  hasPrecedingArrowIcon?: boolean;
  hasPrecedingArrowIcon992px?: boolean;
  scrollOffset?: number; // only used if items are in the same page
};

const BreadcrumbSection: FC<Props> = ({
  hasItems,
  hasPrecedingArrowIcon = false,
  hasPrecedingArrowIcon992px = false,
  isItemsInSamePage,
  isSectionSelected,
  items,
  scrollOffset,
  title,
  titleLink,
}) => {
  const {width} = useWindowDimensions();

  const [dropDownEl, setDropDownEl] = useState<HTMLButtonElement | null>(null);

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!e) return;

    if (dropDownEl) {
      setDropDownEl(null);
    } else {
      setDropDownEl(e.currentTarget);
    }
  };

  return (
    <>
      {/* Only show breadcrumb without dropdown if width > 992 or breadcrumb section does not have sub-items */}
      {width > 992 || !hasItems ? (
        <div className="BreadcrumbSection__link-container">
          {hasPrecedingArrowIcon && (
            <Icon className="BreadcrumbSection__icon" icon={IconType.chevronRight} size={16} totalSize={16} />
          )}
          <ReactRouterLink
            className={clsx('BreadcrumbSection__link', isSectionSelected && 'BreadcrumbSection__link--active')}
            to={titleLink}
          >
            {title}
          </ReactRouterLink>
        </div>
      ) : (
        <>
          {hasPrecedingArrowIcon992px && (
            <Icon className="BreadcrumbSection__icon" icon={IconType.chevronRight} size={16} totalSize={16} />
          )}
          <button className="BreadcrumbSection__button" onClick={toggleDropdown}>
            <span className={clsx('BreadcrumbSection__link', isSectionSelected && 'BreadcrumbSection__link--active')}>
              {title}
            </span>
            <Icon
              className="BreadcrumbSection__icon"
              id={titleLink}
              icon={dropDownEl ? IconType.chevronUp : IconType.chevronDown}
              size={16}
              totalSize={16}
            />
          </button>
          <Popover
            anchorEl={dropDownEl}
            anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
            className="BreadcrumbSection__Popover"
            closePopover={() => setDropDownEl(null)}
            id="whitepaper"
            open={!!dropDownEl}
            transformOrigin={{horizontal: 'center', vertical: 'top'}}
            transformOffset={{horizontal: width > 414 ? 0 : 50, vertical: 12}}
          >
            {items &&
              items.map((item) => {
                if (isItemsInSamePage) {
                  const selectionHash = item.url.slice(item.url.indexOf('#') + 1);
                  return (
                    <Link
                      activeClass="BreadcrumbSection__link--active"
                      className="BreadcrumbSection__Popover-link"
                      hashSpy
                      ignoreCancelEvents
                      key={item.url}
                      offset={scrollOffset || 0}
                      smooth
                      spy
                      to={selectionHash}
                    >
                      {item.title}
                    </Link>
                  );
                }
                return (
                  <ReactRouterLink className="BreadcrumbSection__Popover-link" key={item.url} to={item.url}>
                    {item.title}
                  </ReactRouterLink>
                );
              })}
          </Popover>
        </>
      )}
    </>
  );
};

export default BreadcrumbSection;
