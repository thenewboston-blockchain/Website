import React, {FC, memo, ReactNode} from 'react';
import {A, HashLink} from 'components';

import './Faq.scss';

interface FaqContent {
  answer: ReactNode;
  id: string;
  question: ReactNode;
}

const questionsAnswers: FaqContent[] = [
  {
    answer: 'New digital currency',
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
    question: 'What is the goal?',
  },
  {
    answer:
      '281,474,976,710,656 coins. It’s a higher amount than other coins because people need more of it. When they only have a couple of them like “2 Bitcoin” they will be more likely to want to hold onto them rather than spend them.',
    id: 'is-there-a-max-supply',
    question: 'Is there a max supply?',
  },
  {
    answer:
      'Rather than needing to reach a consensus for every single block (which is why the traditional blockchain is so slow), thenewboston uses network consensus to instead determine which server is responsible for validating all blocks. This not only solves the double spend problem but also allows every block across the entire network to be processed in real time.',
    id: 'why-is-tnb-faster',
    question: 'Why is thenewboston faster and better than the traditional blockchain?',
  },
  {
    answer: (
      <>
        Download the <A href="https://thenewboston.com/download">TNB Account Manager</A> app, create an{' '}
        <A href="https://thenewboston.com/account-manager/create-an-account">account</A> and complete any of these{' '}
        <A href="https://thenewboston.com/tasks/All">tasks</A>.
      </>
    ),
    id: 'how-do-i-start-earning',
    question: 'How do I start earning?',
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
        <p className="Faq__answer">{answer}</p>
      </div>
    ));
  };

  return (
    <div className="Faq">
      <div className="Faq__content">
        <h1 className="Faq__title">Frequently Asked Questions</h1>
        {renderQuestionAnswers()}
      </div>
    </div>
  );
};

export default memo(Faq);
