import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {Button, Container, FaqDropdownCard, Input, PageTitle} from 'components';
import {useWindowDimensions} from 'hooks';
import {FaqContent, faqFilters, FaqFilterType, faqQuestionsAndAnswers} from 'types/faq';

import Feedback from './Feedback';
import FaqSideMenu from './FaqSideMenu';
import './Faq.scss';

const HIDE_LEFT_MENU_WIDTH = 600;

const faqFilterKeyMap = Object.values(FaqFilterType).reduce(
  (acc, filterType) => ({...acc, [filterType]: true}),
  {} as {[key: string]: boolean},
);

const Faq: FC = () => {
  const history = useHistory();
  const {filter} = useParams<{filter: FaqFilterType}>();
  const [searchText, setSearchText] = useState<string>(''); // search input value
  const [searchQuery, setSearchQuery] = useState<string>(''); // what is actually being used as filter
  const {width} = useWindowDimensions();

  useEffect(() => {
    if (!faqFilterKeyMap[filter]) {
      history.replace(`/faq/${FaqFilterType.all}`);
    }
  }, [filter, history]);

  const filteredQnAsByFilterType = useMemo(() => {
    if (width <= HIDE_LEFT_MENU_WIDTH) {
      return faqQuestionsAndAnswers;
    }

    if (filter !== FaqFilterType.all) {
      return faqQuestionsAndAnswers.filter((faqTopic) => faqTopic.topic === filter);
    }
    return faqQuestionsAndAnswers;
  }, [filter, width]);

  const filteredQnAsBySearchQuery = useMemo(() => {
    const sanitizedSearch = searchQuery.trim().toLowerCase();

    if (!sanitizedSearch) {
      return filteredQnAsByFilterType;
    }

    return filteredQnAsByFilterType
      .map((faqTopic) => {
        return {
          // filter questions that match with search query
          content: faqTopic.content.filter((qna) => qna.question.toString().toLowerCase().includes(sanitizedSearch)),
          topic: faqTopic.topic,
        };
      })
      .filter((faqTopic) => faqTopic.content.length > 0); // filter types that have no questions
  }, [filteredQnAsByFilterType, searchQuery]);

  const renderQuestionsAndAnswers = useCallback(() => {
    if (filteredQnAsBySearchQuery.length === 0) {
      return <div className="Faq__empty-questions">No related questions found.</div>;
    }
    return filteredQnAsBySearchQuery.map((faqTopic) => {
      return renderTopicQuestionsAndAnswers(faqTopic.topic, faqTopic.content);
    });
  }, [filteredQnAsBySearchQuery]);

  const renderTopicQuestionsAndAnswers = (topic: string, content: FaqContent[]) => {
    return (
      <div className="Faq__topic" key={topic}>
        <div className="Faq__topic-title">{faqFilters[topic].label}</div>
        {content.map((qna) => (
          <FaqDropdownCard
            className="Faq__dropdown-card"
            id={qna.id}
            key={qna.id}
            question={qna.question}
            answer={qna.answer}
          />
        ))}
      </div>
    );
  };

  const handleClearClick = (): void => {
    setSearchQuery('');
    setSearchText('');
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setSearchQuery(searchText);
    }
  };

  return (
    <>
      <PageTitle title="FAQ's" />
      <Container className="Faq">
        <div className="Faq__title-container">
          <div className="Faq__title">Frequently Asked Questions</div>
          <div className="Faq__subtitle">
            Looking for answers? Most questions can be answered instantly by searching our FAQ page.
          </div>
        </div>
        <div className="Faq__content">
          {width > HIDE_LEFT_MENU_WIDTH && (
            <div className="Faq__sidemenu">
              <FaqSideMenu />
            </div>
          )}
          <div className="Faq__content-main">
            <div className="Faq__search">
              <Input
                className="Faq__search-input"
                fullWidth
                value={searchText}
                placeholder="Search for questions"
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleSearchKeyDown}
              />
              <Button
                className="Faq__search-clear"
                disabled={!searchText && !searchQuery}
                onClick={handleClearClick}
                variant="outlined"
              >
                Clear
              </Button>
              <Button disabled={!searchText} onClick={() => setSearchQuery(searchText)}>
                Search
              </Button>
            </div>
            <div>{renderQuestionsAndAnswers()}</div>
          </div>
        </div>
        <Feedback />
      </Container>
    </>
  );
};

export {FaqFilterType, faqFilters};

export default Faq;
