import React, {FC} from 'react';

import Modal from 'components/Modal';
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
    >
      <EditModalFields />
    </Modal>
  );
};

export default EditModal;
