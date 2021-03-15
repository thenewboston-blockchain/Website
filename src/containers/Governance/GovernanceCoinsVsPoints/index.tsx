import React, {FC} from 'react';

import {DocContainer} from 'components';

const GovernanceCoinsVsPoints: FC = () => {
  return (
    <DocContainer className="GovernanceCoinsVsPoints" title="Coins vs. Points" lastUpdated="07 Mar 2021">
      <p>
        The value of our coins will increase as more apps are developed that can be integrated into our network. All
        apps however require some form of user interaction. Some common app interactions include leaving comments,
        sending messages, changing passwords, etc… The more frequently an app is used the higher the bandwidth costs ($)
        for server owners.
      </p>

      <p>
        Blockchain networks typically depend on transaction fees to both incentivize server owners and also prevent
        spam. While fees do solve the spam problem by making it expensive to attack or spam the network, fees also
        introduce a new problem. Imagine needing to pay a fee every time you send an email or change your password. When
        users are nickel and dimed for every interaction they perform they will stop using those apps. For a blockchain
        network that would like to support app development, prevent spam, and incentivize server owners, another
        solution is needed.
      </p>

      <p>
        Points solve all of these challenges. By locking up coins, users receive points (which fill back up over time)
        in return. The specifics of how points solve each problem are as follows:
      </p>

      <p>
        <strong>App Development</strong> - Interactions like leaving comments and sending messages no longer have a
        monetary cost (coins) but rather refillable points <br />
        <strong>Prevent Spam</strong> - Users have a limited number of interactions they can perform based on how many
        points they have <br />
        <strong>Incentivize Server Owners</strong> - Although server owners have no direct financial incentive, since
        users can only acquire points by locking up coins, this increases the value of all coins by reducing the overall
        available supply (less supply on exchanges = more demand = price increases)
      </p>
    </DocContainer>
  );
};

export default GovernanceCoinsVsPoints;
