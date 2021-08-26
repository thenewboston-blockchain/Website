import React, {ChangeEvent, FocusEvent, useEffect, useRef} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';
import {SFC} from 'types/generic';

import './Input.scss';

export interface BaseInputProps {
  autoComplete?: 'email' | 'current-password' | 'new-password';
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  fullWidth?: boolean;
  name?: string;
  onKeyDown?(e: React.KeyboardEvent<HTMLInputElement>): void;
  onBlur?(e: FocusEvent<HTMLInputElement>): void;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  type?: 'number' | 'password' | 'text';
  value: string;
}

const Input: SFC<BaseInputProps> = ({
  autoComplete,
  className,
  disabled = false,
  error = false,
  focused = false,
  fullWidth = false,
  name,
  onBlur,
  onChange,
  onKeyDown,
  placeholder = 'Enter',
  type = 'text',
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focused) {
      inputRef.current?.focus();
    }
  }, [focused, inputRef]);

  return (
    <input
      autoComplete={autoComplete}
      className={clsx('Input', className, {
        'Input--error': error,
        'Input--full-width': fullWidth,
        ...bemify(className, '--error', error),
      })}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      ref={inputRef}
      type={type}
      value={value}
    />
  );
};

export default Input;
