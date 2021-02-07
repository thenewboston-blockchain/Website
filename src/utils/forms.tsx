import React, {ReactNode} from 'react';
import clsx from 'clsx';
import {ErrorMessage} from 'formik';
import {bemify} from '@thenewboston/utils';

import RequiredAsterisk from 'components/RequiredAsterisk';

export const renderFormError = (name: string, classNames: string | undefined, hideErrorText = false): ReactNode => (
  <span className={clsx('FormFieldComponent__error-message', {...bemify(classNames, '__error-message')})}>
    {hideErrorText ? null : <ErrorMessage name={name} />}
  </span>
);

export const renderFormLabel = (
  name: string,
  classNames: string | undefined,
  label?: string,
  required?: boolean,
): ReactNode =>
  label ? (
    <label className={clsx('FormFieldComponent__label', {...bemify(classNames, '__label')})} htmlFor={name}>
      {label}
      {required ? <RequiredAsterisk /> : null}
    </label>
  ) : null;
