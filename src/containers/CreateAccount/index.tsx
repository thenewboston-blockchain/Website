import React, {FC, ReactNode, useState} from 'react';
import axios from 'axios';

import {AuthContainer} from 'components';
import {Form, FormButton, FormInput} from 'components/FormComponents';
import {formatAPIError} from 'utils/errors';
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
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async ({email, password}: FormValues): Promise<void> => {
    try {
      setErrorMessage('');
      setSubmitting(true);
      await axios.post(`${process.env.REACT_APP_BACKEND_API}/users`, {email, password}, standardHeaders());
      setCreatingAccount(false);
    } catch (error) {
      setErrorMessage(formatAPIError(error));
    } finally {
      setSubmitting(false);
    }
  };

  const renderAuthContainerContent = (): ReactNode => {
    return creatingAccount ? (
      <Form initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <FormInput autoComplete="email" label="Email" name="email" placeholder="" />
        <FormInput autoComplete="new-password" label="Password" name="password" placeholder="" type="password" />
        <FormInput
          autoComplete="new-password"
          label="Confirm Password"
          name="confirmPassword"
          placeholder=""
          type="password"
        />
        <FormButton submitting={submitting} type="submit">
          Create Account
        </FormButton>
      </Form>
    ) : (
      <p>
        Our email verification system is still in development. When this feature is implemented you will receive an
        email confirming your registration.
      </p>
    );
  };

  const validationSchema = yup.object().shape({
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), ''], 'Passwords must match')
      .required(),
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  return (
    <AuthContainer errorMessage={errorMessage} heading={creatingAccount ? 'Create an Account' : 'Verify Email'}>
      {renderAuthContainerContent()}
    </AuthContainer>
  );
};

export default CreateAccount;
