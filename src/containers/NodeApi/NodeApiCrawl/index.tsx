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
    data={
        "crawl": "start" (or "stop")
    },
    signature="b4d335fa7662216acbcccccccccccccc688c8057cbe9193ddc8e6fb3702ba1d979e43b09e06c6c7c38358bbee5243dc37a52c5212298c2259be48285e3da130c"
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
