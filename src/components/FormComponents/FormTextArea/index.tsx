/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import {Field} from 'formik';
import clsx from 'clsx';

import {BaseInputProps, TextArea} from 'components/FormElements';
import {useFormContext} from 'hooks';
import {BaseFormComponentProps} from 'types/forms';
import {SFC} from 'types/generic';
import {renderFormError, renderFormLabel} from 'utils/forms';

type ComponentProps = BaseFormComponentProps<BaseInputProps>;

const FormTextArea: SFC<ComponentProps> = ({hideErrorText = false, label, required = false, ...baseInputProps}) => {
  const {className, name} = baseInputProps;
  const {errors, touched} = useFormContext();
  const error = !!errors[name] && !!touched[name];

  return (
    <div className="FormTextArea FormFieldComponent">
      {renderFormLabel(name, className, label, required)}
      <Field
        {...baseInputProps}
        as={TextArea}
        className={clsx('FormField', className)}
        error={error}
        required={required}
      />
      {renderFormError(name, className, hideErrorText)}
    </div>
  );
};

export default FormTextArea;
