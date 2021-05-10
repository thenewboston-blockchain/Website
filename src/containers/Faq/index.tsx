import React, {FC, memo, useEffect, useState} from 'react';

import {PageTitle} from 'components';
import {Input} from 'components/FormElements';
import FaqDropdownCard from 'components/FaqDropdownCard';
import Button from 'components/Button';
import {faqQuestionsAndAnswers, FaqTopic, FaqContent, TopicQuestionAndAnswers} from 'constants/faq';
import {useWindowDimensions} from 'hooks';
import Feedback from './Feedback';
import SideMenu from './FaqSideMenu';

import './Faq.scss';

const Faq: FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FaqTopic>(FaqTopic.All);
  const [filteredQnAs, setFilteredQnAs] = useState<TopicQuestionAndAnswers[]>(faqQuestionsAndAnswers);
  const [searchValue, setSearchValue] = useState('');
  const {width} = useWindowDimensions();

  const filterQnAs = () => {
    // set filtered question and answers based on filters
    let filtered = faqQuestionsAndAnswers;
    if (selectedFilter !== 'All') {
      filtered = faqQuestionsAndAnswers.filter((faqTopic) => faqTopic.topic === selectedFilter);
    }

    // finish if there is no search query
    if (searchValue.trim() === '') {
      setFilteredQnAs(filtered);
      return;
    }

    const matchedQnAs = filtered
      .map((faqTopic) => {
        return {
          content: faqTopic.content.filter((qna) =>
            qna.question.toString().toLowerCase().includes(searchValue.trim().toLowerCase()),
          ),
          topic: faqTopic.topic,
        };
      }) // filter questions that match with search query
      .filter((faqTopic) => faqTopic.content.length > 0); // filter out topics that does not have any questions that are matched

    setFilteredQnAs(matchedQnAs);
  };

  useEffect(() => {
    filterQnAs();
    // eslint-disable-next-line
  }, [selectedFilter]);

  const renderQuestionsAndAnswers = () => {
    if (filteredQnAs.length === 0) {
      return <div className="Faq__empty-questions">No related questions found.</div>;
    }
    return filteredQnAs.map((faqTopic) => {
      return renderTopicQuestionsAndAnswers(faqTopic.topic, faqTopic.content);
    });
  };

  const renderTopicQuestionsAndAnswers = (topic: string, content: FaqContent[]) => {
    return (
      <div className="Faq__topic" key={topic}>
        <div className="Faq__topic-title">{topic}</div>
        {content.map((qna) => (
          <FaqDropdownCard className="Faq__dropdown-card" key={qna.id} question={qna.question} answer={qna.answer} />
        ))}
      </div>
    );
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      filterQnAs();
    }
  };

  return (
    <>
      <PageTitle title="FAQ" />
      <div className="Faq">
        <div className="Faq__title-container">
          <div className="Faq__title">Frequently Asked Questions</div>
          <div className="Faq__subtitle">
            Looking for answers? Most questions can be answered instantly by searching our FAQ page.
          </div>
        </div>
        <div className="Faq__content">
          {width > 600 && (
            <div className="Faq__sidemenu">
              <SideMenu selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            </div>
          )}
          <div className="Faq__content-main">
            <div className="Faq__search">
              <Input
                className="Faq__search-input"
                fullWidth
                value={searchValue}
                placeholder="Search for questions"
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleSearchKeyDown}
              />
              <Button rounded onClick={filterQnAs}>
                Search
              </Button>
            </div>
            <div>{renderQuestionsAndAnswers()}</div>
          </div>
        </div>
        <Feedback />
      </div>
    </>
  );
};

export default memo(Faq);
