import React from 'react';

import RequestResponse from 'components/RequestResponse';

import signedConnectionRequest from './code-snippets/signed-connection-request';

import './ConnectionRequests.scss';

const ConnectionRequests = () => {
  return (
    <section className="ConnectionRequests">
      <h1 className="page-title">Connection Requests</h1>
      <p>Hey</p>

      <h2 className="endpoint">POST /connection_requests</h2>
      <RequestResponse code={signedConnectionRequest} heading="Response" />
    </section>
  );
};

export default ConnectionRequests;
