import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router';

import {getCategories} from 'apis/tutorials';
import {FlatNavLinks, Loader, PageTitle} from 'components';
import {NavOption} from 'types/option';
import {Category, TutorialsUrlParams} from 'types/tutorials';

import './Tutorials.scss';

const Tutorials: FC = () => {
  const history = useHistory();
  const {category: categoryParam} = useParams<TutorialsUrlParams>();

  const [categoriesLoading, setCategoriesLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [categories, setCategories] = useState<NavOption[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const {data} = await getCategories();
        const {results: fetchedCategories} = data;
        const updatedCategories = fetchedCategories.map((category: Category) => ({
          pathname: category.name,
          title: category.name,
        }));
        updatedCategories.unshift({pathname: 'All', title: 'All'});
        setCategories(updatedCategories);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setCategoriesLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!categoriesLoading) {
      if (categories.some((category: NavOption) => category.pathname === categoryParam)) {
        setCategoryFilter(categoryParam);
      } else {
        history.replace('/tutorials/All');
      }
    }
  }, [categories, categoriesLoading, categoryParam, history]);

  const handleNavOptionClick = useCallback(
    (option: string) => (): void => {
      history.push(`/tutorials/${option}`);
    },
    [history],
  );

  const renderCategoryFilter = (): ReactNode => {
    return (
      <FlatNavLinks handleOptionClick={handleNavOptionClick} options={categories} selectedOption={categoryFilter} />
    );
  };

  const renderPlaylists = () => {
    return 'Playlists';
  };

  if (categoriesLoading) return <Loader />;
  return (
    <>
      <PageTitle title="Tutorials" />
      <div className="Tutorials">
        <div className="Tutorials__left-menu">{renderCategoryFilter()}</div>
        <div className="Tutorials__playlists-list">{renderPlaylists()}</div>
      </div>
    </>
  );
};

export default Tutorials;
