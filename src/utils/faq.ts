import {faqQuestionsAndAnswers, FaqContent} from 'constants/faq';

export const getTopQuestionsAndAnswers = (): FaqContent[] => {
  return faqQuestionsAndAnswers
    .map((faqTopic) => faqTopic.content.filter((qna) => qna.isTop))
    .reduce((a, b) => [...a, ...b], []);
};
