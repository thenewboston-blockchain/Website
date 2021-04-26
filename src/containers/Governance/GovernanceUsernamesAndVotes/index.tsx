import React, {FC} from 'react';

import {NavLink} from 'react-router-dom';

import {DocContainer} from 'components';

const GovernanceUsernamesAndVotes: FC = () => {
  return (
    <DocContainer className="GovernanceUsernamesAndVotes" title="Usernames & Votes" lastUpdated="07 Mar 2021">
      <p>
        Usernames may be purchased for a fee that will be paid directly to the{' '}
        <NavLink to="/governance/budgets">budget</NavLink> and used in place of an account number. Usernames are
        required to participate in the voting process for both voters and applicants. The username system increases
        transparency in voting by enabling human readable strings to act as identities rather than account numbers.
      </p>

      <p>
        All usernames come with 1 vote by default. Once a username has been registered, additional votes may be
        purchased for that username.
      </p>
    </DocContainer>
  );
};

export default GovernanceUsernamesAndVotes;
