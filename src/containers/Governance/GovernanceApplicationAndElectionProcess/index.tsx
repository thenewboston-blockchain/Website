import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import ApplicationAndElectionProcess from './ApplicationAndElectionProcess.png';

const GovernanceApplicationAndElectionProcess: FC = () => {
  return (
    <DocContainer
      className="GovernanceApplicationAndElectionProcess"
      title="Application & Election Process"
      lastUpdated="15 Feb 2021"
    >
      <p>
        Registered users can use points to apply for government positions. Once an application is submitted all
        registered users (excluding the candidate) can begin voting for that candidate. The top X candidates will be
        elected as the government. The top X members of government are referred to as the “Treasury Board” and are
        responsible for minting new coins.
      </p>

      <DocImage alt="app;icationandelectionprocess" maxWidth={720} src={ApplicationAndElectionProcess} />

      <p>
        The voting process is an ongoing process. Throughout the voting process, users can change or remove their vote
        at any time. Once a member of government has been elected, they will remain seated until bumped out by a higher
        voted applicant.
      </p>

      <p>
        All network actions including applying for government positions, updating applications, voting for applicants,
        etc… require the use of points. All actions and voting records will be publicly visible and stored on the
        blockchain.
      </p>

      <p>No government actions can be taken until the following requirements are met:</p>

      <DocList variant="ol">
        <li>All members of government must be seated</li>
        <li>A minimum number of total votes have been cast</li>
      </DocList>
    </DocContainer>
  );
};

export default GovernanceApplicationAndElectionProcess;
