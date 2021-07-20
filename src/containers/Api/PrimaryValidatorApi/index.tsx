import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, PageTitle, Pagination} from 'components';
import {PageData, PageDataObject} from 'types/page-data';

import PrimaryValidatorApiAccounts from './PrimaryValidatorApiAccounts';
import PrimaryValidatorApiBankBlocks from './PrimaryValidatorApiBankBlocks';
import PrimaryValidatorApiBanks from './PrimaryValidatorApiBanks';
import PrimaryValidatorApiConfig from './PrimaryValidatorApiConfig';
import PrimaryValidatorApiConfirmationBlocks from './PrimaryValidatorApiConfirmationBlocks';
import PrimaryValidatorApiValidators from './PrimaryValidatorApiValidators';
import ApiDocsMenuItems, {primaryValidatorApiNavigationData} from '../ApiDocsMenuItems';
import NodeApiConnectionRequests from '../NodeApi/NodeApiConnectionRequests';

const defaultPageData: PageData = {
  content: <Redirect to="/developer/api/primary-validator-api/accounts" />,
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

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const PrimaryValidatorApi: FC = () => {
  const {chapter} = useParams<{chapter: string}>();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout menuItems={<ApiDocsMenuItems />} pageName={name} sectionName="Primary Validator API">
      <PageTitle ogDescription={`${name} | Primary Validator API`} title={name} />
      {content}
      <Pagination navigationData={primaryValidatorApiNavigationData} />
    </DashboardLayout>
  );
};

export default PrimaryValidatorApi;
