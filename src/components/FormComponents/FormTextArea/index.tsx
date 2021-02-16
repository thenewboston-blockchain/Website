/* eslint-disable react/jsx-props-no-spreading */

import React, {FC} from 'react';
import {Field} from 'formik';
import clsx from 'clsx';

import {BaseInputProps, TextArea} from 'components/FormElements';
import {useFormContext} from 'hooks';
import {BaseFormComponentProps} from 'types/forms';
import {renderFormError, renderFormLabel} from 'utils/forms';

type ComponentProps = BaseFormComponentProps<BaseInputProps>;

const FormTextArea: FC<ComponentProps> = ({hideErrorText = false, label, required, ...baseInputProps}) => {
  const {className, name} = baseInputProps;
  const {errors, touched} = useFormContext();
  const error = !!errors[name] && !!touched[name];

  return (
    <div className={clsx('FormTextArea FormFieldComponent', className)}>
      {renderFormLabel(name, className, label, required)}
      <Field {...baseInputProps} as={TextArea} className="FormField" error={error} required={required} />
      {renderFormError(name, className, hideErrorText)}
    </div>
  );
};

export default FormTextArea;
