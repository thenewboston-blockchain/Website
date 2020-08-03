import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import BankDistributionSchedule from './BankDistributionSchedule.png';
import Treasury from './Treasury.png';

const GuideInitialFunds: FC = () => {
  return (
    <DocContainer className="GuideInitialFunds" title="Initial Creation and Distribution of Funds">
      <p>When creating a new economy, there are two important questions that must first be answered:</p>

      <DocList variant="ol">
        <li>How is currency created?</li>
        <li>How is currency initially distributed?</li>
      </DocList>

      <p>
        In designing the system, it was a challenge to find a fair solution to the first problem of how the currency was
        to be created. It wasn't until a solution to the second problem was found that there would be an answer to the
        first. Given that the usefulness of currency is the transfer of value from one individual to another, the
        initial distribution of funds must be to several individuals. This would not only help alleviate the
        concentration of wealth that is apparent in the majority of existing economies, both fiat and digital but also
        aid early adoption by placing the currency in the hands of many rather than a select few. With the foundational
        ideas of initial distribution apparent, the solution to that question now became tied to another. Who gets the
        funds?
      </p>
      <p>
        Choosing who would receive the initial funds was another challenge. What was the fairest way to choose the
        recipients? Who are the people that are most deserving? At the time of this writing, we are in the midst of a
        global pandemic. With massive layoffs and millions of individuals losing their jobs all across the world, it is
        apparent that the people who have worked the hardest and who have contributed the most have often been the ones
        least rewarded. The value that is produced by working individuals through the creation of goods and services is
        often diluted by the unequal distribution of that value towards the world's most wealthy individuals. To ensure
        that the initial distribution of funds are given not to the already wealthy, but rather to those most deserving,
        funds will be allocated to the individuals who contribute the most towards the growth and improvement of the
        network, the developers.
      </p>
      <p>The exact method for the creation and distribution of initial funds is as follows:</p>

      <DocList variant="ol">
        <li>
          The ledger will be initialized with a single account belonging to the Treasury with a value of
          281,474,976,710,656 (2^48) points.
        </li>
        <li>
          As new developers join the GitHub organization, their GitHub accounts will be inspected to ensure certain
          criteria is met. If and when all criteria is met, users will receive their initial funds (often referred to as
          "seed funds") of 4,096 (2^12) points. The criteria for receiving seed funds through ownership of a GitHub
          account is as follows:
        </li>
        <ol type="a">
          <li>The account must be created prior to the date of this guide's publication</li>
          <ol type="i">
            <li>
              This will prevent the creation of new GitHub accounts simply for the purpose of obtaining more funds
            </li>
          </ol>
          <li>The account has a public repository that meets the following sub-requirements:</li>
          <ol type="i">
            <li>Name of the repository is thenewboston-Seed-Account.</li>
            <li>
              The repository has a file in the root directory named account-number.txt where the only content of the
              text file is a single account number of the account where the user wishes to receive their initial funds.
            </li>
            <li>
              Note that there is an existing repository in the thenewboston-developers organization that users are able
              to fork to expedite the process of account creation and account number generation.
            </li>
          </ol>
          <li>The GitHub account has not yet received funds before.</li>
          <ol type="i">
            <li>
              This will prevent users from leaving and rejoining the organization with the intention of receiving
              multiple seed funds.
            </li>
            <li>
              As seed funds are distributed, transactions will be recorded on the ledger and include the GitHub user ID
              of the recipient.
            </li>
            <ol>
              <li>
                The user ID is preferred over the username due to the ability for users to change their usernames.
              </li>
            </ol>
          </ol>
        </ol>
        <li>
          Additional seed funds will be awarded to any users that contribute to the network through the creation of a
          bank. When the following criteria regarding a bank node is met, owners of the bank will receive funds of
          65,536 (2^16) points. These funds will act as an incentive for any individuals that help create the initial
          decentralized network, as well as reflect the additional amount of effort and cost necessary to deploy and
          maintain servers. The criteria for receiving seed funds through the creation of a trusted bank node as well as
          distribution details is as follows:
        </li>
        <ol type="a">
          <li>
            Banks must be live for a minimum of one week and maintain an acceptable level of trust with the initial
            validator
          </li>
          <ol type="i">
            <li>
              This is to ensure that new bank nodes are not deployed solely for the purpose of receiving funds without
              ever providing any real value to the network
            </li>
          </ol>
          <li>
            Trusted banks will receive their seed funds across a total time of four weeks, one per week, with deposits
            increasing in value after the second week
          </li>
          <ol type="i">
            <li>This will ensure that banks nodes are not terminated immediately after receiving their funds</li>
          </ol>
          <li>The distribution schedule of the entire 65,536 (216) point bank seed funds are as follows:</li>
          <ol type="i">
            <li>At the end of the first week, the bank will receive 8,192 points.</li>
            <li>At the end of the second week, the bank will receive an additional 8,192 points.</li>
            <li>At the end of the third week, the bank will receive 16,384 points.</li>
            <li>At the end of the fourth week, the bank will receive 32,768 points.</li>
          </ol>
          <li>
            Note that trusted banks must maintain their trust level throughout the four weeks to remain eligible for
            future payments.
          </li>
          <li>
            At the end of the four weeks, banks will remain incentivized to stay live on the network because of their
            established member base through the continued revenue stream in the form of transaction fees
          </li>
          <ol type="i">
            <li>
              There is also the inherit incentive of helping the network, given the more efficient the network, the more
              valuable the underlying points
            </li>
          </ol>
        </ol>
      </DocList>

      <DocImage alt="bank distribution schedule" maxWidth={640} src={BankDistributionSchedule} />

      <p>
        The last method of initial Treasury fund distribution will undoubtedly be the most controversial but necessary
        regarding the early adoption and development of the network. As stated above, both developers (owners of
        eligible GitHub accounts) as well as individuals who possess knowledge of networking and server administration
        will be the primary recipients of the seed funds in return for contributing to the early development of the
        network. This however leaves out other individuals who have an interest in the technology or desire to help the
        network through other means. These may include graphic designers, UX designers, marketing professionals, content
        (guides, tutorials, etc.) creators, or individuals simply interested in the technology who would like their own
        accounts. These Treasury funds will be distributed along with a transaction description detailing the reason for
        the transaction.
      </p>
      <p>
        Until all initial Treasury funds have been distributed, the last method of fund distribution must remain closely
        monitored by all users on the network. If it is ever discovered that Treasury funds have been distributed with
        any intention other than to help grow or benefit the network, those findings should be immediately announced to
        the rest of the network through any effective means (most likely social networks), and all users should leave
        the network by shutting down all owned banks. This will ensure that the Treasury will always be held responsible
        for their actions. Any attempt to use the Treasury for personal gain would result in the immediate loss, both in
        terms of trust and value, of the entire network. It is also advised that any accusations of dishonest behavior
        by the Treasury be personally verified by all users on the network. This will prevent malicious individuals from
        attempting to manipulate the price or underlying value of points through the spread of misleading information or
        false accusations. Until the final Treasury funds are distributed, this will be the most important role of all
        users on the network.
      </p>
      <p>
        It is important to note that regarding the last method of Treasury fund distribution, the related transactions
        will never be sent directly from the Treasury account. This is because the signing key for the Treasury account
        is never stored on a traditional account manager (such as a laptop or a mobile phone app) but rather stored
        using a non-traditional yet highly secure method. However, since an account's signing key is needed to allow for
        the sending of points via a signed transaction, the Treasury will instead deposit limited amounts of points into
        a trusted account on an as-needed basis. Those points will then be further distributed to others. All
        transactions from the Treasury to trusted accounts, as well as transactions from those trusted accounts to
        others, will be documented via transaction descriptions which are visible to the public.
      </p>

      <DocImage alt="treasury" maxWidth={640} src={Treasury} />

      <p>
        After the Treasury account has distributed all initial funds, the purpose of the Treasury will cease to exist.
        There will be no additional Treasury funds ever created. All future points will be created solely through
        interest earned on already existing points (more on interest in the Future Development section).
      </p>
    </DocContainer>
  );
};

export default GuideInitialFunds;
