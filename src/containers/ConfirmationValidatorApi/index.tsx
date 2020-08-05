import React, {FC, ReactNode, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout} from 'components';
import ApiLeftMenuItems from 'components/ApiLeftMenuItems';
import NodeApiConnectionRequests from 'containers/NodeApi/NodeApiConnectionRequests';
import ConfirmationValidatorApiAccounts from './ConfirmationValidatorApiAccounts';
import ConfirmationValidatorApiBankConfirmationServices from './ConfirmationValidatorApiBankConfirmationServices';
import ConfirmationValidatorApiBanks from './ConfirmationValidatorApiBanks';
import ConfirmationValidatorApiConfig from './ConfirmationValidatorApiConfig';
import ConfirmationValidatorApiConfirmationBlocks from './ConfirmationValidatorApiConfirmationBlocks';
import ConfirmationValidatorApiValidators from './ConfirmationValidatorApiValidators';

const getPageContent = (chapter: string): ReactNode => {
  switch (chapter) {
    case 'accounts':
      return <ConfirmationValidatorApiAccounts />;
    case 'bank-confirmation-services':
      return <ConfirmationValidatorApiBankConfirmationServices />;
    case 'banks':
      return <ConfirmationValidatorApiBanks />;
    case 'config':
      return <ConfirmationValidatorApiConfig />;
    case 'confirmation-blocks':
      return <ConfirmationValidatorApiConfirmationBlocks />;
    case 'connection-requests':
      return <NodeApiConnectionRequests />;
    case 'validators':
      return <ConfirmationValidatorApiValidators />;
    default:
      return <Redirect to="/confirmation-validator-api/accounts" />;
  }
};

const ConfirmationValidatorApi: FC = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return (
    <DashboardLayout menuItems={<ApiLeftMenuItems />} pageName="Sample" sectionName="Confirmation Validator API">
      {pageContent}
    </DashboardLayout>
  );
};

export default ConfirmationValidatorApi;
