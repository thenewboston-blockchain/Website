import {ChangeEvent} from 'react';
import {FormikErrors, FormikTouched, useFormikContext} from 'formik';

interface Values {
  [field: string]: any;
}

interface UseFormContextOutput<V> {
  errors: FormikErrors<Values>;
  handleChange(e: ChangeEvent<any>): void;
  isValid: boolean;
  setFieldTouched(field: string, isTouched?: boolean, shouldValidate?: boolean): void;
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
  touched: FormikTouched<Values>;
  validateField(field: string): void;
  values: V;
}

function useFormContext<V = Values>(): UseFormContextOutput<V> {
  const {
    errors,
    handleChange,
    isValid,
    setFieldTouched,
    setFieldValue,
    touched,
    validateField,
    values,
  } = useFormikContext<V>();

  return {
    errors,
    handleChange,
    isValid,
    setFieldTouched,
    setFieldValue,
    touched,
    validateField,
    values,
  };
}

export default useFormContext;
