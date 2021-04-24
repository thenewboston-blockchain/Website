import React, {FC} from 'react';

import clsx from 'clsx';

import './Button.scss';

type Props = {
  className?: string;
  iconRight?: React.ReactNode;
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  rounded?: boolean;
  type?: 'primary' | 'outlined' | 'empty';
};

const Button: FC<Props> = ({children, className, iconRight, onClick, rounded = false, type = 'primary'}) => {
  return (
    <button className={clsx('Button', `Button__${type}`, {'Button--rounded': rounded}, className)} onClick={onClick}>
      {children}
      {iconRight && <div className="Button__icon-right">{iconRight}</div>}
    </button>
  );
};

export default Button;
