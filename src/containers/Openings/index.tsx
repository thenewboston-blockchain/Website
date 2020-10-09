import React, {FC, ReactNode, useMemo, useState} from 'react';
import {useParams} from 'react-router-dom';

import {BreadcrumbMenu, EmptyPage} from 'components';
import {OpeningCategory, OpeningsUrlParams} from 'types/openings';
import {getOpenings} from 'utils/data';

import OpeningDetails from './OpeningDetails';
import OpeningsCategoryFilter from './OpeningsCategoryFilter';
import OpeningsOpening from './OpeningsOpening';
import './Openings.scss';

const openings = getOpenings();

// TODO

const Openings: FC = () => {
  const {openingId: openingIdParam} = useParams<OpeningsUrlParams>();
  const [categoryFilter, setCategoryFilter] = useState<OpeningCategory>(OpeningCategory.all);

  const filteredOpenings = useMemo(
    () =>
      categoryFilter === OpeningCategory.all ? openings : openings.filter(({category}) => category === categoryFilter),
    [categoryFilter],
  );

  const opening = useMemo(() => openings.find(({openingId}) => openingId === openingIdParam) || null, [openingIdParam]);

  const renderCategoryFilter = (): ReactNode => {
    return <OpeningsCategoryFilter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />;
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
        <div className="Openings__opening-details">{renderOpeningDetails()}</div>
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
