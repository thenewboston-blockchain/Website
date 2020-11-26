import {FormikErrors, FormikTouched, useFormikContext} from 'formik';

interface Values {
  [field: string]: any;
}

interface UseFormContextOutput<V> {
  errors: FormikErrors<Values>;
  isValid: boolean;
  setFieldTouched(field: string, isTouched?: boolean, shouldValidate?: boolean): void;
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
  touched: FormikTouched<Values>;
  values: V;
}

function useFormContext<V = Values>(): UseFormContextOutput<V> {
  const {errors, isValid, setFieldTouched, setFieldValue, touched, values} = useFormikContext<V>();

  return {
    errors,
    isValid,
    setFieldTouched,
    setFieldValue,
    touched,
    values,
  };
}

export default useFormContext;
