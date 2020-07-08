import React from 'react';

import RequestResponse from 'components/RequestResponse';

import './Config.scss';

const Config = () => {
  return (
    <section className="Config">
      <h1 className="page-title">Config</h1>
      <p>Hey</p>

      <h2 className="endpoint">GET /sample</h2>
      <RequestResponse code={`{}`} heading="Response" />
    </section>
  );
};

export default Config;
