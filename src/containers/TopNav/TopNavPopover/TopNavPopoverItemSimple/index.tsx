import React, {forwardRef, KeyboardEvent} from 'react';

import * as S from './Styles';

interface ComponentProps {
  closePopover(): void;
  handleKeyDown(e: KeyboardEvent<HTMLAnchorElement>): void;
  title: string;
  to: string;
}

const TopNavPopoverItemSimple = forwardRef<HTMLAnchorElement, ComponentProps>(
  ({closePopover, handleKeyDown, title, to}, ref) => {
    const handleButtonClick = (): void => {
      closePopover();
    };

    return (
      <S.PopoverLink onClick={handleButtonClick} onKeyDown={handleKeyDown} ref={ref} to={to}>
        {title}
      </S.PopoverLink>
    );
  },
);

export default TopNavPopoverItemSimple;
