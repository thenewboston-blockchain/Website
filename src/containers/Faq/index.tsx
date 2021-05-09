import React, {FC, memo, ReactNode} from 'react';
import {HashLink, PageTitle} from 'components';

import './Faq.scss';

import {questionsAnswers} from 'constants/faq';

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
