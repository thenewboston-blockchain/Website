import React, {FC} from 'react';

import {Icon, IconType} from '@thenewboston/ui';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router';
import {
  PATHNAME_TO_DROPDOWN_SELECTIONS,
  architecturePath,
  principalEntitiesPath,
  principalEventsPath,
} from '../../constants';

import './SideMenu.scss';

const SideMenu: FC = () => {
  const {pathname, hash} = useLocation();

  const isPrincipalEntitiesSelected = pathname.includes(principalEntitiesPath);
  const isPrincipalEventsSelected = pathname.includes(principalEventsPath);
  const isArchitectureSelected = pathname.includes(architecturePath);

  return (
    <>
      <div className="SideMenu__section">
        <button
          className={clsx(
            'SideMenu__section-header',
            isPrincipalEntitiesSelected && 'SideMenu__section-header--active',
          )}
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
            return (
              <Link
                className={clsx('SideMenu__link', selection.url.includes(hash) && 'SideMenu__link--active')}
                key={selection.url}
                to={selection.url}
              >
                {selection.title}
              </Link>
            );
          })}
      </div>

      <div className="SideMenu__section">
        <button
          className={clsx('SideMenu__section-header', isPrincipalEventsSelected && 'SideMenu__section-header--active')}
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
            return (
              <Link
                className={clsx('SideMenu__link', selection.url.includes(hash) && 'SideMenu__link--active')}
                key={selection.url}
                to={selection.url}
              >
                {selection.title}
              </Link>
            );
          })}
      </div>

      <div className="SideMenu__section">
        <button
          className={clsx('SideMenu__section-header', isArchitectureSelected && 'SideMenu__section-header--active')}
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
            return (
              <Link
                className={clsx('SideMenu__link', selection.url.includes(hash) && 'SideMenu__link--active')}
                key={selection.url}
                to={selection.url}
              >
                {selection.title}
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default SideMenu;
