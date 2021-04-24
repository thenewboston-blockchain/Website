import React, {FC} from 'react';

import clsx from 'clsx';

import './Button.scss';

type Props = {
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  rounded?: boolean;
  type?: 'primary' | 'outlined' | 'empty';
};

const Button: FC<Props> = ({children, className, iconLeft, iconRight, onClick, rounded = false, type = 'primary'}) => {
  return (
    <button className={clsx('Button', `Button__${type}`, {'Button--rounded': rounded}, className)} onClick={onClick}>
      {iconLeft && <div className="Button__icon-left">{iconLeft}</div>}
      {children}
      {iconRight && <div className="Button__icon-right">{iconRight}</div>}
    </button>
  );
};

export default Button;
