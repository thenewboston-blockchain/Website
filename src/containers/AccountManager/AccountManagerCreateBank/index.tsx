import React, {FC} from 'react';

import {DocContainer, DocImage, DocSubSection} from 'components';

import BankOverview from './BankOverview.png';
import CreateBank from './CreateBank.png';

enum AccountManagerCreateBankNav {
  bankOverview = 'bank-overview',
}

const AccountManagerCreateBank: FC = () => {
  return (
    <DocContainer className="AccountManagerCreateBank" title="Create a Bank">
      <p>
        <strong>Banks</strong> play a critical role regarding several aspects of the network. They act as the bond
        between end users and the network and have several responsibilities to each. To create a Bank, click the plus
        button to the right of "Banks" on the left side menu. After choosing a protocol and filling out a IP Address,
        Port and a Nickname for your bank, click the "Add" button to create/add the bank.
      </p>

      <DocImage alt="create bank modal" bordered maxWidth={1200} src={CreateBank} />

      <DocSubSection id={AccountManagerCreateBankNav.bankOverview} title="Bank Overview">
        <p>
          After creating a bank, you will be taken to your bank overview page. Here you can see your Tx Fee (Transaction
          Fee), how many confirmation services your bank has, the network ID and bank account number and an overview of
          the data from the bank.
        </p>

        <DocImage alt="bank overview" bordered maxWidth={1200} src={BankOverview} />
      </DocSubSection>
    </DocContainer>
  );
};

export default AccountManagerCreateBank;
