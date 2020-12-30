import React, {FC} from 'react';

import Modal from 'components/Modal';
import yup from 'utils/yup';

import EditUserModalFields, {FormValues} from './EditUserModalFields';

import './EditUserModal.scss';

interface ComponentProps {
  accountNumber: string;
  close(): void;
  displayName: string;
  slackName: string;
}

const EditUserModal: FC<ComponentProps> = ({
  accountNumber: initialAccountNumber,
  close,
  displayName: initialDisplayName,
  slackName: initialSlackName,
}) => {
  const handleSubmit = ({accountNumber, displayName, slackName}: FormValues): void => {
    // eslint-disable-next-line no-console
    console.log({accountNumber, displayName, slackName});
    close();
  };

  const validationSchema = yup.object().shape({
    accountNumber: yup
      .string()
      .length(64, 'Account Number must be 64 characters long')
      .required('This field is required'),
    displayName: yup.string().required('This field is required'),
    slackName: yup.string(),
  });

  const initialValues = {
    accountNumber: initialAccountNumber,
    displayName: initialDisplayName,
    slackName: initialSlackName,
  };

  return (
    <Modal
      className="EditUserModal"
      close={close}
      header="Edit Profile"
      ignoreDirty
      initialValues={initialValues}
      onSubmit={handleSubmit}
      submitButton="Save"
      validationSchema={validationSchema}
    >
      <EditUserModalFields />
    </Modal>
  );
};

export default EditUserModal;
