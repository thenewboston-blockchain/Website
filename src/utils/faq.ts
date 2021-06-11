import {faqQuestionsAndAnswers, FaqContent} from 'types/faq';

export const getTopQuestionsAndAnswers = (): FaqContent[] => {
  return faqQuestionsAndAnswers.map((faqTopic) => faqTopic.content.filter((qna) => qna.isTop)).flat();
};
