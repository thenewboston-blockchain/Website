import React, {ReactNode, useState} from 'react';

import type {Language, LibraryType} from 'types/libraries';

import DeveloperPortalLayout from './components/DeveloperPortalLayout';
import ConfirmationModal from './components/ConfirmationModal';
import HeroImg from './assets/hero-img.svg';
import TNBLogoImg from './assets/tnb-logo.svg';
import {LIBRARIES, SDKS} from './constants';

import './SdkAndLibraries.scss';

const SdkAndLibraries = () => {
  const [goToUrl, setGoToUrl] = useState<string | null>(null);

  const renderTiles = (items: LibraryType[], selectedLanguages: Language[], section: string): ReactNode => {
    const filteredItems = selectedLanguages.length
      ? items.filter((item) => selectedLanguages.includes(item.language))
      : items;

    if (!filteredItems.length) {
      return <div className="SdkAndLibraries__section-tiles-empty">No {section} found for selected language(s).</div>;
    }

    return (
      <>
        {filteredItems.map((item) => (
          <div
            key={item.title}
            className="SdkAndLibraries__section-tile"
            role="button"
            tabIndex={0}
            onClick={() => setGoToUrl(item.url)}
          >
            <div className="SdkAndLibraries__section-tile-top">
              <div className="SdkAndLibraries__section-tile-top-pill">
                <img className="SdkAndLibraries__section-tile-top-pill-img" src={TNBLogoImg} alt="TNB Icon" />
                <h2 className="SdkAndLibraries__section-tile-top-pill-text">{item.language}</h2>
              </div>
            </div>
            <div className="SdkAndLibraries__section-tile-bottom">
              <h3 className="SdkAndLibraries__section-tile-bottom-title">{item.title}</h3>
              <p className="SdkAndLibraries__section-tile-bottom-description">{item.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <DeveloperPortalLayout pageName="SDKs and Libraries">
      {(selectedLanguages) => (
        <>
          <div className="SdkAndLibraries__hero">
            <div className="SdkAndLibraries__hero-left">
              <small className="SdkAndLibraries__hero-left-tnb">thenewboston</small>
              <h1 className="SdkAndLibraries__hero-left-title">SDKs and Libraries</h1>
            </div>
            <div className="SdkAndLibraries__hero-right">
              <img className="SdkAndLibraries__hero-right-img" src={HeroImg} alt="Laptop" />
            </div>
          </div>
          <section className="SdkAndLibraries__section">
            <h3 className="SdkAndLibraries__section-title">Libraries</h3>
            <div className="SdkAndLibraries__section-tiles">
              {renderTiles(LIBRARIES, selectedLanguages, 'Libraries')}
            </div>
          </section>
          <section className="SdkAndLibraries__section">
            <h3 className="SdkAndLibraries__section-title">SDKs</h3>
            <div className="SdkAndLibraries__section-tiles">{renderTiles(SDKS, selectedLanguages, 'SDKs')}</div>
          </section>
          <ConfirmationModal url={goToUrl} onClose={() => setGoToUrl(null)} />
        </>
      )}
    </DeveloperPortalLayout>
  );
};

export default SdkAndLibraries;
