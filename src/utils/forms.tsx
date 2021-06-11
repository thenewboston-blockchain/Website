import React, {ReactNode} from 'react';
import clsx from 'clsx';
import {ErrorMessage as FormikErrorMessageWrapper} from 'formik';
import {bemify} from '@thenewboston/utils';

import {ErrorMessage, RequiredAsterisk} from 'components';

export const renderFormError = (name: string, classNames: string | undefined, hideErrorText = false): ReactNode => (
  <div className={clsx('FormFieldComponent__error-message', {...bemify(classNames, '__error-message')})}>
    {hideErrorText ? null : (
      <FormikErrorMessageWrapper name={name}>
        {(message) => (
          <ErrorMessage className={clsx({...bemify(classNames, '__ErrorMessage')})}>{message}</ErrorMessage>
        )}
      </FormikErrorMessageWrapper>
    )}
  </div>
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
