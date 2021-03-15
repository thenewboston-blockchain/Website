import React, {FC, ReactNode, useState} from 'react';
import axios from 'axios';

import {AuthContainer} from 'components';
import {Form, FormButton, FormInput} from 'components/FormComponents';
import {formatAPIError} from 'utils/errors';
import {standardHeaders} from 'utils/requests';
import yup from 'utils/yup';

const initialValues = {
  confirmPassword: '',
  display_name: '',
  email: '',
  password: '',
};

export type FormValues = typeof initialValues;

const CreateAccount: FC = () => {
  const [creatingAccount, setCreatingAccount] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async ({display_name, email, password}: FormValues): Promise<void> => {
    try {
      const trimmedDisplayName = display_name.trim(); // remove trailing spaces in display name before sending BE
      setErrorMessage('');
      setSubmitting(true);
      await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/users`,
        {display_name: trimmedDisplayName, email, password},
        standardHeaders(),
      );
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
        {({isValid}) => (
          <>
            <FormInput autoComplete="email" label="Email" name="email" placeholder="" focused required />
            <FormInput
              autoComplete="new-password"
              label="Password"
              name="password"
              placeholder=""
              type="password"
              required
            />
            <FormInput
              autoComplete="new-password"
              label="Confirm Password"
              name="confirmPassword"
              placeholder=""
              type="password"
              required
            />
            <FormInput label="Display Name" name="display_name" placeholder="" required />
            <FormButton submitting={submitting} type="submit" disabled={!isValid}>
              Create Account
            </FormButton>
          </>
        )}
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
    display_name: yup
      .string()
      .required('Display Name is required')
      .max(30, 'Display Name must be less than 30 characters'),
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
