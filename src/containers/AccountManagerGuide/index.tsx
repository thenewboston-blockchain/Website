import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, GuideMenuItems, Pagination} from 'components';
import {accountManagerNavigationData} from 'components/GuideMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import AddFriends from './AddFriends';
import ConnectToNetwork from './ConnectToNetwork';
import CreateAccount from './CreateAccount';
import SendPoints from './SendPoints';

const defaultPageData: PageData = {
  content: <Redirect to="/account-manager/connect-to-the-network" />,
  name: '',
};

const pageData: PageDataObject = {
  'add-friends': {
    content: <AddFriends />,
    name: 'Add Friends',
  },
  'connect-to-the-network': {
    content: <ConnectToNetwork />,
    name: 'Connect to the Network',
  },
  'create-an-account': {
    content: <CreateAccount />,
    name: 'Create an Account',
  },
  'send-points': {
    content: <SendPoints />,
    name: 'Send Points',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const AccountManagerGuide: FC = () => {
  const {chapter} = useParams();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout menuItems={<GuideMenuItems />} pageName={name} sectionName="Account Manager">
      {content}
      <Pagination navigationData={accountManagerNavigationData} />
    </DashboardLayout>
  );
};

export default AccountManagerGuide;
