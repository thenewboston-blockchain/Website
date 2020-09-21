import React, {FC} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import clsx from 'clsx';

import Icon, {IconType} from 'components/Icon';
import {displayToast} from 'utils/toast';

import './CopyableAccountNumber.scss';

interface ComponentProps {
  accountNumber: string;
  className?: string;
}

const CopyableAccountNumber: FC<ComponentProps> = ({accountNumber, className}) => {
  const handleCopy = (): void => {
    displayToast('Account Number copied to the clipboard', 'success');
  };

  return (
    <div className={clsx('CopyableAccountNumber', className)}>
      <div className="CopyableAccountNumber__top">
        <div className="CopyableAccountNumber__label">Account Number</div>
        <CopyToClipboard onCopy={handleCopy} text={accountNumber}>
          <div className="CopyableAccountNumber__copy-container">
            <Icon className="CopyableAccountNumber__copy-icon" icon={IconType.contentCopy} size={22} />
            <div className="CopyableAccountNumber__copy-text">Copy</div>
          </div>
        </CopyToClipboard>
      </div>
      <div className="CopyableAccountNumber__account-number">{accountNumber}</div>
    </div>
  );
};

export default CopyableAccountNumber;
