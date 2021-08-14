import React, {FC} from 'react';

import {DocContainer, DocImage, DocSubSection} from 'components';

import AddFriend from './AddFriend.png';
import FriendOverview from './FriendOverview.png';

enum WalletAddFriendsNav {
  friendOverview = 'friend-overview',
}

const WalletAddFriends: FC = () => {
  return (
    <DocContainer className="WalletAddFriends" title="Add Friends" lastUpdated="07 Dec 2020">
      <p>
        To add friends, click the plus button to the right of "Friends" on the left side menu. After entering their
        nickname and account number, click "Add" to add them to your friends list.
      </p>

      <DocImage alt="add friend" bordered maxWidth={1200} src={AddFriend} />

      <DocSubSection id={WalletAddFriendsNav.friendOverview} title="Friend Overview">
        <p>
          After adding a friend, you will be taken to their account overview page where you can view their balance, look
          through their transaction history, and send them coins. You can also edit or remove friends by using the
          options menu in the top right corner.
        </p>

        <DocImage alt="friend overview" bordered maxWidth={1200} src={FriendOverview} />
      </DocSubSection>
    </DocContainer>
  );
};

export default WalletAddFriends;
