import React from 'react';

import './BestPractices.scss';

const BestPractices = () => {
  return (
    <section className="BestPractices">
      <h1 className="page-title">Best Practices</h1>
      <p>In this section we will review some best practices regarding the network as a whole.</p>
      <ol>
        <li>
          Always use IP addresses rather than domain names when identifying nodes (both banks and validators). This will
          prevent issues related to domain name expirations and DNS server reliability.
        </li>
        <li>
          Never share your secret key with anyone. If possible, your secret key should never touch the internet. This
          means that it should not be stored on any website, sent to anyone through email, or shared on social media.
          There will be some applications that require the ability to sign and send transactions which will require
          access to a private key, but for the majority of end users it is advised to keep your secret keys as secret as
          possible.
        </li>
      </ol>
    </section>
  );
};

export default BestPractices;
