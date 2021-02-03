import React, {ChangeEvent, FC, FocusEvent, useEffect, useRef} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';
import './Input.scss';

export interface BaseInputProps {
  autoComplete?: 'email' | 'current-password' | 'new-password';
  className?: string;
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  name?: string;
  onBlur?(e: FocusEvent<HTMLInputElement>): void;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  type?: 'number' | 'password' | 'text';
  value: string;
}

const Input: FC<BaseInputProps> = ({
  autoComplete,
  className,
  disabled = false,
  error = false,
  focused = false,
  name,
  onBlur,
  onChange,
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
        ...getCustomClassNames(className, '--error', error),
      })}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      ref={inputRef}
      type={type}
      value={value}
    />
  );
};

export default Input;
