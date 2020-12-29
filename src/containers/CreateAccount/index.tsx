import React, {FC, ReactNode, useState} from 'react';
import axios from 'axios';

import {AuthContainer} from 'components';
import {Form, FormButton, FormInput} from 'components/FormComponents';
import {standardHeaders} from 'utils/requests';
import yup from 'utils/yup';

const initialValues = {
  confirmPassword: '',
  email: '',
  password: '',
};

export type FormValues = typeof initialValues;

const CreateAccount: FC = () => {
  const [creatingAccount, setCreatingAccount] = useState(true);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async ({email, password}: FormValues): Promise<void> => {
    try {
      setSubmitting(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/users`,
        {email, password},
        standardHeaders(),
      );

      // eslint-disable-next-line no-console
      console.log(response.data);

      setCreatingAccount(false);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const renderAuthContainerContent = (): ReactNode => {
    return creatingAccount ? (
      <Form initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <FormInput label="Email" name="email" placeholder="" />
        <FormInput label="Password" name="password" placeholder="" type="password" />
        <FormInput label="Confirm Password" name="confirmPassword" placeholder="" type="password" />
        <FormButton submitting={submitting} type="submit">
          Create Account
        </FormButton>
      </Form>
    ) : (
      <p>Click the link that has been sent to your email to complete registration!</p>
    );
  };

  const validationSchema = yup.object().shape({
    confirmPassword: yup.string().oneOf([yup.ref('password'), ''], 'Passwords must match'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  return (
    <AuthContainer heading={creatingAccount ? 'Create an Account' : 'Verify Email'}>
      {renderAuthContainerContent()}
    </AuthContainer>
  );
};

export default CreateAccount;
