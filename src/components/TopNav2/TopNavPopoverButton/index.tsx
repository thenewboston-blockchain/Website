import React, {FC} from 'react';
import clsx from 'clsx';

import {Icon, IconType} from 'components';
import {useBooleanState} from 'hooks';

import './TopNavPopoverButton.scss';

interface ComponentProps {
  buttonText: string;
  className?: string;
}

const TopNavPopoverButton: FC<ComponentProps> = ({buttonText, className}) => {
  const [open, toggleOpen] = useBooleanState(false);

  return (
    <button className={clsx('TopNavPopoverButton', className)} onClick={toggleOpen}>
      {buttonText}
      <Icon className="TopNavPopoverButton__chevron-icon" icon={open ? IconType.chevronUp : IconType.chevronDown} />
    </button>
  );
};

export default TopNavPopoverButton;
