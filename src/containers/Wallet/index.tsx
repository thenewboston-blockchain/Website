import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, DocsMenuItems, PageTitle, Pagination} from 'components';
import {walletNavigationData} from 'components/DocsMenuItems';
import {ROUTES} from 'constants/routes';
import {PageData, PageDataObject} from 'types/page-data';

import WalletAddFriends from './WalletAddFriends';
import WalletCreateAccount from './WalletCreateAccount';
import WalletCreateBank from './WalletCreateBank';
import WalletCreateValidator from './WalletCreateValidator';
import WalletEditNicknames from './WalletEditNicknames';
import WalletGetStarted from './WalletGetStarted';
import WalletRecoverAccount from './WalletRecoverAccount';
import WalletSendCoins from './WalletSendCoins';

const defaultPageData: PageData = {
  content: <Redirect to={`${ROUTES.wallet}/get-started`} />,
  name: '',
};

const pageData: PageDataObject = {
  'add-friends': {
    content: <WalletAddFriends />,
    name: 'Add Friends',
  },
  'create-an-account': {
    content: <WalletCreateAccount />,
    name: 'Create an Account',
  },
  'create-bank': {
    content: <WalletCreateBank />,
    name: 'Create a Bank',
  },
  'create-validator': {
    content: <WalletCreateValidator />,
    name: 'Create a Validator',
  },
  'edit-nicknames': {
    content: <WalletEditNicknames />,
    name: 'Edit Nicknames',
  },
  'get-started': {
    content: <WalletGetStarted />,
    name: 'Get Started',
  },
  'recover-an-account': {
    content: <WalletRecoverAccount />,
    name: 'Recover An Account',
  },
  'send-coins': {
    content: <WalletSendCoins />,
    name: 'Send Coins',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const Wallet: FC = () => {
  const {chapter} = useParams<{chapter: string}>();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout menuItems={<DocsMenuItems />} pageName={name} sectionName="Wallet">
      <PageTitle ogDescription={`${name} | Wallet`} title={name} />
      {content}
      <Pagination navigationData={walletNavigationData} />
    </DashboardLayout>
  );
};

export default Wallet;
