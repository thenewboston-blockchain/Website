import React, {FC} from 'react';

import {DocContainer} from 'components';

import './GuideFutureDevelopment.scss';

const GuideFutureDevelopment: FC = () => {
  return (
    <DocContainer className="GuideFutureDevelopment" title="Future Development" lastUpdated="07 Dec 2020">
      <p>
        In addition to the architecture outlined earlier, there are also several additional features being considered
        for inclusion into the network. These features require additional discussion with the development community.
      </p>

      <h3>Interest Rates</h3>
      <p>
        As the network grows, additional coins must be created to match the natural growth of the economy in order to
        remain an effective means for exchange of value for goods and services. A fixed interest rate structure is
        preferred in the form of network protocol to prevent the system from "printing more money." If too high, the
        amount of new currency will outpace production and lead to increased inflation. If too low, users will not be
        able to obtain coins to use as a means of exchange as the network grows. Additional discussion and consensus
        among the development community are required before integration into the network.
      </p>

      <h3>Payment Library</h3>
      <p>
        A payment library is necessary to allow for the widespread adoption of the network. This will allow individuals
        and businesses to make and receive coins over the network through simple integration. These libraries should be
        made available in a variety of languages, including those most popular in mobile and web application
        development.
      </p>
    </DocContainer>
  );
};

export default GuideFutureDevelopment;
