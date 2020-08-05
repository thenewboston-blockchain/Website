import React, {FC, ReactNode, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout} from 'components';
import ApiLeftMenuItems from 'components/ApiLeftMenuItems';
import NodeApiConnectionRequests from 'containers/NodeApi/NodeApiConnectionRequests';
import BankApiAccounts from './BankApiAccounts';
import BankApiBankTransactions from './BankApiBankTransactions';
import BankApiBanks from './BankApiBanks';
import BankApiBlocks from './BankApiBlocks';
import BankApiConfig from './BankApiConfig';
import BankApiConfirmationBlocks from './BankApiConfirmationBlocks';
import BankApiValidatorConfirmationServices from './BankApiValidatorConfirmationServices';
import BankApiValidators from './BankApiValidators';

const getPageContent = (chapter: string): ReactNode => {
  switch (chapter) {
    case 'accounts':
      return <BankApiAccounts />;
    case 'bank-transactions':
      return <BankApiBankTransactions />;
    case 'banks':
      return <BankApiBanks />;
    case 'blocks':
      return <BankApiBlocks />;
    case 'config':
      return <BankApiConfig />;
    case 'confirmation-blocks':
      return <BankApiConfirmationBlocks />;
    case 'connection-requests':
      return <NodeApiConnectionRequests />;
    case 'validator-confirmation-services':
      return <BankApiValidatorConfirmationServices />;
    case 'validators':
      return <BankApiValidators />;
    default:
      return <Redirect to="/bank-api/accounts" />;
  }
};

const BankApi: FC = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <DashboardLayout leftMenuItems={<ApiLeftMenuItems />}>{pageContent}</DashboardLayout>;
};

export default BankApi;
