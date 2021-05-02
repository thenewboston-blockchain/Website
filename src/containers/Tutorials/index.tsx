import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router';

import {getCategories} from 'apis/tutorials';
import {BreadcrumbMenu, FlatNavLinks, Loader, PageTitle} from 'components';
import {allTutorialsFilter} from 'constants/tutorials';
import {NavOption} from 'types/option';
import {Category, TutorialsUrlParams} from 'types/tutorials';

import Playlists from './Playlists';
import WatchPlaylist from './WatchPlaylist';
import './Tutorials.scss';

const Tutorials: FC = () => {
  const history = useHistory();
  const {category: categoryParam, playlistId: playlistIdParam} = useParams<TutorialsUrlParams>();

  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [categories, setCategories] = useState<NavOption[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const fetchedCategories = await getCategories();
        const updatedCategories = fetchedCategories.map((category: Category) => ({
          pathname: category.name,
          title: category.name,
        }));
        updatedCategories.unshift(allTutorialsFilter);
        setCategories(updatedCategories);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      if (categories.some((category: NavOption) => category.pathname === categoryParam)) {
        setCategoryFilter(categoryParam);
      } else {
        history.replace(`/tutorials/${allTutorialsFilter.pathname}`);
      }
    }
  }, [categories, loading, categoryParam, history]);

  const handleNavOptionClick = useCallback(
    (option: string) => (): void => {
      history.push(`/tutorials/${option}`);
    },
    [history],
  );

  const renderCategoryFilter = (): ReactNode => {
    return (
      <FlatNavLinks
        handleOptionClick={handleNavOptionClick}
        options={categories}
        selectedOption={categoryFilter ?? allTutorialsFilter.title}
      />
    );
  };

  if (loading)
    return (
      <div className="Tutorials__loader">
        <Loader />
      </div>
    );
  if (errorMessage) return <div className="Tutorials__error">{errorMessage}</div>;
  return (
    <>
      <PageTitle title="Tutorials" />
      <div className="Tutorials">
        <BreadcrumbMenu
          className="Tutorials__BreadcrumbMenu"
          menuItems={renderCategoryFilter()}
          pageName={categoryFilter ?? allTutorialsFilter.title}
          sectionName="Tutorials"
        />
        <aside className="Tutorials__left-menu">{renderCategoryFilter()}</aside>
        <div className="Tutorials__right-content">
          {playlistIdParam ? <WatchPlaylist playlistId={playlistIdParam} /> : <Playlists category={categoryFilter} />}
        </div>
      </div>
    </>
  );
};

export default Tutorials;
