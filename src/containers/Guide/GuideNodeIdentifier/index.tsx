import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocImage, RequestResponseSnippet} from 'components';

import NodeIdentifiers from './NodeIdentifiers.png';

const GuideNodeIdentifier: FC = () => {
  return (
    <DocContainer className="GuideNodeIdentifier" title="Node Identifier" lastUpdated="06 Mar 2021">
      <p>The node identifier (or NID) system is a separate key-pair used by nodes to sign requests to other nodes.</p>

      <DocImage alt="node identifiers" maxWidth={900} src={NodeIdentifiers} />

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
    "account_number": "c7498d45482098a4c4e2b2fa405fdb00e5bc74bf4739c43417e7c50ff08c4109",
    "ip_address": "54.241.124.162",
    "node_identifier": "354804f86a2f5fa5c2f7bfc5da6bae78ec18beea2c991c6eca00877bf0ea9f01",
    "port": 80,
    "protocol": "http",
    "version": "v1.0",
    "default_transaction_fee": 1,
    "root_account_file": "http://54.241.124.162:80/media/root_account_file.json",
    "root_account_file_hash": "ab9b95e5bb1dc66dd57ebf2cb8a8dece41748389d68077f74c916659f4bd2f1b",
    "seed_block_identifier": "",
    "daily_confirmation_rate": 1,
    "trust": "100.00"
  },
  "account_number": "9a275161478536d0a5b88ff05d429b9a9e63d0032a46e7a6a8f088da89c69da5",
  "ip_address": "13.57.215.62",
  "node_identifier": "59af0721c572e6032b835722b5fec22110daad069dc135f1e81794747dbe626f",
  "port": 80,
  "protocol": "http",
  "version": "v1.0",
  "default_transaction_fee": 1,
  "node_type": "BANK"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default GuideNodeIdentifier;
