import React from 'react';

import {Divider} from 'components';
import {ArchitectureDeepDiveId} from '../../../constants';

import './FAQ.scss';
import '../ArchitectureDeepDive.scss';

const FAQ = () => {
  return (
    <section className="FAQ" id={ArchitectureDeepDiveId.Faq}>
      <h2 className="ArchitectureDeepDive__section-title">FAQs</h2>
      <p className="ArchitectureDeepDive__emphasized-text">
        How does the governance model shield the chain against bad actors?
      </p>
      <p className="ArchitectureDeepDive__description">
        For the government to pay out any coins and also the treasury to mint new coins, a majority vote is essential.
        So, even if there is a bad actor that got in somehow, they would still need to convince all others to vote with
        them in some harmful way. And those they would have to convince would be the most trusted people in the
        community.
      </p>
      <Divider className="ArchitectureDeepDive__point-divider" />

      <div className="ArchitectureDeepDive__emphasized-text">What is the difference between coins and points?</div>
      <p className="ArchitectureDeepDive__description">
        Unlike coins, points refill over time. The refill rate is proportional to the amount of coins lockedBy locking
        coins, users receive points in return for services to the network.
      </p>
      <Divider className="ArchitectureDeepDive__point-divider" />

      <div className="ArchitectureDeepDive__emphasized-text">How does the network store votes?</div>
      <p className="ArchitectureDeepDive__description">
        Every registered user can purchase votes, which they can cast for one or more candidates. Special blocks store
        the record of those votes being purchased on the blockchain, or those votes being cast.
      </p>
    </section>
  );
};

export default FAQ;
