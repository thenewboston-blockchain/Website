import React, {FC} from 'react';

import Modal from 'components/Modal';
import yup from 'utils/yup';

import EditModalFields, {FormValues} from './EditModalFields';

import './EditModal.scss';

interface ComponentProps {
  accountNumber: string;
  close(): void;
  displayName: string;
  isGetStartedModal?: boolean;
  slackName: string;
}

const EditModal: FC<ComponentProps> = ({
  accountNumber: initialAccountNumber,
  close,
  displayName: initialDisplayName,
  isGetStartedModal = false,
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
      className="EditModal"
      close={close}
      disableOverlayClick={isGetStartedModal}
      displayCancelButton={!isGetStartedModal}
      displayCloseButton={!isGetStartedModal}
      header={'Edit Profile'}
      ignoreDirty
      initialValues={initialValues}
      onSubmit={handleSubmit}
      submitButton={'Save'}
      validationSchema={validationSchema}
    >
      <EditModalFields />
    </Modal>
  );
};

export default EditModal;
