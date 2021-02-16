import React, {FC} from 'react';

import {DocContainer, DocImage, DocList, Label} from 'components';
import 'containers/Teams/Resources/Resources.scss';
import PaymentBoard from './PaymentBoard.png';

const InternalHowToSetUpPaymentBoard: FC = () => {
  return (
    <DocContainer className="Resource" title="How to Set Up Payment Board">
      <p>
        In order to make the whole payment process easier, we will be using the{' '}
        <a href="https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/about-project-boards">
          Github project boards
        </a>{' '}
        feature. This should be unified across all repositories to make payments easier and more reliable. To set up a
        Github project board, we have a certain template that every repository should follow:
      </p>

      <DocList variant="ol">
        <li>
          Open the projects tab on your Github repository and click on the <strong>New project</strong> button on the
          right.
        </li>
        <li>
          Enter your project name and description & click <strong>Create project</strong>.
        </li>
        <li>
          After creating your project, you need to create columns for it, so just click on the{' '}
          <strong>Add column</strong> button.
        </li>
        <li>
          The first column of the project will be project-specific, so name it according to your needs (for example on
          the <strong>Website</strong> project it’s <strong>Design/New Issues</strong>). This column will get all newly
          created issues automatically when you connect a new issue to this project. To do this automation, click on the
          options menu of the column (top right corner) and click on <strong>Manage automation</strong>. There, you’ll
          check the first <strong>Newly added</strong> checkbox below <strong>Move issues here when...</strong> and save
          the changes.
        </li>
        <li>
          The second column is called <strong>Ready for engineering</strong>, so go ahead and create it. You don’t need
          any automation rules about this one because when a team leads reviews an issue and assign coin labels to it,
          their status will be changed accordingly.
        </li>
        <li>
          The next optional column is called <strong>PR Review</strong>. On the <strong>Website</strong> repository we
          use it when the PR is in the review phase.
        </li>
        <li>
          After that, we have the <strong>Done</strong> column and here we need to set the automation rules to move
          issues here when they are closed & when a PR is merged. So go ahead and check the first 2 checkboxes in the
          list. Issues will move here automatically as soon as their connected PR is merged and from here the payment
          team will pick up every issue, pay the users that worked on that issue and move it to the next column.
        </li>
        <li>
          The next column is called <strong>Paid</strong> and it serves for the payment team to move all paid issues
          from the <strong>Done</strong> column. No automation rules here.
        </li>
        <li>
          The last column is called <strong>No Account Number</strong> and it also has no automation rules. Its purpose
          is for the payment team to keep issues there temporarily when the contributors forgot to put their account
          numbers on the issue / PR.
        </li>
      </DocList>

      <p>
        <strong>Note</strong> - When team leads are adding the coin reward labels, they should make sure that the issue
        is connected to the Github project. This can be done under the <strong>Projects</strong> section on the right
        sidebar of the issue page on Github.
      </p>

      <p>
        Below you can see an example picture of the boards in the <strong>Website</strong> project that can be found{' '}
        <a href="https://github.com/thenewboston-developers/Website/projects/3">here</a>:
      </p>

      <DocImage alt="payment board" maxWidth={720} src={PaymentBoard} />

      <p>
        <strong>How Payment Labels Work</strong>
      </p>

      <p>We have four types of labels on the repositories that will help the whole payment flow:</p>

      <DocList variant="ul">
        <li>
          <Label name="Paid" color="FBCA04" />
        </li>
        <ul>
          <li>
            This label is simple. When the payment team is done with the payments, they put this label on the closed
            issues to mark it as paid.
          </li>
          <li>Hex code - #FBCA04</li>
        </ul>
        <li>
          <Label name="Not Paid" color="E99695" />
        </li>
        <ul>
          <li>
            We use this label rarely. If there’s a case where one issue is producing multiple PRs (like the{' '}
            <strong>Hello World</strong> issue on the website), we don’t close that issue until the last PR connected to
            it has been merge. So we use this label after merging the PRs from that issue (and we put this label on the
            PR itself only) and tag someone from the payment team in a comment on the PR with the number of coins
            waiting to be sent to the contributor.
          </li>
          <li>This is very rare, as the rules are 1 issue = 1 PR.</li>
          <li>Hex code - #E99695</li>
        </ul>
        <li>
          <Label name="Bug Bounty Owed - [COINS]" color="B60205" />
        </li>
        <ul>
          <li>
            This label is added by the team leads and it’s the number of coins that should be given to the issue creator
            for discovering the bug. If the issue is not a bug, or in any other case where the issue creator should not
            be rewarded, we just don’t use this label.
          </li>
          <li>Hex code - #B60205</li>
        </ul>
        <li>
          <Label name="PR Reward - [COINS]" color="09825d" />
        </li>
        <ul>
          <li>
            This is the reward in coins that will be given to the contributor that solved the issue (submitted a PR that
            is accepted and merged).
          </li>
          <li>Hex code - #09825d</li>
        </ul>
      </DocList>

      <p>
        The <strong>Bug Bounty Owed</strong> label can have <strong>[COINS]</strong> set as 250, 500, 1000, 2000, 2500,
        5000, 7500, 10000, 25000. So the label's text would look like: <strong>Bug Bounty Owed - 500</strong>.
      </p>
      <p>
        The <strong>PR Reward</strong> labels can have <strong>[COINS]</strong> set as 250, 500, 1000, 2000, 2500, 5000,
        7500, 10000, 25000. So the label's text would look like: <strong>PR Reward - 500</strong>.
      </p>
      <p>A quick tutorial on how to create labels:</p>

      <DocList variant="ol">
        <li>
          Go to your repository -{'>'} Issues and there’s a button to the right of the issues filter that says{' '}
          <strong>Labels</strong>. Click on it and it’ll take you to a page where you can see your labels.
        </li>
        <li>
          There you will see a green <strong>New label</strong> button on the right.
        </li>
        <li>
          When you click on the button you will be presented with a form where you can enter the label name,
          description, and color.
        </li>
        <li>
          Click <strong>Create label</strong>.
        </li>
      </DocList>
    </DocContainer>
  );
};

export default InternalHowToSetUpPaymentBoard;
