import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import NetworkFlow from './NetworkFlow.png';
import RequestFlow from './RequestFlow.png';
import ValidatorFlow from './ValidatorFlow.png';
import './GuideFlows.scss';

const GuideFlows: FC = () => {
  const renderNetworkDataFlow = () => (
    <>
      <h2>Network Data Flow</h2>
      <DocList variant="ol">
        <li>
          Nodes will forward user requests to the PV. If a request is accidentally forwarded to any non-PV node, that
          receiving node will re-route the request to the correct PV.
        </li>
        <li>The PV will then produce a blockchain, which is simply an ordered list of blocks.</li>
        <li>
          All blocks are then broadcast to the CVs. For any requests that are invalid, and error message is sent to the
          original node which can then be forwarded to the user.
        </li>
      </DocList>
      <DocImage alt="network flow" maxWidth={680} src={NetworkFlow} />
      <hr />
    </>
  );

  const renderUserRequestFlow = () => (
    <>
      <h2>User Request Flow</h2>
      <DocList variant="ol">
        <li>User sends a request to their active node.</li>
        <li>
          The active node will forward that request to the current PV, which is known based on the most recent schedule.
        </li>
        <li>
          The PV will then validate the request, restructure it as a block, and then add that block to it's blockchain.
          The block will then be sent to all CVs for confirmation.
        </li>
        <li>Nodes will listen to CV's for confirmation that the block that has been added to their blockchain.</li>
      </DocList>
      <DocImage alt="user request flow" maxWidth={560} src={RequestFlow} />
      <hr />
    </>
  );

  const renderValidatorFlow = () => (
    <>
      <h2>Validator Flow</h2>
      <DocList variant="ol">
        <li>The PV will broadcast all blocks to the CVs.</li>
        <li>Each CV will independently process block and compare PVs results with their own.</li>
        <li>If results match, CV will add the block to its blockchain.</li>
        <li>Nodes will listen for these confirmations (CVs blocks) and stream that information to the user.</li>
      </DocList>
      <DocImage alt="validator flow" maxWidth={540} src={ValidatorFlow} />
    </>
  );

  return (
    <DocContainer className="GuideFlows" title="Flows" lastUpdated="21 Apr 2021">
      <p>
        The following diagrams will outline the main flows of data throughout the network. In later sections we will be
        taking a look at each of the individual processes in more detail.
      </p>
      {renderUserRequestFlow()}
      {renderNetworkDataFlow()}
      {renderValidatorFlow()}
    </DocContainer>
  );
};

export default GuideFlows;
