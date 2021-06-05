import React, {FC} from 'react';

import {A, Avatar, CopyableAccountNumber, Qr, SlideUp} from 'components';

import './SlideUpAccountDetails.scss';

interface ComponentProps {
  account_number: string;
  close(): void;
  github_avatar_url: string;
  github_username: string;
}

const SlideUpAccountDetails: FC<ComponentProps> = ({account_number, close, github_avatar_url, github_username}) => {
  const renderRight = () => (
    <div className="SlideUpAccountDetails__right">
      <A className="SlideUpAccountDetails__user-login" href={`https://github.com/${github_username}`}>
        {github_username}
      </A>
      <CopyableAccountNumber accountNumber={account_number} className="SlideUpAccountDetails__CopyableAccountNumber" />
      <div className="SlideUpAccountDetails__qr-container">
        <Qr text={account_number} width={80} />
      </div>
    </div>
  );

  return (
    <SlideUp className="SlideUpAccountDetails__SlideUp" close={close}>
      <div className="SlideUpAccountDetails__inner-wrapper">
        <div>
          <Avatar size={54} src={github_avatar_url} />
        </div>
        {renderRight()}
      </div>
    </SlideUp>
  );
};

export default SlideUpAccountDetails;
