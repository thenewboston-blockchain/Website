import React, {FC} from 'react';

import {DocContainer, DocImage, DocSubSection} from 'components';

import CreateValidator from './CreateValidator.png';
import ValidatorOverview from './ValidatorOverview.png';

enum WalletCreateValidatorNav {
  validatorOverview = 'validator-overview',
}

const WalletCreateValidator: FC = () => {
  return (
    <DocContainer className="WalletCreateValidator" title="Create a Validator" lastUpdated="07 Dec 2020">
      <p>
        <strong>Validator's</strong> purpose is most importantly to validate transactions. To create a Validator, click
        the plus button to the right of "Validators" on the left side menu. After choosing a protocol and filling out a
        IP Address, Port and a Nickname for your Validator, click the "Add" button to create/add the Validator.
      </p>

      <DocImage alt="create Validator modal" bordered maxWidth={1200} src={CreateValidator} />

      <DocSubSection id={WalletCreateValidatorNav.validatorOverview} title="Validator Overview">
        <p>
          After creating a Validator, you will be taken to your Validator overview page. Here you can see your Tx Fee
          (Transaction Fee), the Daily Rate, the Validator network ID and Validator account number and an overview of
          the data from the Validator.
        </p>

        <DocImage alt="Validator overview" bordered maxWidth={1200} src={ValidatorOverview} />
      </DocSubSection>
    </DocContainer>
  );
};

export default WalletCreateValidator;
