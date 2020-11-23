import React, {FC} from 'react';

import Modal from 'components/Modal';
import yup from 'utils/yup';

import EditModalFields, {FormValues, initialValues} from './EditModalFields';

import './EditModal.scss';

interface ComponentProps {
  close(): void;
  isGetStartedModal?: boolean;
}

const EditModal: FC<ComponentProps> = ({close, isGetStartedModal = false}) => {
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
