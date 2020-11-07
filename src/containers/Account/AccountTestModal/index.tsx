import React, {FC} from 'react';

import Modal from 'components/Modal';
import CreateAccountModalFields, {FormValues, initialValues} from './AccoountTestModalFields';

interface ComponentProps {
  close(): void;
  isGetStartedModal?: boolean;
}

const TestModal: FC<ComponentProps> = ({close, isGetStartedModal = false}) => {
  const handleSubmit = ({accountNumber, displayName, slackName}: FormValues): void => {
    console.log(accountNumber, displayName, slackName);
    close();
  };

  return (
    <Modal
      className="AccountTestModal"
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
      <CreateAccountModalFields />
    </Modal>
  );
};

export default TestModal;
