import React, {FC} from 'react';
import {Form as FormikForm, Formik} from 'formik';
import {GenericFormValues} from 'types/forms';

interface ComponentProps {
  className?: string;
  children: ({isSubmitting, isValid}: {isSubmitting: boolean; isValid: boolean}) => JSX.Element;
  isInitialValid?: boolean;
  initialValues?: GenericFormValues;
  onSubmit(values: GenericFormValues): void | Promise<any>;
  validationSchema?: any;
}

const Form: FC<ComponentProps> = ({
  children,
  className,
  onSubmit,
  isInitialValid = false,
  initialValues = {},
  validationSchema,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      isInitialValid={isInitialValid}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({isSubmitting, isValid}) => {
        return (
          <FormikForm className={className} spellCheck="false">
            {children({isSubmitting, isValid})}
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default Form;
