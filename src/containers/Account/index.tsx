import React, {FC} from 'react';
import {useBooleanState} from 'hooks';
import TestModal from './AccountTestModal';

import './AccountTestModal.scss';

interface ComponentProps {
  className?: string;
  href: string;
}

const AccountComponent: FC<ComponentProps> = () => {
  const [getStartedModalIsOpen, toggleGetStartedModal] = useBooleanState(true);
  return <div>{getStartedModalIsOpen && <TestModal close={toggleGetStartedModal} />}</div>;
};

export default AccountComponent;
