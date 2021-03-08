import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import ApplicationAndElectionProcess from './ApplicationAndElectionProcess.png';

const GovernanceElectionProcess: FC = () => {
  return (
    <DocContainer className="GovernanceElectionProcess" title="Election Process" lastUpdated="07 Mar 2021">
      <p>
        Registered users can use points to apply for government positions. Once an application is submitted all
        registered users (excluding the candidate) can begin voting for that candidate. The top X candidates will be
        elected as the government. The top X members of government are referred to as the “Treasury Board” and are
        responsible for minting new coins.
      </p>

      <DocImage alt="application and election process" maxWidth={560} src={ApplicationAndElectionProcess} />

      <p>
        The voting process is an ongoing process. Throughout the voting process, users can change or remove their vote
        at any time. Once a member of government has been elected, they will remain seated until bumped out by a higher
        voted applicant.
      </p>
      <p>
        There is a 10,000 coin fee to apply for governor. Other government related actions such as updating
        applications, voting for applicants, etc... require the use of points. All actions and voting records will be
        publicly visible and stored on the blockchain.
      </p>
      <p>No government actions can be taken until the following requirements are met:</p>

      <DocList variant="ol">
        <li>All members of government must be seated</li>
        <li>A minimum number of total votes have been cast</li>
      </DocList>
    </DocContainer>
  );
};

export default GovernanceElectionProcess;
