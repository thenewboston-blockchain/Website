import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout} from 'components';
import ApiMenuItems from 'components/ApiMenuItems';
import NodeApiConnectionRequests from 'containers/NodeApi/NodeApiConnectionRequests';
import {PageData, PageDataObject} from 'types/page-data';

import PrimaryValidatorApiAccounts from './PrimaryValidatorApiAccounts';
import PrimaryValidatorApiBankBlocks from './PrimaryValidatorApiBankBlocks';
import PrimaryValidatorApiBanks from './PrimaryValidatorApiBanks';
import PrimaryValidatorApiConfig from './PrimaryValidatorApiConfig';
import PrimaryValidatorApiConfirmationBlocks from './PrimaryValidatorApiConfirmationBlocks';
import PrimaryValidatorApiValidators from './PrimaryValidatorApiValidators';

const getPageData = (chapter: string): PageData => {
  const defaultPageData: PageData = {
    content: <Redirect to="primary-validator-api/accounts" />,
    name: '',
  };

  const pageData: PageDataObject = {
    accounts: {
      content: <PrimaryValidatorApiAccounts />,
      name: 'Accounts',
    },
    'bank-blocks': {
      content: <PrimaryValidatorApiBankBlocks />,
      name: 'Bank Blocks',
    },
    banks: {
      content: <PrimaryValidatorApiBanks />,
      name: 'Banks',
    },
    config: {
      content: <PrimaryValidatorApiConfig />,
      name: 'Config',
    },
    'confirmation-blocks': {
      content: <PrimaryValidatorApiConfirmationBlocks />,
      name: 'Confirmation Blocks',
    },
    'connection-requests': {
      content: <NodeApiConnectionRequests />,
      name: 'Connection Requests',
    },
    validators: {
      content: <PrimaryValidatorApiValidators />,
      name: 'Validators',
    },
  };

  return pageData[chapter] || defaultPageData;
};

const PrimaryValidatorApi: FC = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageData(chapter).content, [chapter]);
  const pageName = useMemo(() => getPageData(chapter).name, [chapter]);

  return (
    <DashboardLayout menuItems={<ApiMenuItems />} pageName={pageName} sectionName="Primary Validator API">
      {pageContent}
    </DashboardLayout>
  );
};

export default PrimaryValidatorApi;
