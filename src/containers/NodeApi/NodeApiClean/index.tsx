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
    data={
        "clean": "start" (or "stop")
    },
    signature="b4d335fa7662216acbcccccccccccccc688c8057cbe9193ddc8e6fb3702ba1d979e43b09e06c6c7c38358bbee5243dc37a52c5212298c2259be48285e3da130c"
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
