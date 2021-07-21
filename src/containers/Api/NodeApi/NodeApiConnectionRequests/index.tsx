import React, {FC} from 'react';

import {DocContainer, DocEndpoint, DocImage, RequestResponseSnippet, TableParams} from 'components';

import ConnectionRequestDiagram from './ConnectionRequest.png';

const NodeApiConnectionRequests: FC = () => {
  return (
    <DocContainer className="NodeApiConnectionRequests" title="Connection Requests" lastUpdated="07 Dec 2020">
      <p>To connect with another node on the network, a signed connection request can be sent to the target node.</p>

      <DocImage alt="connection request" maxWidth={640} src={ConnectionRequestDiagram} />

      <DocEndpoint endpoint="/connection_requests" method="POST" />
      <TableParams
        items={[
          {
            dataType: 'string',
            description: 'IP address of the requesting node',
            param: 'ip_address',
            sampleValue: '172.19.0.13',
          },
          {
            dataType: 'decimal',
            description: 'port of the requesting node',
            param: 'port',
            sampleValue: '80',
          },
          {
            dataType: 'string',
            description: 'protocol of the requesting node',
            param: 'protocol',
            sampleValue: 'http',
          },
        ]}
      />
      <RequestResponseSnippet
        code={`{
  "message": {
    "ip_address": "172.19.0.13",
    "port": 8000,
    "protocol": "http"
  },
  "node_identifier": "c292c7c13c46e0abcb6c84b1f35a24efb5dd4605445a2864754e02f174b2a192",
  "signature": "28c508668e638664bb9d16f96d7dca7647c4311f256d98aeac962618df279475aedee4da7b1580e6156ba7b79a93f685fb325bf29e69b4eeaf4063078b98af06"
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
