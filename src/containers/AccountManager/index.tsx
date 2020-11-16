import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, Pagination} from 'components';
import {accountManagerNavigationData} from 'components/DocsMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import AccountManagerAddFriends from './AccountManagerAddFriends';
import AccountManagerCreateAccount from './AccountManagerCreateAccount';
import AccountManagerCreateBank from './AccountManagerCreateBank';
import AccountManagerCreateValidator from './AccountManagerCreateValidator';
import AccountManagerEditNicknames from './AccountManagerEditNicknames';
import AccountManagerGetStarted from './AccountManagerGetStarted';
import AccountManagerSendCoins from './AccountManagerSendCoins';

const defaultPageData: PageData = {
  content: <Redirect to="/account-manager/get-started" />,
  name: '',
};

const pageData: PageDataObject = {
  'add-friends': {
    content: <AccountManagerAddFriends />,
    name: 'Add Friends',
  },
  'create-an-account': {
    content: <AccountManagerCreateAccount />,
    name: 'Create an Account',
  },
  'create-bank': {
    content: <AccountManagerCreateBank />,
    name: 'Create a Bank',
  },
  'create-validator': {
    content: <AccountManagerCreateValidator />,
    name: 'Create a Validator',
  },
  'edit-nicknames': {
    content: <AccountManagerEditNicknames />,
    name: 'Edit Nicknames',
  },
  'get-started': {
    content: <AccountManagerGetStarted />,
    name: 'Get Started',
  },
  'send-coins': {
    content: <AccountManagerSendCoins />,
    name: 'Send Coins',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const AccountManager: FC = () => {
  const {chapter} = useParams<{chapter: string}>();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout pageName={name} sectionName="Account Manager">
      {content}
      <Pagination navigationData={accountManagerNavigationData} />
    </DashboardLayout>
  );
};

export default AccountManager;
