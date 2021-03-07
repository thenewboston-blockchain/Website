import React, {FC} from 'react';
import {Form as FormikForm, Formik} from 'formik';
import {GenericFormValues} from 'types/forms';

interface ComponentProps {
  className?: string;
  children: ({isValid}: {isValid: boolean}) => JSX.Element;
  initialValues?: GenericFormValues;
  onSubmit(values: GenericFormValues): void | Promise<any>;
  validateOnMount?: boolean;
  validationSchema?: any;
}

const Form: FC<ComponentProps> = ({
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
