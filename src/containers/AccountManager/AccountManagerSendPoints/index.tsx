import React, {FC} from 'react';

import {DocContainer, DocImage} from 'components';

import SendPointsModal from './SendPointsModal.png';

const AccountManagerSendPoints: FC = () => {
  return (
    <DocContainer className="AccountManagerSendPoints" title="Send Points">
      <p>
        To send points, first click on the "Send Points" button at the top of any account page (yours or your friends).
        A form will appear asking from which one of your accounts you would like to send points from as well as for the
        account to send those points to. After entering the amount of points you wish to send you will see the total
        transaction cost at the bottom of the form.
      </p>
      <p>After reviewing the payment details, click the "Send" button to send the transaction.</p>

      <DocImage alt="send points modal" bordered maxWidth={1200} src={SendPointsModal} />
    </DocContainer>
  );
};

export default AccountManagerSendPoints;
