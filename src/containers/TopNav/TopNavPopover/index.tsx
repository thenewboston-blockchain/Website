import React, {FC, ReactNode, useCallback, useEffect} from 'react';
import clsx from 'clsx';

import {Icon, IconType, Popover} from 'components';
import {useWindowDimensions} from 'hooks';

import TopNavPopoverItem from './TopNavPopoverItem';
import TopNavPopoverItemSimple from './TopNavPopoverItemSimple';
import './TopNavPopover.scss';

export interface TopNavPopoverItemType {
  description?: string;
  iconSize?: number;
  iconType?: IconType;
  title: string;
  to: string;
}

interface ComponentProps {
  anchorEl: HTMLButtonElement | null;
  buttonText?: string;
  className?: string;
  customButtonContent?: ReactNode;
  items: TopNavPopoverItemType[];
  popoverId: string;
  setAnchorEl(newEl: HTMLButtonElement | null): void;
}

const TopNavPopover: FC<ComponentProps> = ({
  anchorEl,
  buttonText,
  className,
  customButtonContent,
  items,
  popoverId,
  setAnchorEl,
}) => {
  const {clientWidth} = useWindowDimensions();

  const popoverIsOpen = !!anchorEl;

  const unsetAnchorEl = useCallback((): void => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (!anchorEl) {
      setAnchorEl(e.currentTarget);
      return;
    }
    unsetAnchorEl();
  };

  useEffect(() => {
    if (clientWidth < 1200 && popoverIsOpen) {
      unsetAnchorEl();
    }
  }, [popoverIsOpen, unsetAnchorEl, clientWidth]);

  return (
    <>
      <button className={clsx('TopNavPopover', className)} onClick={handleButtonClick}>
        {customButtonContent || (
          <>
            {buttonText}
            <Icon
              className={clsx('TopNavPopover__chevron-icon', {
                'TopNavPopover__chevron-icon--open': popoverIsOpen,
              })}
              icon={IconType.chevronDown}
            />
          </>
        )}
      </button>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
        className="TopNavPopover__Popover"
        closePopover={unsetAnchorEl}
        id={popoverId}
        open={popoverIsOpen}
        transformOrigin={{horizontal: 'center', vertical: 'top'}}
        transformOffset={{horizontal: 0, vertical: 12}}
      >
        {items.map(({description, iconSize, iconType, title, to}) => {
          if (iconType !== undefined) {
            return (
              <TopNavPopoverItem
                closePopover={unsetAnchorEl}
                description={description || ''}
                iconSize={iconSize}
                iconType={iconType}
                title={title}
                to={to}
              />
            );
          }
          return <TopNavPopoverItemSimple closePopover={unsetAnchorEl} title={title} to={to} />;
        })}
      </Popover>
    </>
  );
};

export default TopNavPopover;
