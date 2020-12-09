import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocImage, RequestResponseSnippet} from 'components';

import ConnectionNID from './ConnectionNID.png';
import NID from './NID.png';

const GuideNodeIdentifier: FC = () => {
  return (
    <DocContainer className="GuideNodeIdentifier" title="Node Identifier" lastUpdated="07 Dec 2020">
      <p>The node identifier (or NID) system is a separate key-pair used by nodes to sign requests to other nodes.</p>

      <DocImage alt="node identifier" maxWidth={1000} src={NID} />

      <p>
        When a node is first deployed, it will provide a unique NID to the network. As nodes become connected, they will
        keep record of each other's NID as a method of identification. Later on, as requests are sent between nodes, the
        receiving node is able to inspect the digital signature to verify the authenticity of both the sending node and
        the message itself. This system also provides an additional benefit in allowing requests to be sent on behalf of
        the node maintainer without requiring the request to originate from the node itself.
      </p>
      <p>
        An example of where this is useful is during the{' '}
        <NavLink to="/bank-api/connection-requests">connection request</NavLink> process. A sample connection request
        body can be seen below:
      </p>

      <RequestResponseSnippet
        code={`{
  "message": {
    "ip_address": "167.99.173.247",
    "port": "80",
    "protocol": "http"
  },
  "node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1",
  "signature": "3c88665e123e7e25a8b9d9592f3269ab4efc4bcba989a103a898e2625933261b1cccdaf2f52eca9c58d2bf033968ab6b702089bca8fc6e0c80b3b002a5e05b03"
}`}
        heading="Request"
      />

      <p>
        Given the structure of the request, clients with access to the NID signing key can initiate connection requests
        on behalf of their node by sending requests directly from a client application to the target nodes. This also
        allows node owners to easily manage multiple nodes from the same client application. Users maintaining multiple
        nodes can simply import the NID signing keys of all nodes they wish to manage.
      </p>

      <DocImage alt="connection nid" maxWidth={1000} src={ConnectionNID} />

      <p>
        Although all nodes are already configured with an account number (the public key from a separate key-pair), the
        purposes of the two key-pair systems are quite different. A server's NID should never change after deployment.
        However, users are free to change the account number where they wish to receive their Tx fees at any time.
      </p>
      <p>
        In summary, since all nodes provide a unique NID through their publicly available configurations, all nodes are
        able to include this identifier in sensitive requests to other nodes to prove that the request has been
        authorized by the owner of that node.
      </p>

      <RequestResponseSnippet
        code={`{
  "primary_validator": {
    "account_number": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314",
    "ip_address": "64.225.47.205",
    "node_identifier": "3afdf37573f1a511def0bd85553404b7091a76bcd79cdcebba1310527b167521",
    "port": 80,
    "protocol": "http",
    "version": "v1.0",
    "default_transaction_fee": "4.0000000000000000",
    "root_account_file": "https://gist.githubusercontent.com/buckyroberts/519b5cb82a0a5b5d4ae8a2175b722520/raw/9237deb449e27cab93cb89ea3346ecdfc61fe9ea/0.json",
    "root_account_file_hash": "4694e1ee1dcfd8ee5f989e59ae40a9f751812bf5ca52aca2766b322c4060672b",
    "seed_block_identifier": "",
    "daily_confirmation_rate": null,
    "trust": "100.00"
  },
  "account_number": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8",
  "ip_address": "167.99.173.247",
  "node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1",
  "port": 80,
  "protocol": "http",
  "version": "v1.0",
  "default_transaction_fee": "1.0000000000000000",
  "node_type": "BANK"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default GuideNodeIdentifier;
