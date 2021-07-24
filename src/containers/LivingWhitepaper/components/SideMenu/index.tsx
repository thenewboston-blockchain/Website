import React, {FC} from 'react';

import {Icon, IconType} from '@thenewboston/ui';
import clsx from 'clsx';
import {NAVBAR_HEIGHT, LIVING_WHITEPAPER_TOP_LINKS_HEIGHT} from 'constants/offsets';
import {Link} from 'react-scroll';
import {useLocation, useHistory} from 'react-router';
import {
  PATHNAME_TO_DROPDOWN_SELECTIONS,
  architecturePath,
  principalEntitiesPath,
  principalEventsPath,
} from '../../constants';

import './SideMenu.scss';

type Props = {
  breadcrumbHeight: number;
};

const SideMenu: FC<Props> = ({breadcrumbHeight}) => {
  const {pathname} = useLocation();
  const history = useHistory();

  const isPrincipalEntitiesSelected = pathname.includes(principalEntitiesPath);
  const isPrincipalEventsSelected = pathname.includes(principalEventsPath);
  const isArchitectureSelected = pathname.includes(architecturePath);

  return (
    <div className="SideMenu">
      <div className="SideMenu__section">
        <button
          className={clsx(
            'SideMenu__section-header',
            isPrincipalEntitiesSelected && 'SideMenu__section-header--active',
          )}
          onClick={() => history.push(principalEntitiesPath)}
        >
          <div>Principle Entities on the Network</div>
          <Icon
            className="SideMenu__toggle-icon"
            icon={isPrincipalEntitiesSelected ? IconType.chevronUp : IconType.chevronDown}
            size={20}
            totalSize={20}
          />
        </button>
        {isPrincipalEntitiesSelected &&
          PATHNAME_TO_DROPDOWN_SELECTIONS['principal-entities'].map((selection) => {
            const selectionHash = selection.url.slice(selection.url.indexOf('#') + 1);
            return (
              <Link
                activeClass="SideMenu__link--active"
                className={clsx('SideMenu__link')}
                hashSpy
                ignoreCancelEvents
                key={selection.url}
                offset={-(NAVBAR_HEIGHT + LIVING_WHITEPAPER_TOP_LINKS_HEIGHT + breadcrumbHeight)}
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
        <button
          className={clsx('SideMenu__section-header', isPrincipalEventsSelected && 'SideMenu__section-header--active')}
          onClick={() => history.push(principalEventsPath)}
        >
          <div>Principle Events and Processes on the Network</div>
          <Icon
            className="SideMenu__toggle-icon"
            icon={isPrincipalEventsSelected ? IconType.chevronUp : IconType.chevronDown}
            size={20}
            totalSize={20}
          />
        </button>
        {isPrincipalEventsSelected &&
          PATHNAME_TO_DROPDOWN_SELECTIONS['principal-events'].map((selection) => {
            const selectionHash = selection.url.slice(selection.url.indexOf('#') + 1);
            return (
              <Link
                activeClass="SideMenu__link--active"
                className={clsx('SideMenu__link')}
                hashSpy
                ignoreCancelEvents
                key={selection.url}
                offset={-(NAVBAR_HEIGHT + LIVING_WHITEPAPER_TOP_LINKS_HEIGHT + breadcrumbHeight)}
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
        <button
          className={clsx('SideMenu__section-header', isArchitectureSelected && 'SideMenu__section-header--active')}
          onClick={() => history.push(architecturePath)}
        >
          <div>Architecture - Deep Dive</div>
          <Icon
            className="SideMenu__toggle-icon"
            icon={isArchitectureSelected ? IconType.chevronUp : IconType.chevronDown}
            size={20}
            totalSize={20}
          />
        </button>
        {isArchitectureSelected &&
          PATHNAME_TO_DROPDOWN_SELECTIONS.architecture.map((selection) => {
            const selectionHash = selection.url.slice(selection.url.indexOf('#') + 1);
            return (
              <Link
                activeClass="SideMenu__link--active"
                className={clsx('SideMenu__link')}
                hashSpy
                ignoreCancelEvents
                key={selection.url}
                offset={-(NAVBAR_HEIGHT + LIVING_WHITEPAPER_TOP_LINKS_HEIGHT + breadcrumbHeight)}
                smooth
                spy
                to={selectionHash}
              >
                {selection.title}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SideMenu;
