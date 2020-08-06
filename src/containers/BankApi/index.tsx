import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout} from 'components';
import ApiMenuItems from 'components/ApiMenuItems';
import NodeApiConnectionRequests from 'containers/NodeApi/NodeApiConnectionRequests';
import {PageData, PageDataObject} from 'types/page-data';

import BankApiAccounts from './BankApiAccounts';
import BankApiBankTransactions from './BankApiBankTransactions';
import BankApiBanks from './BankApiBanks';
import BankApiBlocks from './BankApiBlocks';
import BankApiConfig from './BankApiConfig';
import BankApiConfirmationBlocks from './BankApiConfirmationBlocks';
import BankApiValidatorConfirmationServices from './BankApiValidatorConfirmationServices';
import BankApiValidators from './BankApiValidators';

const getPageData = (chapter: string): PageData => {
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
    'validator-confirmation-services': {
      content: <BankApiValidatorConfirmationServices />,
      name: 'Validator Confirmation Services',
    },
    validators: {
      content: <BankApiValidators />,
      name: 'Validators',
    },
  };

  return pageData[chapter] || defaultPageData;
};

const BankApi: FC = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageData(chapter).content, [chapter]);
  const pageName = useMemo(() => getPageData(chapter).name, [chapter]);

  return (
    <DashboardLayout menuItems={<ApiMenuItems />} pageName={pageName} sectionName="Bank API">
      {pageContent}
    </DashboardLayout>
  );
};

export default BankApi;
