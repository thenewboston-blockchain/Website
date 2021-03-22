import React, {FC} from 'react';
import {Form as FormikForm, Formik} from 'formik';
import {GenericFormValues} from 'types/forms';

interface ComponentProps {
  className?: string;
  initialValues?: GenericFormValues;
  onSubmit(values: GenericFormValues): void | Promise<any>;
  validationSchema?: any;
}

const Form: FC<ComponentProps> = ({children, className, onSubmit, initialValues = {}, validationSchema}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => (
        <FormikForm className={className} spellCheck="false">
          {children}
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
