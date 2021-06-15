import React, {FC} from 'react';

import {DocContainer, DocImage} from 'components';

import SendCoinsModal from './SendCoinsModal.png';

const WalletSendCoins: FC = () => {
  return (
    <DocContainer className="WalletSendCoins" title="Send Coins" lastUpdated="07 Dec 2020">
      <p>
        To send coins, first click on the "Send Coins" button at the top of any account page (yours or your friends). A
        form will appear asking from which one of your accounts you would like to send coins from as well as for the
        account to send those coins to. After entering the amount of coins you wish to send you will see the total
        transaction cost at the bottom of the form.
      </p>
      <p>After reviewing the payment details, click the "Send" button to send the transaction.</p>

      <DocImage alt="send coins modal" bordered maxWidth={1200} src={SendCoinsModal} />
    </DocContainer>
  );
};

export default WalletSendCoins;
