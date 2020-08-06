import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout} from 'components';
import ApiMenuItems from 'components/ApiMenuItems';
import NodeApiConnectionRequests from 'containers/NodeApi/NodeApiConnectionRequests';
import {PageData, PageDataObject} from 'types/page-data';

import ConfirmationValidatorApiAccounts from './ConfirmationValidatorApiAccounts';
import ConfirmationValidatorApiBankConfirmationServices from './ConfirmationValidatorApiBankConfirmationServices';
import ConfirmationValidatorApiBanks from './ConfirmationValidatorApiBanks';
import ConfirmationValidatorApiConfig from './ConfirmationValidatorApiConfig';
import ConfirmationValidatorApiConfirmationBlocks from './ConfirmationValidatorApiConfirmationBlocks';
import ConfirmationValidatorApiValidators from './ConfirmationValidatorApiValidators';

const getPageData = (chapter: string): PageData => {
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

  return pageData[chapter] || defaultPageData;
};

const ConfirmationValidatorApi: FC = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageData(chapter).content, [chapter]);
  const pageName = useMemo(() => getPageData(chapter).name, [chapter]);

  return (
    <DashboardLayout menuItems={<ApiMenuItems />} pageName={pageName} sectionName="Confirmation Validator API">
      {pageContent}
    </DashboardLayout>
  );
};

export default ConfirmationValidatorApi;
