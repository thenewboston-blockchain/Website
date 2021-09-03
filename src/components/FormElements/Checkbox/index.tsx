import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';
import {bemify} from '@thenewboston/utils';
import {SFC} from 'types/generic';

import './Checkbox.scss';

export interface BaseCheckboxProps {
  checked: boolean;
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  name?: string;
  onClick?(e?: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  onKeyDown?(e?: React.KeyboardEvent<HTMLDivElement>): void;
  size?: number;
  unfocusable?: boolean;
  value: string;
}

const Checkbox: SFC<BaseCheckboxProps> = ({
  checked,
  className,
  disabled = false,
  error = false,
  focused = false,
  name,
  onClick,
  onKeyDown,
  size = 24,
  unfocusable = false,
  value,
}) => {
  const CheckboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (focused) {
      CheckboxRef.current?.focus();
    }
  }, [focused, CheckboxRef]);

  return (
    <>
      <Icon
        className={clsx('Checkbox', className, {
          'Checkbox--checked': checked,
          'Checkbox--error': error,
          ...bemify(className, '--checked', checked),
          ...bemify(className, '--error', error),
        })}
        disabled={disabled}
        icon={checked ? IconType.checkboxMarked : IconType.checkboxBlankOutline}
        onClick={onClick}
        onKeyDown={onKeyDown}
        ref={CheckboxRef}
        size={size}
        totalSize={size}
        unfocusable={unfocusable}
      />
      <input
        className="Checkbox__input"
        checked={checked}
        disabled={disabled}
        id={name || value}
        name={name || value}
        readOnly
        type="checkbox"
        value={value}
      />
    </>
  );
};

export default Checkbox;
