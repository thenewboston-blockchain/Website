import React, {FC, ReactNode, useCallback} from 'react';
import {Redirect, useHistory, useParams} from 'react-router-dom';

import {BreadcrumbMenu, Container, FlatNavLinks, PageTitle} from 'components';
import {AnalyticsType, AnalyticsUrlParams, orderedAnalyticsType} from 'types/analytics';
import './Analytics.scss';
import AnalyticsIcon from './AnalyticsIcon';

const getAnalyticTypeLabel = (type: AnalyticsType): string => {
  switch (type) {
    case AnalyticsType.community:
      return 'Community';
    case AnalyticsType.economy:
      return 'Economy';
    case AnalyticsType.facebook:
      return 'Facebook';
    case AnalyticsType.instagram:
      return 'Instagram';
    case AnalyticsType.linkedin:
      return 'Linkedin';
    case AnalyticsType.network:
      return 'Network';
    case AnalyticsType.twitter:
      return 'Twitter';
    case AnalyticsType.website:
      return 'Website';
    default:
      return 'Other Social';
  }
};

const analyticsNavOptions = orderedAnalyticsType.map((type) => ({
  pathname: type,
  title: getAnalyticTypeLabel(type),
}));

const Analytics: FC = () => {
  const history = useHistory();
  const {type} = useParams<AnalyticsUrlParams>();

  const handleNavOptionClick = useCallback(
    (option: string) => (): void => {
      history.push(`/analytics/${option}`);
    },
    [history],
  );

  if (!type) {
    return <Redirect to={`/analytics/${AnalyticsType.community}`} />;
  }
  const analyticsTypeLabel = getAnalyticTypeLabel(type);

  const renderNavLinks = (): ReactNode => {
    return (
      <FlatNavLinks handleOptionClick={handleNavOptionClick} options={analyticsNavOptions} selectedOption={type} />
    );
  };

  return (
    <div className="Analytics__wrapper">
      <PageTitle ogDescription={`${analyticsTypeLabel} Analytics`} title={`${analyticsTypeLabel} Analytics`} />
      <Container className="Analytics">
        <BreadcrumbMenu
          className="Analytics__BreadcrumbMenu"
          hideSectionName
          menuItems={renderNavLinks()}
          pageName={analyticsTypeLabel}
          sectionName="Analytics"
        />
        <div className="Analytics__icon-container">
          <AnalyticsIcon />
          <span className="Analytics__icon-text">Analytics Dashboard</span>
        </div>
        <aside className="Analytics__left-menu">{renderNavLinks()}</aside>
        <div className="Analytics__title-container">
          <h1 className="Analytics__title">{analyticsTypeLabel} Analytics</h1>
          <span className="Analytics__weekly">WEEKLY</span>
        </div>
      </Container>
    </div>
  );
};

export default Analytics;
