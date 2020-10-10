import React, {FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';

import {BreadcrumbMenu, EmptyPage, FlatNavLinks} from 'components';
import {OpeningCategory, OpeningsUrlParams} from 'types/openings';
import {getOpenings} from 'utils/data';

import OpeningDetails from './OpeningDetails';
import OpeningsOpening from './OpeningsOpening';
import './Openings.scss';

const openings = getOpenings();

const OPENING_CATEGORY_FILTERS = [
  OpeningCategory.all,
  OpeningCategory.accounting,
  OpeningCategory.community,
  OpeningCategory.design,
  OpeningCategory.engineering,
  OpeningCategory.marketing,
];

const Openings: FC = () => {
  const {openingId: openingIdParam} = useParams<OpeningsUrlParams>();
  const [categoryFilter, setCategoryFilter] = useState<OpeningCategory>(OpeningCategory.all);
  const openingDetailsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openingDetailsContainer.current) return;
    try {
      openingDetailsContainer.current.scrollTo({behavior: 'smooth', top: 0});
    } catch (error) {
      openingDetailsContainer.current.scrollTo(0, 0);
    }
  }, [openingIdParam]);

  const filteredOpenings = useMemo(
    () =>
      categoryFilter === OpeningCategory.all ? openings : openings.filter(({category}) => category === categoryFilter),
    [categoryFilter],
  );

  const opening = useMemo(() => openings.find(({openingId}) => openingId === openingIdParam) || null, [openingIdParam]);

  const handleNavOptionClick = useCallback(
    (option: OpeningCategory) => (): void => {
      setCategoryFilter(option);
    },
    [setCategoryFilter],
  );

  const renderCategoryFilter = (): ReactNode => {
    return (
      <FlatNavLinks<OpeningCategory>
        handleOptionClick={handleNavOptionClick}
        options={OPENING_CATEGORY_FILTERS}
        selectedOption={categoryFilter}
      />
    );
  };

  const renderOpenings = (): ReactNode => {
    if (!filteredOpenings.length) return <EmptyPage />;
    return filteredOpenings.map(({description, openingId, position}) => (
      <OpeningsOpening description={description} key={position} openingId={openingId} position={position} />
    ));
  };

  const renderOpeningDetails = (): ReactNode => {
    if (!opening) return <EmptyPage />;
    return <OpeningDetails opening={opening} />;
  };

  return (
    <div className="Openings">
      <BreadcrumbMenu
        className="Openings__BreadcrumbMenu"
        menuItems={renderCategoryFilter()}
        pageName={categoryFilter}
        sectionName="Open Positions"
      />
      <div className="Openings__left-menu">{renderCategoryFilter()}</div>
      {openingIdParam ? (
        <div className="Openings__opening-details" ref={openingDetailsContainer}>
          {renderOpeningDetails()}
        </div>
      ) : (
        <div className="Openings__opening-list">
          <h1 className="Openings__opening-list-heading">Openings</h1>
          {renderOpenings()}
        </div>
      )}
    </div>
  );
};

export default Openings;
