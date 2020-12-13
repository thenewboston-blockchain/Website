import React, {FC} from 'react';
import {FormInput, FormTextArea} from 'components/FormComponents';

export const initialValues = {
  accountNumber: '',
  displayName: '',
  slackName: '',
};

export type FormValues = typeof initialValues;
const EditModalFields: FC = () => {
  return (
    <>
      <FormInput label="Display Name" name="displayName" />
      <FormInput label="Slack Name" name="slackName" />
      <FormTextArea label="Account Number" name="accountNumber" />
    </>
  );
};

export default EditModalFields;
