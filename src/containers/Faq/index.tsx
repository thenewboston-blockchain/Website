import React, {FC, memo, ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {A, HashLink, PageTitle} from 'components';

import './Faq.scss';

interface FaqContent {
  answer: ReactNode;
  id: string;
  question: ReactNode;
}

const questionsAnswers: FaqContent[] = [
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
    answer: '281,474,976,710,656 coins',
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
      <>
        Download the <Link to="/download">TNB Account Manager</Link> app, create an{' '}
        <Link to="/account-manager/create-an-account">account</Link> and complete any of these{' '}
        <Link to="/tasks">tasks</Link>.
      </>
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

const Faq: FC = () => {
  const renderQuestionAnswers = (): ReactNode => {
    return questionsAnswers.map(({answer, id, question}) => (
      <div key={id}>
        <h2 className="Faq__question" id={id}>
          {question}
          {id ? <HashLink className="Faq__HashLink" id={id} /> : null}
        </h2>
        <div className="Faq__answer">{answer}</div>
      </div>
    ));
  };

  return (
    <>
      <PageTitle title="FAQ" />
      <div className="Faq">
        <div className="Faq__content">
          <h1 className="Faq__title">Frequently Asked Questions</h1>
          {renderQuestionAnswers()}
        </div>
      </div>
    </>
  );
};

export default memo(Faq);
