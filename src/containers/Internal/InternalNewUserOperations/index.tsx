import React, {FC} from 'react';

import {A, DocContainer, DocImage, DocList} from 'components';
import NewUsers from './NewUsers.png';

const InternalNewUserOperations: FC = () => {
  return (
    <DocContainer className="InternalNewUserOperations" title="New User Operations">
      <DocImage alt="new users" maxWidth={1200} src={NewUsers} />

      <p>
        <strong>Overview</strong>
      </p>

      <p>Various teams will work to draw new users into Slack #intros. From there, Community Managers will:</p>

      <DocList variant="ul">
        <li>greet them</li>
        <li>ask them about their background</li>
        <li>find out what they are interested in working on</li>
        <li>guide them to the next step</li>
      </DocList>

      <p>Users who are looking to contribute will have 3 options.</p>

      <p>
        <strong>Projects</strong>
      </p>

      <DocList variant="ul">
        <li>
          <A href="https://github.com/thenewboston-developers/Project-Proposals">
            https://github.com/thenewboston-developers/Project-Proposals
          </A>
        </li>
        <li>Community Managers will</li>
        <ul>
          <li>help them with their proposals</li>
          <li>add them to join the #projects channel so they can</li>
          <ul>
            <li>look for team members</li>
            <li>ask any questions related to projects</li>
            <li>chat about projects in general</li>
          </ul>
          <li>introduce them to Manish, he will be the contact for</li>
          <ul>
            <li>answering the more difficult questions (funding, etc...)</li>
            <li>help with recruiting if they are having a hard time finding team members</li>
            <li>check-in about the status of their proposal</li>
          </ul>
        </ul>
      </DocList>

      <p>
        <strong>Tasks</strong>
      </p>

      <DocList variant="ul">
        <li>Community Managers will</li>
        <ul>
          <li>guide them to the correct #team channel (depending on the task they want to work on)</li>
          <li>introduce them to the team</li>
          <li>let them know they can ask questions in that channel if they get stuck</li>
        </ul>
      </DocList>

      <p>
        <strong>Openings</strong>
      </p>

      <DocList variant="ul">
        <li>
          Users who are interested in applying for Core Team role will send their information to any Community Manager
          (first one to respond to them)
        </li>
        <li>
          The information required depends on the Team they are applying for. This should also be listed on the job
          opening but may include:
        </li>
        <ul>
          <li>LinkedIn</li>
          <li>Resume</li>
          <li>GitHub account</li>
          <li>etc...</li>
        </ul>
        <li>
          Community Managers will post that users information in a private #team-applications channel (different for
          each team)
        </li>
        <li>Team Leads will review the applicants and let the Community Manager know the next steps:</li>
        <ul>
          <li>No - Community Managers will suggest a different role or project for them</li>
          <li>Yes - Community Managers will let them know and move on to the interview phase</li>
        </ul>
        <li>Interviews are Team specific</li>
        <ul>
          <li>Community Managers will explain to the users how the interview process works</li>
          <li>More details of each Teams interview process can be found on their team page</li>
          <li>Teams may also bypass interviews if they are not needed (Discord Managers for example)</li>
        </ul>
      </DocList>
    </DocContainer>
  );
};

export default InternalNewUserOperations;
