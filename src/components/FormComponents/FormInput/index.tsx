/* eslint-disable react/jsx-props-no-spreading */

import React, {FC} from 'react';
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
  const {errors, touched} = useFormContext();
  const error = !!errors[name] && !!touched[name];

  return (
    <div className={clsx('FormInput FormFieldComponent', className)}>
      {renderFormLabel(name, className, label, required)}
      <Field {...baseInputProps} as={Input} className="FormField" error={error} required={required} />
      {hideErrorBlock ? null : renderFormError(name, className, hideErrorText)}
    </div>
  );
};

export default FormInput;
