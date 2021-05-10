import React from 'react';
import {A} from 'components';

export interface FaqContent {
  answer: JSX.Element | string;
  id: string;
  question: JSX.Element | string;
  isTop?: boolean; // top question
}

export enum FaqTopic {
  All = 'All',
  Coins = 'Coins',
  Community = 'Community',
  Projects = 'Projects',
  HowToGuides = 'How to guides',
}

export type TopicQuestionAndAnswers = {
  topic: Exclude<FaqTopic, 'All'>;
  content: FaqContent[];
};

/* eslint-disable */
export const faqQuestionsAndAnswers: TopicQuestionAndAnswers[] = [
  {
    topic: FaqTopic.Coins,
    content: [
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
        isTop: true,
      },
      {
        question: 'What exchanges are the coins on?',
        answer: (
          <span>
            Currently all trading takes place via{' '}
            <A href="https://tnbcrow.pythonanywhere.com/">https://tnbcrow.pythonanywhere.com/</A> though we expect to
            list on various exchanges when we go live.
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
  },
  {
    topic: FaqTopic.Community,
    content: [
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
            <A newWindow={false} href="/download">
              https://thenewboston/download
            </A>
          </span>
        ),
        id: 'where-download-account-manager',
        isTop: true,
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
            place. Feel free to follow us on our various{' '}
            <A newWindow={false} href="/social">
              social media accounts
            </A>{' '}
            as well.
          </span>
        ),
        id: 'how-do-i-join',
        isTop: true,
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
            Check out our{' '}
            <A newWindow={false} href="/governance/overview">
              docs
            </A>
          </span>
        ),
        id: 'how-does-governance-work',
      },
      {
        question: 'I’m new to crypto, where can I learn more?',
        answer: (
          <span>
            Check out our{' '}
            <A newWindow={false} href="/glossary">
              glossary
            </A>{' '}
            and{' '}
            <A newWindow={false} href="/tutorials">
              youtube videos
            </A>
            .
          </span>
        ),
        id: 'new-to-crypto',
        isTop: true,
      },
    ],
  },
  {
    topic: FaqTopic.Projects,
    content: [
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
        isTop: true,
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
  },
  {
    topic: FaqTopic.HowToGuides,
    content: [
      {
        question: 'Are there guides for using the Account Manager?',
        answer: (
          <span>
            <A newWindow={false} href="/account-manager/get-started">
              Here
            </A>
          </span>
        ),
        id: 'account-manager-guides',
      },
      {
        question: 'How do I create a bank or PV?',
        answer: (
          <span>
            <A newWindow={false} href="/account-manager/created-bank">
              Bank
            </A>
            ,{' '}
            <A newWindow={false} href="/account-manager/created-validator">
              PV
            </A>
            .
          </span>
        ),
        id: 'how-to-create-bank-pv',
      },
    ],
  },
];
