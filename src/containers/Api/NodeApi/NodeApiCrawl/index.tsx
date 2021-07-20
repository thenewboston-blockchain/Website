import React, {FC} from 'react';

import {DocContainer, DocEndpoint, DocList, RequestResponseSnippet, TableParams} from 'components';

const NodeApiCrawl: FC = () => {
  return (
    <DocContainer className="BankApiCrawl" title="Crawl">
      <p>
        A network crawl is the process of browsing nodes in order to discover new one. A crawl can be triggered by any
        client, given that it knows the Node's signing key. When a Node starts a network crawl it will:
      </p>

      <DocList variant="ol">
        <li>Fetch all banks and confirmation validators from primary validator.</li>
        <li>Connect to any new node encountered.</li>
        <li>Send a crawl status notifications with results.</li>
      </DocList>

      <p>Node will stop the process if it receive a stop message.</p>

      <DocEndpoint endpoint="/crawl" method="GET" />
      <RequestResponseSnippet
        code={`{
  "crawl_last_completed": "2020-11-21 11:15:07.923380+00:00",
  "crawl_status": "crawling",
  "ip_address": "20.188.56.203",
  "port": None,
  "protocol": "http"
}`}
        heading="Response"
      />

      <DocEndpoint endpoint="/crawl" method="POST" />
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
    crawl: "start" (or "stop")
   },
  node_identifier: "01181490ac0fa6f73bd980adb81f1a3e72f81eb6b4ccab4dac8b6db7544e5eb1",
  signature: "27ece75566498d54abe2cc816a904c84185f19579b8a96e93789da8beb91e6e2e89306ac4754cf09e0545810cc29c67cef7aceea4ac62b243dc4d61315b89c05"
}`}
        heading="Request (Client > Node)"
      />

      <RequestResponseSnippet
        code={`{
  "crawl_last_completed": "2020-11-21 11:15:07.923380+00:00",
  "crawl_status": "crawling",
  "ip_address": "20.188.56.203",
  "port": None,
  "protocol": "http"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default NodeApiCrawl;
