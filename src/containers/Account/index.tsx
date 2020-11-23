import React, {FC} from 'react';
import {useBooleanState} from 'hooks';
import EditModal from './EditModal';

interface ComponentProps {
  className?: string;
  href: string;
}

const AccountComponent: FC<ComponentProps> = () => {
  const [editModalIsOpen, toggleEditModal] = useBooleanState(true);
  return <div>{editModalIsOpen && <EditModal close={toggleEditModal} />}</div>;
};

export default AccountComponent;
