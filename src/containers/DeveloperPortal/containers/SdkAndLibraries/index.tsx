import React, {ReactNode} from 'react';

import type {LibraryType} from 'types/libraries';

import DeveloperPortalLayout from './components/DeveloperPortalLayout';
import HeroImg from './assets/hero-img.svg';
import {LIBRARIES, SDKS} from './constants';

import './SdkAndLibraries.scss';

const SdkAndLibraries = () => {
  const renderTiles = (items: LibraryType[]): ReactNode => (
    <>
      {items.map((item) => (
        <div className="SdkAndLibraries__section-tile">
          <div className="SdkAndLibraries__section-tile-top">
            <div className="SdkAndLibraries__section-tile-top-pill">
              <img className="SdkAndLibraries__section-tile-top-pill-img" src="" alt="TNB Icon" />
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

  return (
    <DeveloperPortalLayout pageName="SDKs and Libraries">
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
        <div className="SdkAndLibraries__section-tiles">{renderTiles(LIBRARIES)}</div>
      </section>
      <section className="SdkAndLibraries__section">
        <h3 className="SdkAndLibraries__section-title">SDKs</h3>
        <div className="SdkAndLibraries__section-tiles">{renderTiles(SDKS)}</div>
      </section>
    </DeveloperPortalLayout>
  );
};

export default SdkAndLibraries;
