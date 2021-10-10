import React from 'react';
import {Form as FormikForm, Formik} from 'formik';
import {GenericFormValues} from 'types/forms';
import {SFC} from 'types/generic';

interface ComponentProps {
  children: ({isValid}: {isValid: boolean}) => JSX.Element;
  initialValues?: GenericFormValues;
  onSubmit(values: GenericFormValues): void | Promise<any>;
  validateOnMount?: boolean;
  validationSchema?: any;
}

const Form: SFC<ComponentProps> = ({
  children,
  className,
  onSubmit,
  initialValues = {},
  validateOnMount = true,
  validationSchema,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount={validateOnMount}
    >
      {({isValid}) => {
        return (
          <FormikForm className={className} spellCheck="false">
            {children({isValid})}
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default Form;
