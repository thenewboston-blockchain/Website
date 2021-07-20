import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, PageTitle, Pagination} from 'components';
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

import ApiDocsMenuItems, {bankApiNavigationData} from '../ApiDocsMenuItems';
import NodeApiConnectionRequests from '../NodeApi/NodeApiConnectionRequests';
import NodeApiCrawl from '../NodeApi/NodeApiCrawl';
import NodeApiClean from '../NodeApi/NodeApiClean';

const defaultPageData: PageData = {
  content: <Redirect to="/developer/api/bank-api/accounts" />,
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
  clean: {
    content: <NodeApiClean />,
    name: 'Clean',
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
  crawl: {
    content: <NodeApiCrawl />,
    name: 'Crawl',
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
    <DashboardLayout menuItems={<ApiDocsMenuItems />} pageName={name} sectionName="Bank API">
      <PageTitle ogDescription={`${name} | Bank API`} title={name} />
      {content}
      <Pagination navigationData={bankApiNavigationData} />
    </DashboardLayout>
  );
};

export default BankApi;
