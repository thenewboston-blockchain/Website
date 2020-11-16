import React, {FC, ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {BreadcrumbMenu, EmptyPage, FlatNavLinks, PageTitle} from 'components';
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

interface ComponentProps {
  openingsFrozen: boolean;
}

const Openings: FC<ComponentProps> = ({openingsFrozen}) => {
  const history = useHistory();
  const {category: categoryParam, openingId: openingIdParam} = useParams<OpeningsUrlParams>();
  const [categoryFilter, setCategoryFilter] = useState<OpeningCategory>(OpeningCategory.all);

  useEffect(() => {
    setCategoryFilter(categoryParam);
  }, [categoryParam]);

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
    return filteredOpenings.map(({category, description, openingId, position}) => (
      <OpeningsOpening
        category={category}
        description={description}
        key={position}
        openingId={openingId}
        position={position}
      />
    ));
  };

  const renderOpeningDetails = (): ReactNode => {
    if (!opening) return <EmptyPage />;
    return <OpeningDetails opening={opening} />;
  };

  return openingsFrozen ? (
    <>
      <PageTitle title="Openings" />
      <div className="hiring-freeze">
        <h1>Openings</h1>
        <br />
        <h3>
          We are on a <span>hiring freeze</span> until further notice
        </h3>
      </div>
    </>
  ) : (
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
            <h1 className="Openings__opening-list-heading">Openings</h1>
            {renderOpenings()}
          </div>
        )}
      </div>
    </>
  );
};

export default Openings;
