import React, {FC, ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {getAnalyticsCategories} from 'apis/analytics';
import {Container, FlatNavLinks, PageTitle, Loader} from 'components';
import {useWindowDimensions} from 'hooks';
import {AnalyticsCategory, AnalyticsUrlParams} from 'types/analytics';

import AnalyticsIcon from './AnalyticsIcon';
import AnalyticsGraph from './AnalyticsGraph';
import AnalyticsMobileDropdown from './AnalyticsMobileDropdown';
import './Analytics.scss';

const Analytics: FC = () => {
  const history = useHistory();
  const {type} = useParams<AnalyticsUrlParams>();
  const [categories, setCategories] = useState<AnalyticsCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<AnalyticsCategory | null>(null);
  const {clientWidth} = useWindowDimensions();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const analyticsCategoriesResponse = await getAnalyticsCategories();
      if (analyticsCategoriesResponse.length) {
        setCategories(analyticsCategoriesResponse);
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (type && categories.length) {
      const categoryType = categories.find((category) => category.key === type);

      if (!categoryType) {
        history.replace(`/analytics/${categories[0].key}`);
      } else {
        setSelectedCategory(categoryType);
      }
    }

    if (!type && categories.length) {
      history.replace(`/analytics/${categories[0].key}`);
    }
  }, [categories, history, type]);

  const analyticsNavOptions = useMemo(() => {
    return categories.map((category) => ({pathname: category.key, title: category.title}));
  }, [categories]);

  const title = useMemo(() => {
    if (selectedCategory) {
      return `${selectedCategory.title} Analytics`;
    }

    return 'Analytics';
  }, [selectedCategory]);

  const handleNavOptionClick = useCallback(
    (option: string) => (): void => {
      history.push(`/analytics/${option}`);
    },
    [history],
  );

  const renderNavLinks = useCallback((): ReactNode => {
    if (!type) return null;
    return (
      <FlatNavLinks handleOptionClick={handleNavOptionClick} options={analyticsNavOptions} selectedOption={type} />
    );
  }, [analyticsNavOptions, handleNavOptionClick, type]);

  return (
    <div className="Analytics__wrapper">
      <PageTitle ogDescription={title} title={title} />
      {loading ? (
        <div className="Analytics__loading-container">
          <Loader />
        </div>
      ) : (
        <Container className="Analytics">
          <div className="Analytics__icon-container">
            <AnalyticsIcon />
            <span className="Analytics__icon-text">Analytics Dashboard</span>
          </div>
          {clientWidth <= 992 && (
            <AnalyticsMobileDropdown navLinks={renderNavLinks()} selectedCategory={selectedCategory} />
          )}
          <aside className="Analytics__left-menu">{renderNavLinks()}</aside>
          <div className="Analytics__title-container">
            <h1 className="Analytics__title">{title}</h1>
            <span className="Analytics__weekly">WEEKLY</span>
          </div>
          <div className="Analytics__main-container">
            <AnalyticsGraph title="Total Coins Distributed" />
            <AnalyticsGraph title="Total Coins Distributed to Core" />
            <AnalyticsGraph title="Total Coins Distributed to Faucet" />
            <AnalyticsGraph title="Total Coins Distributed to Projects" />
          </div>
        </Container>
      )}
    </div>
  );
};

export default Analytics;
