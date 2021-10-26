import React, {forwardRef, KeyboardEvent} from 'react';
import {IconType} from '@thenewboston/ui';

import * as S from './Styles';

interface ComponentProps {
  closePopover(): void;
  description: string;
  handleKeyDown(e: KeyboardEvent<HTMLAnchorElement>): void;
  iconSize?: number;
  iconType: IconType;
  isExternal?: boolean;
  newWindow?: boolean;
  title: string;
  to: string;
}

const TopNavPopoverItem = forwardRef<HTMLAnchorElement, ComponentProps>(
  ({closePopover, description, handleKeyDown, iconSize, iconType, isExternal, newWindow = false, title, to}, ref) => {
    const handleButtonClick = (): void => {
      closePopover();
    };

    const renderChildren = () => {
      return (
        <>
          <S.PopoverIcon icon={iconType} size={iconSize} totalSize={42} />
          <div>
            <S.PopoverTitle className="TopNavPopoverItem__title">{title}</S.PopoverTitle>
            <S.PopoverDescription>{description}</S.PopoverDescription>
          </div>
        </>
      );
    };

    return isExternal ? (
      <S.ExternalLink href={to} newWindow={newWindow}>
        {renderChildren()}
      </S.ExternalLink>
    ) : (
      <S.InternalLink onClick={handleButtonClick} onKeyDown={handleKeyDown} ref={ref} to={to}>
        {renderChildren()}
      </S.InternalLink>
    );
  },
);

export default TopNavPopoverItem;
