import React, {FC} from 'react';
import EditModal from './EditModal';

interface ComponentProps {
  accountNumber: string;
  className?: string;
  displayName: string;
  href?: string;
  isOpen: boolean;
  slackName: string;
  toggleModal(): void;
}

const AccountComponent: FC<ComponentProps> = ({accountNumber, displayName, isOpen, slackName, toggleModal}) => {
  return (
    <div>
      {isOpen && (
        <EditModal accountNumber={accountNumber} close={toggleModal} displayName={displayName} slackName={slackName} />
      )}
    </div>
  );
};

export default AccountComponent;
