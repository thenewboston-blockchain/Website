/* eslint-disable react/jsx-props-no-spreading */

import React, {ChangeEvent, FC} from 'react';
import {Field} from 'formik';
import clsx from 'clsx';

import {BaseInputProps, Input} from 'components/FormElements';
import {useFormContext} from 'hooks';
import {BaseFormComponentProps} from 'types/forms';
import {renderFormError, renderFormLabel} from 'utils/forms';

type ComponentProps = BaseFormComponentProps<BaseInputProps>;

const FormInput: FC<ComponentProps> = ({
  hideErrorBlock = false,
  hideErrorText = false,
  label,
  required,
  ...baseInputProps
}) => {
  const {className, name} = baseInputProps;
  const {errors, handleChange, touched, validateField} = useFormContext();
  const error = !!errors[name] && !!touched[name];

  const handleChangeAndValidate = (e: ChangeEvent) => {
    handleChange(e);
    setTimeout(() => {
      validateField(name);
    });
  };

  return (
    <div className={clsx('FormInput FormFieldComponent', className)}>
      {renderFormLabel(name, className, label, required)}
      <Field {...baseInputProps} as={Input} className="FormField" error={error} onChange={handleChangeAndValidate} />
      {hideErrorBlock ? null : renderFormError(name, className, hideErrorText)}
    </div>
  );
};

export default FormInput;
