import React, {forwardRef, KeyboardEvent} from 'react';

import * as S from './Styles';

interface ComponentProps {
  closePopover(): void;
  handleKeyDown(e: KeyboardEvent<HTMLAnchorElement>): void;
  title: string;
  isExternal?: boolean;
  newWindow?: boolean;
  to: string;
}

const TopNavPopoverItemSimple = forwardRef<HTMLAnchorElement, ComponentProps>(
  ({closePopover, handleKeyDown, isExternal, newWindow = false, title, to}, ref) => {
    const handleButtonClick = (): void => {
      closePopover();
    };

    return isExternal ? (
      <S.ExternalLink href={to} showNewWindowIcon={false} newWindow={newWindow}>
        {title}
      </S.ExternalLink>
    ) : (
      <S.InternalLink onClick={handleButtonClick} onKeyDown={handleKeyDown} ref={ref} to={to}>
        {title}
      </S.InternalLink>
    );
  },
);

export default TopNavPopoverItemSimple;
