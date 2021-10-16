import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';
import {SFC} from 'types/generic';

import './Button.scss';

export interface BaseButtonProps {
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  disabled?: boolean;
  focused?: boolean;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'contained' | 'link' | 'outlined';
}

const Button: SFC<BaseButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  color = 'primary',
  className,
  disabled = false,
  focused = false,
  onClick,
  type = 'button',
  variant = 'contained',
  ...otherProps
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focused) {
      buttonRef.current?.focus();
    }
  }, [focused, buttonRef]);

  // temporarily changed className to ButtonWebsite so that it does not conflict with
  // @thenewboston/ui 's styling
  return (
    <button
      className={clsx('ButtonWebsite', `ButtonWebsite--${variant}`, `ButtonWebsite--${color}`, className, {
        'ButtonWebsite--disabled': disabled,
        ...bemify(className, `--${variant}`),
        ...bemify(className, `--${color}`),
        ...bemify(className, '--disabled', disabled),
      })}
      disabled={disabled}
      onClick={onClick}
      ref={buttonRef}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
