import React, {FC} from 'react';

import {DocContainer, DocImage, DocSubSection} from 'components';

import AddFriend from './AddFriend.png';
import FriendOverview from './FriendOverview.png';

enum AddFriendsNav {
  friendOverview = 'account-overview',
}

const AddFriends: FC = () => {
  return (
    <DocContainer className="AddFriends" title="Add Friends">
      <p>
        To add friends, click the plus button to the right of "Friends" on the left side menu. After entering their
        nickname and account number, click "Add" to add them to your friends list. Once added, you will be taken to
        their account overview page where you can view their balance, look through their transaction history, and send
        them points.
      </p>

      <DocImage alt="add friend" maxWidth={1200} src={AddFriend} />

      <DocSubSection id={AddFriendsNav.friendOverview} title="Friend Overview">
        <p>
          After creating an account, you will be taken to your account overview page. Here you can see your balance,
          account number, and signing key. Your account number is what you will share with anyone who wishes to send you
          points.
        </p>

        <DocImage alt="friend overview" maxWidth={1200} src={FriendOverview} />
      </DocSubSection>
    </DocContainer>
  );
};

export default AddFriends;
