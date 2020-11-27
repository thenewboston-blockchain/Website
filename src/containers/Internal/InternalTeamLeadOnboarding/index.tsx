import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';
import TeamLeadOnboarding from './TeamLeadOnboarding.png';

const InternalTeamLeadOnboarding: FC = () => {
  return (
    <DocContainer className="InternalTeamLeadOnboarding" title="Team Lead Onboarding">
      <DocImage alt="team lead onboarding" maxWidth={500} src={TeamLeadOnboarding} />

      <p>
        <strong>Overview</strong>
      </p>

      <p>
        When a new team is created, the manager overseeing that team will work with the new team as well as the Payments
        Team to ensure:
      </p>

      <DocList variant="ul">
        <li>the Team Lead is aware of how the payment system works</li>
        <li>the project board and labels are properly set up</li>
        <li>all information needed for the team page on the website is completed</li>
        <ul>
          <li>team interview process</li>
          <li>team onboarding guide</li>
          <li>etc...</li>
        </ul>
        <li>show them how to add and remove job descriptions</li>
      </DocList>

      <p>
        After the team is properly structured and Team Lead is aware of all relevant information, the Manager will
        inform the Payments Team of the new team so they can start tracking tasks.
      </p>

      <p>
        <strong>Managers</strong>
      </p>

      <DocList variant="ul">
        <li>Oversee the Team creation and Team Lead onboarding process</li>
        <li>Find bottlenecks / areas for improvements in the process and offer solutions to those problems</li>
        <li>Work with Kristy to document this process and format it for the website</li>
      </DocList>
    </DocContainer>
  );
};

export default InternalTeamLeadOnboarding;
