import React from 'react';

import RequestResponse from 'components/RequestResponse';

import ConnectionRequestDiagram from './ConnectionRequest.png';

import signedConnectionRequest from './code-snippets/signed-connection-request';

import './ConnectionRequests.scss';

const ConnectionRequests = () => {
  return (
    <section className="ConnectionRequests">
      <h1 className="page-title">Connection Requests</h1>
      <p>To connect with another node on the network, a signed connection request can be sent to the target node.</p>

      <div className="img-container">
        <img alt="connection request" className="connection-request" src={ConnectionRequestDiagram} />
      </div>

      <h2 className="endpoint">POST /connection_requests</h2>
      <RequestResponse code={signedConnectionRequest} heading="Request" />

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

      <RequestResponse code={`{}`} heading="Response" />
    </section>
  );
};

export default ConnectionRequests;
