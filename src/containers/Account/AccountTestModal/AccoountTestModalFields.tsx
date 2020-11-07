import React, {FC} from 'react';
import {FormInput, FormTextArea} from 'components/FormComponents';
import {useFormContext} from 'hooks';

export const initialValues = {
  accountNumber: '',
  displayName: '',
  slackName: '',
};

export type FormValues = typeof initialValues;
const AccountTestModalFields: FC = () => {
  const {
    values: {accountNumber, displayName, slackName},
  } = useFormContext<FormValues>();

  return (
    <>
      <FormInput label="Display Name" name="displayName" />
      <FormInput label="Slack Name" name="slackName" />
      <FormTextArea label="Account Number" name="accountNumber" />
    </>
  );
};

export default AccountTestModalFields;
