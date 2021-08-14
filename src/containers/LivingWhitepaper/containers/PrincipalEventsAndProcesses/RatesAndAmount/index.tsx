import React, {FC} from 'react';

import {Divider} from 'components';
import {PrincipalEventsId} from '../../../constants';

const RatesAndAmount: FC = () => {
  return (
    <section className="PrincipalEvents__section">
      <h2 className="PrincipalEvents__section-heading" id={PrincipalEventsId.RatesAndAmounts}>
        Rates & Amounts
      </h2>
      <section id={PrincipalEventsId.ConversionRates}>
        <h3 className="PrincipalEvents__section-sub-heading PrincipalEvents__section-sub-heading--spaced">
          Conversion Rates
        </h3>
        <p className="PrincipalEvents__section-paragraph PrincipalEvents__section-paragraph--my-0">
          <span className="PrincipalEvents__section-text--black">1 network day</span> - 1,000 blocks
        </p>
        <Divider className="PrincipalEvents__section-divider" />
        <p className="PrincipalEvents__section-paragraph PrincipalEvents__section-paragraph--my-0">
          <span className="PrincipalEvents__section-text--black">1 locked coin</span> - 100,000 points
        </p>
      </section>

      <section id={PrincipalEventsId.UsernameAndVotes}>
        <h3 className="PrincipalEvents__section-sub-heading PrincipalEvents__section-sub-heading--spaced">
          Usernames & Votes
        </h3>
        <p className="PrincipalEvents__section-paragraph PrincipalEvents__section-paragraph--my-0">
          <span className="PrincipalEvents__section-text--black">Username fee</span> - 1,000 coins
        </p>
        <Divider className="PrincipalEvents__section-divider" />
        <p className="PrincipalEvents__section-paragraph PrincipalEvents__section-paragraph--my-0">
          <span className="PrincipalEvents__section-text--black">Each additional vote</span> - 500 coins
        </p>
        <Divider className="PrincipalEvents__section-divider" />
        <p className="PrincipalEvents__section-paragraph PrincipalEvents__section-paragraph--my-0">
          <span className="PrincipalEvents__section-text--black">Submit governor application</span> - 10,000 coins
        </p>
      </section>

      <section id={PrincipalEventsId.LockedCoinsAndBoosts}>
        <h3 className="PrincipalEvents__section-sub-heading PrincipalEvents__section-sub-heading--spaced">
          Locked Coins & Boosts
        </h3>
        <p className="PrincipalEvents__section-paragraph PrincipalEvents__section-paragraph--my-0">
          <span className="PrincipalEvents__section-text--black">Lock time</span> - 20 days
        </p>
        <Divider className="PrincipalEvents__section-divider" />
        <p className="PrincipalEvents__section-paragraph PrincipalEvents__section-paragraph--my-0">
          <span className="PrincipalEvents__section-text--black">Early unlock penalty</span> - Max penalty is 10% of
          locked coins and every 2 days the penalty decreases by 1% (when calculating penalty for early unlocking the
          penalty is always rounded up)
        </p>
      </section>

      <section id={PrincipalEventsId.Points}>
        <h3 className="PrincipalEvents__section-sub-heading PrincipalEvents__section-sub-heading--spaced">Points</h3>
        <p className="PrincipalEvents__section-paragraph PrincipalEvents__section-paragraph--my-0">
          <span className="PrincipalEvents__section-text--black">Cast vote for governor</span> - 1 or more votes
        </p>
        <Divider className="PrincipalEvents__section-divider" />
        <p className="PrincipalEvents__section-paragraph PrincipalEvents__section-paragraph--my-0">
          <span className="PrincipalEvents__section-text--black">Update or remove governor application</span> -
          1,000,000 points
        </p>
      </section>

      <section id={PrincipalEventsId.TreasuryBoard}>
        <h3 className="PrincipalEvents__section-sub-heading PrincipalEvents__section-sub-heading--spaced">
          Treasury Board
        </h3>
        <ul className="PrincipalEvents__section-list">
          <li className="PrincipalEvents__section-list-item">
            <span className="PrincipalEvents__section-text--black">Beta</span> - 3 members
          </li>
          <li className="PrincipalEvents__section-list-item">
            <span className="PrincipalEvents__section-text--black">By launch</span> - 5 members
          </li>
          <li className="PrincipalEvents__section-list-item">
            <span className="PrincipalEvents__section-text--black">Minting coins</span> - 50% or more signatures
            required
          </li>
        </ul>
      </section>

      <section id={PrincipalEventsId.Government}>
        <h3 className="PrincipalEvents__section-sub-heading PrincipalEvents__section-sub-heading--spaced">
          Government
        </h3>
        <ul className="PrincipalEvents__section-list">
          <li className="PrincipalEvents__section-list-item">
            <span className="PrincipalEvents__section-text--black">Beta</span> - 8 members
          </li>
          <li className="PrincipalEvents__section-list-item">
            <span className="PrincipalEvents__section-text--black">By launch</span> - 20 members
          </li>
          <li className="PrincipalEvents__section-list-item">
            <span className="PrincipalEvents__section-text--black">Release funds from the budget</span> - 50% or more
            signatures required required
          </li>
        </ul>
      </section>

      <section id={PrincipalEventsId.Nodes}>
        <h3 className="PrincipalEvents__section-sub-heading PrincipalEvents__section-sub-heading--spaced">Nodes</h3>
        <ul className="PrincipalEvents__section-list">
          <li className="PrincipalEvents__section-list-item">
            <span className="PrincipalEvents__section-text--black">Beta</span> - 8 nodes
          </li>
          <li className="PrincipalEvents__section-list-item">
            <span className="PrincipalEvents__section-text--black">By launch</span> - 20 nodes
          </li>
        </ul>
      </section>
    </section>
  );
};

export default RatesAndAmount;
