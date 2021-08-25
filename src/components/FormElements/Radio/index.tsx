import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';
import {bemify} from '@thenewboston/utils';
import {SFC} from 'types/generic';

import './Radio.scss';

export interface BaseRadioProps {
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

const Radio: SFC<BaseRadioProps> = ({
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
  const radioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (focused) {
      radioRef.current?.focus();
    }
  }, [focused, radioRef]);

  return (
    <>
      <Icon
        className={clsx('Radio', className, {
          'Radio--checked': checked,
          'Radio--error': error,
          ...bemify(className, '--checked', checked),
          ...bemify(className, '--error', error),
        })}
        disabled={disabled}
        icon={checked ? IconType.radioboxMarked : IconType.radioboxBlank}
        onClick={onClick}
        onKeyDown={onKeyDown}
        ref={radioRef}
        size={size}
        totalSize={size}
        unfocusable={unfocusable}
      />
      <input
        className="Radio__input"
        checked={checked}
        disabled={disabled}
        id={name || value}
        name={name || value}
        readOnly
        type="radio"
        value={value}
      />
    </>
  );
};

export default Radio;
