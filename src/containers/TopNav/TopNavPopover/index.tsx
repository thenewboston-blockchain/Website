import React, {FC, KeyboardEvent, ReactNode, useCallback, useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {IconType} from '@thenewboston/ui';

import {Popover} from 'components';
import {useWindowDimensions} from 'hooks';
import TopNavPopoverItem from './TopNavPopoverItem';
import TopNavPopoverItemSimple from './TopNavPopoverItemSimple';

import * as S from './Styles';

export interface TopNavPopoverItemType {
  description?: string;
  iconSize?: number;
  iconType?: IconType;
  isExternal?: boolean;
  newWindow?: boolean;
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
  const history = useHistory();
  const itemsRef = useRef<HTMLAnchorElement[]>([]);
  const popoverButtonRef = useRef<HTMLButtonElement>(null);
  const {clientWidth} = useWindowDimensions();

  const popoverIsOpen = !!anchorEl;

  useEffect(() => {
    if (popoverIsOpen) {
      itemsRef.current[0]?.focus();
    }
  }, [itemsRef, popoverIsOpen]);

  const unsetAnchorEl = useCallback((): void => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const handleOptionKeyDown = (to: string, index: number, disabled?: boolean) => (
    e: KeyboardEvent<HTMLAnchorElement>,
  ): void => {
    if (e.shiftKey && e.key === 'Tab') {
      // Shift + Tab at first item -> focus at last item
      if (index === 0) {
        e.preventDefault();
        itemsRef.current[items.length - 1]?.focus();
      }
      return;
    }

    if (e.key === 'Tab') {
      // Tab at the last item -> focus at first item
      if (index === items.length - 1) {
        e.preventDefault();
        itemsRef.current[0]?.focus();
      }
      return;
    }

    e.preventDefault();

    if (e.key === 'Escape') {
      unsetAnchorEl();
      popoverButtonRef.current?.focus(); // focus back to popover button when close popover
      return;
    }

    if (e.key === 'ArrowDown' && index !== items.length - 1) {
      itemsRef.current[index + 1]?.focus();
      return;
    }

    if (e.key === 'ArrowUp' && index !== 0) {
      itemsRef.current[index - 1]?.focus();
      return;
    }

    if (e.key === 'Enter' && !disabled) {
      unsetAnchorEl();
      history.push(to);
    }
  };

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
      <S.PopoverButton
        isOpened={popoverIsOpen}
        className={className}
        onClick={handleButtonClick}
        ref={popoverButtonRef}
      >
        {customButtonContent || (
          <>
            {buttonText}
            <S.PopoverIcon isOpened={popoverIsOpen} icon={IconType.chevronDown} />
          </>
        )}
      </S.PopoverButton>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
        closePopover={unsetAnchorEl}
        id={popoverId}
        open={popoverIsOpen}
        transformOrigin={{horizontal: 'center', vertical: 'top'}}
        transformOffset={{horizontal: 0, vertical: 12}}
      >
        {items.map(({description, iconSize, iconType, isExternal, newWindow, title, to}, index) => {
          if (iconType !== undefined) {
            return (
              <TopNavPopoverItem
                closePopover={unsetAnchorEl}
                description={description || ''}
                handleKeyDown={handleOptionKeyDown(to, index)}
                iconSize={iconSize}
                iconType={iconType}
                isExternal={isExternal}
                key={title}
                newWindow={newWindow}
                ref={(el) => {
                  if (el) {
                    itemsRef.current[index] = el;
                  }
                }}
                title={title}
                to={to}
              />
            );
          }
          return (
            <TopNavPopoverItemSimple
              closePopover={unsetAnchorEl}
              handleKeyDown={handleOptionKeyDown(to, index)}
              key={title}
              ref={(el) => {
                if (el) {
                  itemsRef.current[index] = el;
                }
              }}
              isExternal={isExternal}
              newWindow={newWindow}
              title={title}
              to={to}
            />
          );
        })}
      </Popover>
    </>
  );
};

export default TopNavPopover;
