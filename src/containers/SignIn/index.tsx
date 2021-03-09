import React, {FC, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {AuthContainer} from 'components';
import {Form, FormButton, FormInput} from 'components/FormComponents';
import {login} from 'dispatchers/app';
import {AppDispatch} from 'types/store';
import {formatAPIError} from 'utils/errors';
import yup from 'utils/yup';

const initialValues = {
  email: '',
  password: '',
};

export type FormValues = typeof initialValues;

const SignIn: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async ({email, password}: FormValues): Promise<void> => {
    try {
      setSubmitting(true);
      const {data} = await dispatch(login({email, password}));
      setSubmitting(false);
      history.push(`/users/${data.user.pk}`);
    } catch (error) {
      setSubmitting(false);
      setErrorMessage(formatAPIError(error));
    }
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('This field is required'),
  });

  return (
    <AuthContainer errorMessage={errorMessage} heading="Sign In">
      <Form initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({isValid}) => (
          <>
            <FormInput autoComplete="email" label="Email" name="email" placeholder="" focused required />
            <FormInput
              autoComplete="current-password"
              label="Password"
              name="password"
              placeholder=""
              type="password"
              required
            />
            <FormButton className="SignIn__submit" submitting={submitting} type="submit" disabled={!isValid}>
              Sign In
            </FormButton>
          </>
        )}
      </Form>
    </AuthContainer>
  );
};

export default SignIn;
