import React, {FC} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';

import {displayToast} from 'utils/toast';

import './CopyableAccountNumber.scss';

interface ComponentProps {
  accountNumber: string;
  className?: string;
  isCopyButtonAtBottom?: boolean;
}

const CopyableAccountNumber: FC<ComponentProps> = ({accountNumber, className, isCopyButtonAtBottom}) => {
  const handleCopy = (): void => {
    displayToast('Account Number copied to the clipboard', 'success');
  };

  return (
    <div className={clsx('CopyableAccountNumber', className)} data-testid="CopyableAccountNumber">
      <div className="CopyableAccountNumber__top">
        <div className="CopyableAccountNumber__label">Account Number</div>
        {!isCopyButtonAtBottom && (
          <CopyToClipboard onCopy={handleCopy} text={accountNumber} data-testid="CopyButton">
            <div className="CopyableAccountNumber__copy-container">
              <Icon className="CopyableAccountNumber__copy-icon" icon={IconType.contentCopy} size={22} />
              <div className="CopyableAccountNumber__copy-text">Copy</div>
            </div>
          </CopyToClipboard>
        )}
      </div>
      <div className="CopyableAccountNumber__account-number">{accountNumber}</div>
      {isCopyButtonAtBottom && (
        <CopyToClipboard onCopy={handleCopy} text={accountNumber} data-testid="CopyButton">
          <div className="CopyableAccountNumber__copy-container">
            <Icon className="CopyableAccountNumber__copy-icon" icon={IconType.contentCopy} size={22} />
            <div className="CopyableAccountNumber__copy-text">Copy</div>
          </div>
        </CopyToClipboard>
      )}
    </div>
  );
};

export default CopyableAccountNumber;
