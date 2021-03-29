import React, {FC, ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {Button, BreadcrumbMenu, EmptyPage, FlatNavLinks, PageTitle} from 'components';
import {OPENINGS_GOOGLE_FORM_LINK} from 'constants/urls';
import {getOpenings} from 'utils/data';
import {NavOption} from 'types/option';
import {OpeningCategory, OpeningsUrlParams} from 'types/openings';

import OpeningDetails from './OpeningDetails';
import OpeningsOpening from './OpeningsOpening';
import './Openings.scss';

const openings = getOpenings();

const OPENING_CATEGORY_FILTERS: NavOption[] = [
  {pathname: OpeningCategory.all, title: 'All'},
  {pathname: OpeningCategory.community, title: 'Community'},
  {pathname: OpeningCategory.design, title: 'Design'},
  {pathname: OpeningCategory.engineering, title: 'Engineering'},
  {pathname: OpeningCategory.marketing, title: 'Marketing'},
];

const Openings: FC = () => {
  const history = useHistory();
  const {category: categoryParam, openingId: openingIdParam} = useParams<OpeningsUrlParams>();
  const [categoryFilter, setCategoryFilter] = useState<OpeningCategory>(OpeningCategory.all);

  useEffect(() => {
    if (OPENING_CATEGORY_FILTERS.some((filter) => filter.pathname === categoryParam)) {
      setCategoryFilter(categoryParam);
    } else {
      history.replace('/openings/All');
    }
  }, [categoryParam, history]);

  const filteredOpenings = useMemo(
    () =>
      categoryFilter === OpeningCategory.all ? openings : openings.filter(({category}) => category === categoryFilter),
    [categoryFilter],
  );

  const opening = useMemo(
    () => openings.find(({category, openingId}) => category === categoryParam && openingId === openingIdParam) || null,
    [categoryParam, openingIdParam],
  );

  const handleNavOptionClick = useCallback(
    (option: OpeningCategory) => (): void => {
      history.push(`/openings/${option}`);
    },
    [history],
  );

  const renderCategoryFilter = (): ReactNode => {
    return (
      <FlatNavLinks
        handleOptionClick={handleNavOptionClick}
        options={OPENING_CATEGORY_FILTERS}
        selectedOption={categoryFilter}
      />
    );
  };

  const renderOpenings = (): ReactNode => {
    if (!filteredOpenings.length) return <EmptyPage />;
    return filteredOpenings.map(({category, description, openingId, position, project}) => (
      <OpeningsOpening
        category={category}
        description={description}
        key={openingId}
        openingId={openingId}
        position={position}
        project={project}
      />
    ));
  };

  const renderOpeningDetails = (): ReactNode => {
    if (!opening) return <EmptyPage />;
    return <OpeningDetails opening={opening} />;
  };

  return (
    <>
      <PageTitle title="Openings" />
      <div className="Openings">
        <BreadcrumbMenu
          className="Openings__BreadcrumbMenu"
          menuItems={renderCategoryFilter()}
          pageName={categoryFilter}
          sectionName="Open Positions"
        />
        <div className="Openings__left-menu">{renderCategoryFilter()}</div>
        {openingIdParam ? (
          <div className="Openings__opening-details">{renderOpeningDetails()}</div>
        ) : (
          <div className="Openings__opening-list">
            <div className="Openings__opening-list-heading-container">
              <h1 className="Openings__opening-list-heading">Openings</h1>
              <Button onClick={() => window.open(OPENINGS_GOOGLE_FORM_LINK)}>Apply</Button>
            </div>
            {renderOpenings()}
          </div>
        )}
      </div>
    </>
  );
};

export default Openings;
