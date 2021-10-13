import React, {FC, ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {getOpenings as getOpeningsApi} from 'apis/openings';
import {BreadcrumbMenu, Container, EmptyPage, FlatNavLinks, Loader, PageTitle} from 'components';
import {ApiProgress} from 'constants/api-progress';
import {ROUTES} from 'constants/routes';
import {NavOption} from 'types/option';
import {OpeningCategory, OpeningsUrlParams, Opening} from 'types/openings';

import OpeningDetails from './OpeningDetails';
import OpeningsOpening from './OpeningsOpening';
import './Openings.scss';

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
  const [openings, setOpenings] = useState<Opening[]>([]);
  const [progress, setProgress] = useState<ApiProgress>(ApiProgress.Init);

  useEffect(() => {
    (async function getOpenings() {
      try {
        setProgress(ApiProgress.Requesting);
        const openingsResponse = await getOpeningsApi();
        setOpenings(openingsResponse.filter((response) => response.active));
        setProgress(ApiProgress.Success);
      } catch (err) {
        setProgress(ApiProgress.Error);
      }
    })();
  }, []);

  useEffect(() => {
    if (OPENING_CATEGORY_FILTERS.some((filter) => filter.pathname === categoryParam)) {
      setCategoryFilter(categoryParam);
    } else {
      history.replace(`${ROUTES.openings}/All`);
    }
  }, [categoryParam, history]);

  const filteredOpenings = useMemo(
    () =>
      categoryFilter === OpeningCategory.all ? openings : openings.filter(({category}) => category === categoryFilter),
    [categoryFilter, openings],
  );

  const opening = useMemo(
    () => openings.find(({category, pk}) => category === categoryParam && pk === openingIdParam) || null,
    [categoryParam, openingIdParam, openings],
  );

  const handleNavOptionClick = useCallback(
    (option: OpeningCategory) => (): void => {
      history.push(`${ROUTES.openings}/${option}`);
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
    return filteredOpenings.map(({category, description, pk, title}) => (
      <OpeningsOpening category={category} description={description} key={pk} openingId={pk} position={title} />
    ));
  };

  const renderOpeningDetails = (): ReactNode => {
    if (!opening) return <EmptyPage />;
    return <OpeningDetails opening={opening} />;
  };

  return (
    <>
      <PageTitle ogDescription={`${categoryParam} Openings`} title={`${categoryParam} Openings`} />
      <Container className="Openings">
        <BreadcrumbMenu
          className="Openings__BreadcrumbMenu"
          menuItems={renderCategoryFilter()}
          pageName={categoryFilter}
          sectionName="Open Positions"
        />
        <div className="Openings__left-menu">{renderCategoryFilter()}</div>
        {/* eslint-disable-next-line no-nested-ternary */}
        {progress === ApiProgress.Requesting ? (
          <Loader className="Openings__loader" />
        ) : openingIdParam ? (
          <div className="Openings__opening-details">{renderOpeningDetails()}</div>
        ) : (
          <div className="Openings__opening-list">
            <div className="Openings__opening-list-heading-container">
              <h1 className="Openings__opening-list-heading">Openings</h1>
            </div>
            {renderOpenings()}
          </div>
        )}
      </Container>
    </>
  );
};

export default Openings;
