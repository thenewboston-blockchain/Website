import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {
  A,
  CalloutType,
  DocCallout,
  DocContainer,
  DocImage,
  DocSubHeader,
  TableBorderGrid,
  TableVertical,
} from 'components';
import BlockDetails from './BlockDetails.png';
import './GuideTransfers.scss';

const GuideTransfers: FC = () => {
  return (
    <DocContainer className="GuideTransfers" title="Transfers" lastUpdated="22 Apr 2021">
      <p>
        A transfer is a group of one or more transactions. Within a single block, there are often multiple transactions
        (usually fees) with different recipients. The following simplified example outlines the structure of a transfer.
      </p>
      <DocSubHeader>Example</DocSubHeader>
      <p>Amy sends 100 coins to her friend Brian.</p>

      <TableBorderGrid
        rows={[
          [<strong>Description</strong>, <strong>Coins</strong>],
          ['Coins being sent to Brian', '100'],
          ['Node fee', <span className="GuideTransfers__text-light">2</span>],
          ['PV fee', <span className="GuideTransfers__text-light">1</span>],
          ['Total', '103'],
        ]}
      />

      <p>
        After Amy creates the request shown above, the network must validate several aspects of the request and all
        related transactions, including the following:
      </p>
      <TableVertical
        altColors
        rows={[
          [<strong>Validation</strong>, <strong>Description</strong>],
          [
            'Amy has signed the request.',
            'The term "sign" is preferred over "create" because Amy might sign (authorize) request that she did not originate. For example, a shopping website builds the request while Amy adds items to her cart.',
          ],
          ['Amy has enough coins in her account.', 'The users cannot spend more coins than what they have.'],
          [
            'The request is not being validated more than once.',
            'This is critical for preventing nodes from collecting additional transaction fees by validating the same request multiple times.',
          ],
        ]}
      />
      <p>
        See the <NavLink to="/guide/fees">Fees</NavLink> section for details about fees that relate to transfers.
      </p>
      <DocSubHeader>Dissecting a Transfer Request</DocSubHeader>
      <p>
        The signing process produces digital signatures using the{' '}
        <A href="https://ed25519.cr.yp.to/">Ed25519 Digital Signature Algorithm</A>. This ensures that the account owner
        has indeed signed the set of transactions within a transfer request.
      </p>
      <DocCallout type={CalloutType.note}>
        Although the account owner is often referred to by name throughout the documentation, the actual network does
        not store the name of individuals. Instead, each account relates to the owner by their account number.
      </DocCallout>
      <p>
        In cryptography, the account number is often referred to as the <strong>public-key</strong>. An account number
        is not only important for identifying a user's account when others wish to send coins to this user. It is also
        used during the verification process in which blocks must be correctly verified to ensure that the sender
        (account owner) has authorized the related transactions. So, a more realistic and detailed representation of a
        block is the following:
      </p>

      <DocImage alt="block details" maxWidth={530} src={BlockDetails} />
    </DocContainer>
  );
};

export default GuideTransfers;
