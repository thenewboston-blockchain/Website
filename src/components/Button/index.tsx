import React, {FC} from 'react';

import clsx from 'clsx';

import './Button.scss';

type Props = {
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  rounded?: boolean;
  type?: 'primary' | 'outlined' | 'empty';
};

const Button: FC<Props> = ({children, className, iconLeft, iconRight, onClick, rounded = false, type = 'primary'}) => {
  return (
    <button
      className={clsx(
        className,
        'ButtonV2',
        `ButtonV2__${type}`,
        {'ButtonV2--rounded': rounded},
        {'ButtonV2--left-icon-missing': !iconLeft},
        {'ButtonV2--right-icon-missing': !iconRight},
      )}
      onClick={onClick}
    >
      {iconLeft && <div className="ButtonV2__icon-left">{iconLeft}</div>}
      {children}
      {iconRight && <div className="ButtonV2__icon-right">{iconRight}</div>}
    </button>
  );
};

export default Button;
