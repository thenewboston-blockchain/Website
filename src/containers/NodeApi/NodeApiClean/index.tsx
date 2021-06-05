import React, {FC} from 'react';

import {DocContainer, DocEndpoint, DocList, RequestResponseSnippet, TableParams} from 'components';

const NodeApiClean: FC = () => {
  return (
    <DocContainer className="BankApiClean" title="Clean">
      <p>
        A network clean is the process of updating the network (mainly to remove disconected nodes). A clean can be
        triggered by any client, given that it knows the Node's signing key. When a Node starts a network clean it will:
      </p>

      <DocList variant="ol">
        <li>Fetch configuration of any nodes already connected to the node.</li>
        <li>Delete or updates nodes depending on this result.</li>
      </DocList>

      <p>Node will stop the process if it receive a stop message.</p>

      <DocEndpoint endpoint="/clean" method="GET" />
      <RequestResponseSnippet
        code={`{
  "clean_last_completed": "2020-11-21 11:15:07.923380+00:00",
  "clean_status": "cleaning",
  "ip_address": "20.188.56.203",
  "port": None,
  "protocol": "http"
}`}
        heading="Response"
      />
      <DocEndpoint endpoint="/clean" method="POST" />
      <TableParams
        items={[
          {
            dataType: 'string',
            description: 'Hex value of the signed message',
            param: 'signature',
          },
        ]}
      />
      <RequestResponseSnippet
        code={`{
  message: { 
    clean: "start" (or "stop")
   },
  node_identifier: "01181490ac0fa6f73bd980adb81f1a3e72f81eb6b4ccab4dac8b6db7544e5eb1",
  signature: "27ece75566498d54abe2cc816a904c84185f19579b8a96e93789da8beb91e6e2e89306ac4754cf09e0545810cc29c67cef7aceea4ac62b243dc4d61315b89c05"
}`}
        heading="Request (Client > Node)"
      />
      <RequestResponseSnippet
        code={`{
  'clean_last_completed': "2020-11-21 11:15:07.923380+00:00",
  'clean_status': 'cleaning',
  'ip_address': '20.188.56.203',
  'port': None,
  'protocol': 'http'
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default NodeApiClean;
