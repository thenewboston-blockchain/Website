/* eslint-disable react/jsx-props-no-spreading */

import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import noop from 'lodash/noop';
import {bemify} from '@thenewboston/utils';

import {BaseRadioProps, Radio} from 'components/FormElements';
import {useFormContext} from 'hooks';
import {BaseFormComponentProps, InputOption} from 'types/forms';
import {SFC} from 'types/generic';
import {renderFormError, renderFormLabel} from 'utils/forms';

interface BaseRadioGroupProps extends Omit<BaseRadioProps, 'checked'> {
  options: InputOption[];
}

type ComponentProps = BaseFormComponentProps<BaseRadioGroupProps>;

const FormRadioGroup: SFC<ComponentProps> = ({
  focused = false,
  hideErrorText = false,
  label,
  options,
  required,
  ...baseRadioProps
}) => {
  const {className, name} = baseRadioProps;
  const {errors, setFieldTouched, setFieldValue, touched, values} = useFormContext();
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const error = !!errors[name] && !!touched[name];

  const selectedOption = useMemo(() => {
    const value = values[name];
    return options.find((option) => option.value === value) || null;
  }, [name, options, values]);

  const handleClick = (value: string) => async (): Promise<void> => {
    setFieldTouched(name, true, false);
    setFieldValue(name, value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const firstClassName = className?.split(' ')[0] || 'FormRadioGroup';
    if (focusedIndex !== options.length - 1 && (e.key === 'ArrowRight' || e.key === 'ArrowDown')) {
      const nextOptionClassName = `${firstClassName}__option-${focusedIndex + 1}`;
      const nextOption = document.querySelector(`.${nextOptionClassName}`) as any;
      if (!nextOption) return;
      setFocusedIndex(focusedIndex + 1);
      nextOption.focus?.();
    } else if (focusedIndex !== 0 && (e.key === 'ArrowLeft' || e.key === 'ArrowUp')) {
      const prevOptionClassName = `${firstClassName}__option-${focusedIndex - 1}`;
      const prevOption = document.querySelector(`.${prevOptionClassName}`) as any;
      if (!prevOption) return;
      setFocusedIndex(focusedIndex - 1);
      prevOption.focus?.();
    }
  };

  return (
    <div className={clsx('FormRadioGroup FormFieldComponent', className)}>
      {renderFormLabel(name, className, label, required)}
      {options.map((option, index) => {
        const optionIsFocused = focused && index === focusedIndex;
        const selected = selectedOption?.value === option.value;
        return (
          <div className="FormField__option" key={option.value}>
            <Radio
              checked={selected}
              className={clsx('FormField__option-input', `FormRadioGroup__option-${index}`, {
                ...bemify(className, '__option-input'),
                ...bemify(className, `__option-${index}`),
              })}
              disabled={option.disabled}
              error={error && selected}
              focused={optionIsFocused}
              onClick={handleClick(option.value)}
              onKeyDown={handleKeyDown}
              unfocusable={index !== 0 && !optionIsFocused}
              value={option.value}
            />
            <span
              role="contentinfo"
              className={clsx('FormField__option-label', {
                'FormField__option-label--disabled': option.disabled,
                ...bemify(className, '__option-label'),
                ...bemify(className, '__option-label--disabled', option.disabled || false),
              })}
              onClick={option.disabled ? noop : handleClick(option.value)}
            >
              {option.label}
            </span>
          </div>
        );
      })}
      {renderFormError(name, className, hideErrorText)}
    </div>
  );
};

export default FormRadioGroup;
