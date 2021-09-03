import React, {useEffect, useState} from 'react';
import clsx from 'clsx';

import {getAnalytics} from 'apis/analytics';
import {Loader} from 'components';
import {Analytics, AnalyticsCategory} from 'types/analytics';
import {SFC} from 'types/generic';
import {displayErrorToast} from 'utils/toast';

import AnalyticsGraph from '../AnalyticsGraph';
import './SelectedAnalytics.scss';

interface ComponentProps {
  selectedCategory: AnalyticsCategory | null;
}

const SelectedAnalytics: SFC<ComponentProps> = ({className, selectedCategory}) => {
  const [analytics, setAnalytics] = useState<Analytics[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (selectedCategory) {
      (async () => {
        setLoading(true);
        try {
          const analyticsResponse = await getAnalytics(selectedCategory.key);
          setAnalytics(analyticsResponse);
        } catch (error) {
          displayErrorToast('Network Error');
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className="SelectedAnalytics__loading-container">
        <Loader />
      </div>
    );
  }

  if (!analytics.length) {
    return <div className="SelectedAnalytics__no-results">There are no analytics to display for this category.</div>;
  }

  return (
    <div className={clsx('SelectedAnalytics', className)}>
      {analytics.map((analytic) => (
        <AnalyticsGraph data={analytic.data} key={analytic.pk} title={analytic.title} />
      ))}
    </div>
  );
};

export default SelectedAnalytics;
