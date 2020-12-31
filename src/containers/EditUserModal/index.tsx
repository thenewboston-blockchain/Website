import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Modal from 'components/Modal';
import {editUser} from 'dispatchers/users/user';
import {selectActiveUser} from 'selectors/state';
import {AppDispatch} from 'types/store';
import {displayToast} from 'utils/toast';
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
  const activeUser = useSelector(selectActiveUser);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async ({accountNumber, displayName, slackName}: FormValues): Promise<void> => {
    try {
      await dispatch(
        editUser({
          account_number: accountNumber,
          display_name: displayName,
          pk: activeUser.pk,
          slack_username: slackName,
        }),
      );
      close();
    } catch (error) {
      displayToast('There was an error with the request', 'warning');
    }
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
