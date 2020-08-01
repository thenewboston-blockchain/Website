import React, {FC} from 'react';

import {DocContainer, DocEndpoint, DocImage, RequestResponseSnippet} from 'components';

import ConnectionRequestDiagram from './ConnectionRequest.png';

const NodeApiConnectionRequests: FC = () => {
  return (
    <DocContainer className="NodeApiConnectionRequests" title="Connection Requests">
      <p>To connect with another node on the network, a signed connection request can be sent to the target node.</p>

      <DocImage alt="connection request" maxWidth={640} src={ConnectionRequestDiagram} />

      <DocEndpoint endpoint="/connection_requests" method="POST" />
      <RequestResponseSnippet
        code={`{
  "message": {
    "ip_address": "192.168.1.232",
    "port": "8000",
    "protocol": "http"
  },
  "node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1",
  "signature": "3c88665e123e7e25a8b9d9592f3269ab4efc4bcba989a103a898e2625933261b1cccdaf2f52eca9c58d2bf033968ab6b702089bca8fc6e0c80b3b002a5e05b03"
}`}
        heading="Request"
      />

      <p>
        When the target node receives the request, they will attempt to query the config data of the requesting node. If
        data is retrieved successfully and the response body matches the data provided in the initial request, then the
        target node will create a Bank or Validator, depending on the requesting nodes node_type. Note that on
        successful connection, no meaningful response data is sent back, only an empty object to conform to network
        protocol. This is because the requesting node does not care how they are stored on the target node, only that
        the connection exists.
      </p>
      <p>
        Connect requests can be sent directly from a client as long as they are properly signed with the NID signing
        key. They do not have to be sent from the node itself.
      </p>

      <RequestResponseSnippet code={`{}`} heading="Response" />
    </DocContainer>
  );
};

export default NodeApiConnectionRequests;
