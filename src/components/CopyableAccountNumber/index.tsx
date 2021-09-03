import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {Icon, IconType} from '@thenewboston/ui';

import {SFC} from 'types/generic';
import {displayToast} from 'utils/toast';

import * as S from './Styles';

interface ComponentProps {
  accountNumber: string;
  isCopyButtonAtBottom?: boolean;
}

const CopyableAccountNumber: SFC<ComponentProps> = ({accountNumber, className, isCopyButtonAtBottom}) => {
  const handleCopy = (): void => {
    displayToast('Account Number copied to the clipboard', 'success');
  };

  return (
    <S.Container className={className} data-testid="CopyableAccountNumber">
      <S.TopContainer>
        <S.Label>Account Number</S.Label>
        {!isCopyButtonAtBottom && (
          <CopyToClipboard onCopy={handleCopy} text={accountNumber} data-testid="CopyButton">
            <S.CopyContainer>
              <Icon icon={IconType.contentCopy} size={22} />
              Copy
            </S.CopyContainer>
          </CopyToClipboard>
        )}
      </S.TopContainer>
      <S.AccountNumber>{accountNumber}</S.AccountNumber>
      {isCopyButtonAtBottom && (
        <CopyToClipboard onCopy={handleCopy} text={accountNumber} data-testid="CopyButton">
          <S.CopyContainer>
            <Icon icon={IconType.contentCopy} size={22} />
            Copy
          </S.CopyContainer>
        </CopyToClipboard>
      )}
    </S.Container>
  );
};

export default CopyableAccountNumber;
