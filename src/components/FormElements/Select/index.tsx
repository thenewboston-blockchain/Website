/* eslint-disable react/jsx-props-no-spreading */

import React, {ReactNode, useMemo} from 'react';
import ReactSelect, {ActionMeta, FocusEventHandler, FormatOptionLabelMeta} from 'react-select';
import ReactSelectCreatable from 'react-select/creatable';
import {ValueType} from 'react-select/src/types';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {SFC} from 'types/generic';
import {InputOption} from 'types/forms';

import './Select.scss';

export interface BaseSelectProps {
  clearable?: boolean;
  creatable?: boolean;
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  name?: string;
  onBlur?: FocusEventHandler;
  onChange?(value: ValueType<InputOption>, actionMeta?: ActionMeta<InputOption>): void;
  options: InputOption[];
  placeholder?: string;
  searchable?: boolean;
  value?: InputOption | null;
}

interface ComponentProps extends BaseSelectProps {
  filterOption?(option: InputOption, rawInput: string): boolean;
  formatOptionLabel?(option: InputOption, labelMeta: FormatOptionLabelMeta<InputOption>): ReactNode;
}

const Select: SFC<ComponentProps> = ({
  className,
  clearable = false,
  creatable = false,
  disabled = false,
  error = false,
  filterOption,
  focused = false,
  formatOptionLabel,
  searchable = true,
  name,
  onBlur,
  onChange,
  options,
  placeholder = 'Select',
  value,
}) => {
  const formattedOptions = useMemo(
    () =>
      options.map(({disabled: optionDisabled, label, value: optionValue}) => ({
        isDisabled: optionDisabled,
        label,
        value: optionValue,
      })),
    [options],
  );

  const getOptionLabel = ({label, value: valueParam}: InputOption): string => label || valueParam;

  const getSharedSelectProps = () => {
    return {
      autoFocus: focused,
      className: clsx('Select', className, {
        'Select--error': error,
        ...bemify(className, '--error', error),
      }),
      classNamePrefix: 'Select',
      filterOption,
      formatOptionLabel,
      getOptionLabel,
      isClearable: clearable,
      isDisabled: disabled,
      isSearchable: searchable,
      menuPortalTarget: document.getElementById('dropdown-root'),
      name,
      onBlur,
      onChange,
      onKeyDown: handleKeyDown,
      options: formattedOptions,
      placeholder,
      value,
    };
  };

  const handleKeyDown = (e: any) => {
    if (!e.target.value && e.key === 'Backspace') {
      onChange?.(null);
    }
  };

  return creatable ? (
    <ReactSelectCreatable formatCreateLabel={() => undefined} {...getSharedSelectProps()} />
  ) : (
    <ReactSelect {...getSharedSelectProps()} />
  );
};

export default Select;
