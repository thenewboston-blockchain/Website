import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, DocsMenuItems, Pagination} from 'components';
import {bankApiNavigationData} from 'components/DocsMenuItems';
import NodeApiConnectionRequests from 'containers/NodeApi/NodeApiConnectionRequests';
import {PageData, PageDataObject} from 'types/page-data';

import BankApiAccounts from './BankApiAccounts';
import BankApiBankTransactions from './BankApiBankTransactions';
import BankApiBanks from './BankApiBanks';
import BankApiBlocks from './BankApiBlocks';
import BankApiConfig from './BankApiConfig';
import BankApiConfirmationBlocks from './BankApiConfirmationBlocks';
import BankApiInvalidBlocks from './BankApiInvalidBlocks';
import BankApiUpgradeNotice from './BankApiUpgradeNotice';
import BankApiValidatorConfirmationServices from './BankApiValidatorConfirmationServices';
import BankApiValidators from './BankApiValidators';

const defaultPageData: PageData = {
  content: <Redirect to="/bank-api/accounts" />,
  name: '',
};

const pageData: PageDataObject = {
  accounts: {
    content: <BankApiAccounts />,
    name: 'Accounts',
  },
  'bank-transactions': {
    content: <BankApiBankTransactions />,
    name: 'Bank Transactions',
  },
  banks: {
    content: <BankApiBanks />,
    name: 'Banks',
  },
  blocks: {
    content: <BankApiBlocks />,
    name: 'Blocks',
  },
  config: {
    content: <BankApiConfig />,
    name: 'Config',
  },
  'confirmation-blocks': {
    content: <BankApiConfirmationBlocks />,
    name: 'Confirmation Blocks',
  },
  'connection-requests': {
    content: <NodeApiConnectionRequests />,
    name: 'Connection Requests',
  },
  'invalid-blocks': {
    content: <BankApiInvalidBlocks />,
    name: 'Invalid Blocks',
  },
  'upgrade-notice': {
    content: <BankApiUpgradeNotice />,
    name: 'Upgrade Notice',
  },
  'validator-confirmation-services': {
    content: <BankApiValidatorConfirmationServices />,
    name: 'Validator Confirmation Services',
  },
  validators: {
    content: <BankApiValidators />,
    name: 'Validators',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const BankApi: FC = () => {
  const {chapter} = useParams<{chapter: string}>();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout menuItems={<DocsMenuItems />} pageName={name} sectionName="Bank API">
      {content}
      <Pagination navigationData={bankApiNavigationData} />
    </DashboardLayout>
  );
};

export default BankApi;
