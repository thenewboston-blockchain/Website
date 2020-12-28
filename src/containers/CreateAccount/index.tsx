import React, {FC} from 'react';

import {AuthContainer} from 'components';
import {Form, FormButton, FormInput} from 'components/FormComponents';
import yup from 'utils/yup';

const initialValues = {
  confirmPassword: '',
  email: '',
  password: '',
};

export type FormValues = typeof initialValues;

const CreateAccount: FC = () => {
  const handleSubmit = ({confirmPassword, email, password}: FormValues): void => {
    // eslint-disable-next-line no-console
    console.log({confirmPassword, email, password});
  };

  const validationSchema = yup.object().shape({
    confirmPassword: yup.string().required('This field is required'),
    email: yup.string().required('This field is required'),
    password: yup.string().required('This field is required'),
  });

  return (
    <AuthContainer heading="Create an Account">
      <Form initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <FormInput label="Email" name="email" placeholder="" />
        <FormInput label="Password" name="password" placeholder="" type="password" />
        <FormInput label="Confirm Password" name="confirmPassword" placeholder="" type="password" />
        <FormButton submitting={false} type="submit">
          Create Account
        </FormButton>
      </Form>
    </AuthContainer>
  );
};

export default CreateAccount;