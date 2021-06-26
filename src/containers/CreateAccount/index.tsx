import React, {FC, ReactNode, useState} from 'react';

import * as api from 'apis/users';
import {AuthContainer, Container} from 'components';
import {Form, FormButton, FormInput} from 'components/FormComponents';
import {formatAPIError} from 'utils/errors';
import yup from 'utils/yup';

import './CreateAccount.scss';

const initialValues = {
  confirmPassword: '',
  display_name: '',
  email: '',
  password: '',
};

export type FormValues = typeof initialValues;

interface ComponentProps {
  disabled?: boolean;
}

const CreateAccount: FC<ComponentProps> = ({disabled = false}) => {
  const [creatingAccount, setCreatingAccount] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async ({display_name, email, password}: FormValues): Promise<void> => {
    try {
      const trimmedDisplayName = display_name.trim(); // remove trailing spaces in display name before sending BE
      setErrorMessage('');
      setSubmitting(true);
      await api.createUser({display_name: trimmedDisplayName, email, password});
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

  const renderDisabledMessage = (): ReactNode => {
    return (
      <div className="CreateAccount__disabled">
        <h1>Create Account</h1>
        <h3>
          Account Creation is currently <span>disabled until beta</span>. Please check back later!
        </h3>
      </div>
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
    <Container className="CreateAccount">
      {disabled ? (
        renderDisabledMessage()
      ) : (
        <AuthContainer errorMessage={errorMessage} heading={creatingAccount ? 'Create an Account' : 'Verify Email'}>
          {renderAuthContainerContent()}
        </AuthContainer>
      )}
    </Container>
  );
};

export default CreateAccount;
