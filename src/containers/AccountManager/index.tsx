import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, Pagination} from 'components';
import {accountManagerNavigationData} from 'components/DocsMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import AccountManagerAddFriends from './AccountManagerAddFriends';
import AccountManagerConnectToNetwork from './AccountManagerConnectToNetwork';
import AccountManagerCreateAccount from './AccountManagerCreateAccount';
import AccountManagerEditNicknames from './AccountManagerEditNicknames';
import AccountManagerSendPoints from './AccountManagerSendPoints';

const defaultPageData: PageData = {
  content: <Redirect to="/account-manager/connect-to-the-network" />,
  name: '',
};

const pageData: PageDataObject = {
  'add-friends': {
    content: <AccountManagerAddFriends />,
    name: 'Add Friends',
  },
  'connect-to-the-network': {
    content: <AccountManagerConnectToNetwork />,
    name: 'Connect to the Network',
  },
  'create-an-account': {
    content: <AccountManagerCreateAccount />,
    name: 'Create an Account',
  },
  'edit-nicknames': {
    content: <AccountManagerEditNicknames />,
    name: 'Edit Nicknames',
  },
  'send-points': {
    content: <AccountManagerSendPoints />,
    name: 'Send Points',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const AccountManager: FC = () => {
  const {chapter} = useParams();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout pageName={name} sectionName="Account Manager">
      {content}
      <Pagination navigationData={accountManagerNavigationData} />
    </DashboardLayout>
  );
};

export default AccountManager;
