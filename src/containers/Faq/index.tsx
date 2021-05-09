import React, {FC, memo, useState} from 'react';

import {PageTitle} from 'components';
import {Input} from 'components/FormElements';
import FaqDropdownCard from 'components/FaqDropdownCard';
import Button from 'components/Button';
import {faqQuestionsAndAnswers, FaqTopic, FaqContent} from 'constants/faq';
import {useWindowDimensions} from 'hooks';
import Feedback from './Feedback';
import SideMenu from './FaqSideMenu';

import './Faq.scss';

const Faq: FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FaqTopic>(FaqTopic.All);
  const [searchValue, setSearchValue] = useState('');
  const {width} = useWindowDimensions();

  const renderTopicQuestionsAndAnswers = (topic: string, content: FaqContent[]) => {
    return (
      <div className="Faq__topic" key={topic}>
        <div className="Faq__topic-title">{topic}</div>
        {content.map((qna) => (
          <FaqDropdownCard key={qna.id} question={qna.question} answer={qna.answer} />
        ))}
      </div>
    );
  };

  const renderQuestionsAndAnswers = () => {
    if (selectedFilter === 'All') {
      return Object.entries(faqQuestionsAndAnswers).map(([topic, content]) => {
        return renderTopicQuestionsAndAnswers(topic, content);
      });
    }
    return renderTopicQuestionsAndAnswers(selectedFilter, faqQuestionsAndAnswers[selectedFilter]);
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
            {/* TODO: work on logic of search */}
            <div className="Faq__search">
              <Input
                className="Faq__search-input"
                fullWidth
                value={searchValue}
                placeholder="Search for questions"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button rounded onClick={() => console.log(searchValue)}>
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
