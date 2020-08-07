import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {ApiMenuItems, DashboardLayout} from 'components';
import NodeApiConnectionRequests from 'containers/NodeApi/NodeApiConnectionRequests';
import {PageData, PageDataObject} from 'types/page-data';

import ConfirmationValidatorApiAccounts from './ConfirmationValidatorApiAccounts';
import ConfirmationValidatorApiBankConfirmationServices from './ConfirmationValidatorApiBankConfirmationServices';
import ConfirmationValidatorApiBanks from './ConfirmationValidatorApiBanks';
import ConfirmationValidatorApiConfig from './ConfirmationValidatorApiConfig';
import ConfirmationValidatorApiConfirmationBlocks from './ConfirmationValidatorApiConfirmationBlocks';
import ConfirmationValidatorApiValidators from './ConfirmationValidatorApiValidators';

const defaultPageData: PageData = {
  content: <Redirect to="/confirmation-validator-api/accounts" />,
  name: '',
};

const pageData: PageDataObject = {
  accounts: {
    content: <ConfirmationValidatorApiAccounts />,
    name: 'Accounts',
  },
  'bank-confirmation-services': {
    content: <ConfirmationValidatorApiBankConfirmationServices />,
    name: 'Bank Confirmation Services',
  },
  banks: {
    content: <ConfirmationValidatorApiBanks />,
    name: 'Banks',
  },
  config: {
    content: <ConfirmationValidatorApiConfig />,
    name: 'Config',
  },
  'confirmation-blocks': {
    content: <ConfirmationValidatorApiConfirmationBlocks />,
    name: 'Confirmation Blocks',
  },
  'connection-requests': {
    content: <NodeApiConnectionRequests />,
    name: 'Connection Requests',
  },
  validators: {
    content: <ConfirmationValidatorApiValidators />,
    name: 'Validators',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const ConfirmationValidatorApi: FC = () => {
  const {chapter} = useParams();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout menuItems={<ApiMenuItems />} pageName={name} sectionName="Confirmation Validator API">
      {content}
    </DashboardLayout>
  );
};

export default ConfirmationValidatorApi;
