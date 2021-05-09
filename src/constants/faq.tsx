import React, {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {A} from 'components';

export interface FaqContent {
  answer: ReactNode;
  id: string;
  question: ReactNode;
}
/* eslint-disable */
export const questionsAnswers: FaqContent[] = [
  {
    answer:
      'The YouTube channel thenewboston was launched in February 2008 with a focus on computer programming and various other educational tutorials. It has since expanded and is now an open source development community. One of the largest community projects is a digital currency network where all contributors are paid in coins, the official digital currency of thenewboston.',
    id: 'what-is-tnb',
    question: 'What is thenewboston?',
  },
  {
    answer: 'Bucky Roberts',
    id: 'who-created-tnb',
    question: 'Who created thenewboston?',
  },
  {
    answer: 'To build the most reliable, secure, fastest digital currency in the world.',
    id: 'what-is-the-goal',
    question: 'What is the goal of the digital currency project?',
  },
  {
    answer: '2,032,628,357 coins',
    id: 'is-there-a-max-supply',
    question: 'Is there a max supply?',
  },
  {
    answer:
      'Rather than needing to reach a consensus for every single block (which is why the traditional blockchain is so slow), thenewboston uses network consensus to instead determine which server is responsible for validating all blocks. This not only solves the double-spending problem but also allows every block across the entire network to be processed in real-time.',
    id: 'why-is-tnb-faster',
    question: 'Why is thenewboston faster and better than the traditional blockchain?',
  },
  {
    answer: (
      <span>
        Download the <Link to="/download">TNB Account Manager</Link> app, create an{' '}
        <Link to="/account-manager/create-an-account">account</Link> and complete any of these{' '}
        <Link to="/tasks">tasks</Link>.
      </span>
    ),
    id: 'how-do-i-start-earning',
    question: 'How do I start earning?',
  },
  {
    answer: (
      <ol>
        <li>
          <A href="https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo">
            Fork the repository
          </A>{' '}
          from GitHub into your account
        </li>
        <li>Create a local clone of your fork</li>
        <li>Complete a task, add, commit and push your changes to your fork.</li>
        <li>
          <A href="https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request#creating-the-pull-request">
            Create a pull request
          </A>{' '}
          from the main page of your GitHub repository
        </li>
        <li>
          Type a suitable title and description. In the description, you can write "fixes #issueNumber", "closes
          #issueNumber" or simply "#issueNumber" of the issue you have resolved to link your PR with the issue.
        </li>
      </ol>
    ),
    id: 'how-to-create-pull-request',
    question: 'How to create a pull request (PR)?',
  },
];

export enum FaqTopic {
  All = 'All',
  Coins = 'Coins',
  Community = 'Community',
  Projects = 'Projects',
  HowToGuides = 'How to guides',
}

export const faqQuestionsAndAnswers: Record<Exclude<FaqTopic, 'All'>, FaqContent[]> = {
  [FaqTopic.Coins]: [
    {
      question: 'Is there going to be an ICO?',
      answer: 'No. There hasn’t been an ICO and there will never be one.',
      id: 'is-there-ico',
    },
    {
      question: 'How are coins minted?',
      // TODO: update the link for proof of value
      answer: (
        <span>
          Coins are only minted through adding value to the platform. Approved projects that build apps on top of
          thenewboston blockchain receive coin payouts when specific milestones are reached (see{' '}
          <A href="">Proof of Value</A>).
        </span>
      ),
      id: 'how-are-coins-minted',
    },
    {
      question: 'What exchanges are the coins on?',
      answer: (
        <span>
          Currently all trading takes place via{' '}
          <A href="https://tnbcrow.pythonanywhere.com/">https://tnbcrow.pythonanywhere.com/</A> though we expect to list
          on various exchanges when we go live.
        </span>
      ),
      id: 'what-exchanges-are-coins-on',
    },
    {
      question: 'Is this an ERC20 token?',
      answer: 'No, we have our own blockchain.',
      id: 'is-this-erc20-token',
    },
    {
      question: 'What does it mean when coins are "Locked Up"?',
      answer:
        'Locked coins are frozen and can’t be moved without incurring a penalty. Locking coins is always voluntary.',
      id: 'locked-up-coins',
    },
    {
      question: 'What is the goal of the project?',
      answer: 'To build a better economy which helps people from all over the world.',
      id: 'goal-of-project',
    },
  ],
  [FaqTopic.Community]: [
    {
      question: 'How is this project different from other crypto’s?',
      answer:
        'Most crypto projects start with an idea and then try to build a community. We started as an open source community that started building its own cryptocurrency when Bucky Roberts found a way to speed up blockchain transaction time to nearly real-time.',
      id: 'how-is-project-different',
    },
    {
      question: 'How is this project similar to other crypto’s?',
      answer: 'Like bitcoin and ethereum we have our own blockchain and block explorer. The code is all open source',
      id: 'how-is-project-similar',
    },
    {
      question: 'Where can I download the Account Manager?',
      answer: (
        <span>
          <A href="/download">https://thenewboston/download</A>
        </span>
      ),
      id: 'where-download-account-manager',
    },
    {
      question: 'What is the history of thenewboston?',
      answer:
        'thenewboston started in 2008 when Bucky Roberts started uploading educational tech videos to YouTube. The channel grew organically as his videos helped thousands start careers in tech.',
      id: 'history-of-thenewboston',
    },
    {
      question: 'How do I join the community?',
      answer: (
        <span>
          We have a <A href="https://discord.gg/thenewboston">discord server</A> where most of our communication takes
          place. Feel free to follow us on our various <A href="/social">social media accounts</A> as well.
        </span>
      ),
      id: 'how-do-i-join',
    },
    {
      question: 'What is the vision for the community?',
      answer:
        'thenewboston has always been a community which helps each other. A cryptocurrency platform is a natural extension of this as we see the potential for crypto to change the world economy. We plan to continue to produce educational content and apps that help people grow and make their lives better.',
      id: 'vision-for-community',
    },
    {
      question: 'How does the governance system work?',
      answer: (
        <span>
          Check out our <A href="/governance/overview">docs</A>
        </span>
      ),
      id: 'how-does-governance-work',
    },
    {
      question: 'I’m new to crypto, where can I learn more?',
      answer: (
        <span>
          Check out our <A href="/glossary">glossary</A> and <A href="/tutorials">youtube videos</A>.
        </span>
      ),
      id: 'new-to-crypto',
    },
  ],
  [FaqTopic.Projects]: [
    {
      question: 'How do I propose a project?',
      answer: (
        <span>
          Create an issue here:{' '}
          <A href="https://github.com/thenewboston-developers/Projects/issues">
            https://github.com/thenewboston-developers/Projects/issues
          </A>
        </span>
      ),
      id: 'how-to-propose-project',
    },
    {
      question: 'What apps are being built on top of this blockchain?',
      answer:
        'There are multiple projects under way. Two examples are a marketplace and a system that lets people pay for online goods with the coin.',
      id: 'what-apps-are-being-built',
    },
    {
      question: 'Is there a product roadmap?',
      // TODO: update product roadmap link
      answer: (
        <span>
          <A href="">Here</A>
        </span>
      ),
      id: 'product-roadmap',
    },
  ],
  [FaqTopic.HowToGuides]: [
    {
      question: 'Are there guides for using the Account Manager?',
      answer: (
        <span>
          <A href="/account-manager/get-started">Here</A>
        </span>
      ),
      id: 'account-manager-guides',
    },
    {
      question: 'How do I create a bank or PV?',
      answer: (
        <span>
          <A href="/account-manager/created-bank">Bank</A>, <A href="/account-manager/created-validator">PV</A>.
        </span>
      ),
      id: 'how-to-create-bank-pv',
    },
  ],
};
