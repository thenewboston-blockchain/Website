import React, {FC, useEffect, useRef} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import './Button.scss';

export interface BaseButtonProps {
  className?: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  focused?: boolean;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'contained' | 'link' | 'outlined';
}

const Button: FC<BaseButtonProps> = ({
  children,
  color = 'primary',
  className,
  disabled = false,
  focused = false,
  onClick,
  type = 'button',
  variant = 'contained',
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focused) {
      buttonRef.current?.focus();
    }
  }, [focused, buttonRef]);

  return (
    <button
      className={clsx('Button', `Button--${variant}`, `Button--${color}`, className, {
        'Button--disabled': disabled,
        ...bemify(className, `--${variant}`),
        ...bemify(className, `--${color}`),
        ...bemify(className, '--disabled', disabled),
      })}
      disabled={disabled}
      onClick={onClick}
      ref={buttonRef}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
