import React, {ReactNode} from 'react';

import type {LibraryType} from 'types/libraries';

import DeveloperPortalLayout from './components/DeveloperPortalLayout';
import HeroImg from './assets/hero-img.svg';
import {LIBRARIES, SDKS} from './constants';

import './SdksAndLibraries.scss';

const SdksAndLibraries = () => {
  const renderTiles = (items: LibraryType[]): ReactNode => (
    <>
      {items.map((item) => (
        <div className="SdksAndLibraries__section-tile">
          <div className="SdksAndLibraries__section-tile-top">
            <div className="SdksAndLibraries__section-tile-top-pill">
              <img className="SdksAndLibraries__section-tile-top-pill-img" src="" alt="TNB Icon" />
              <h2 className="SdksAndLibraries__section-tile-top-pill-text">{item.language}</h2>
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
      <div className="SdksAndLibraries__hero">
        <div className="SdksAndLibraries__hero-left">
          <small className="SdksAndLibraries__hero-left-tnb">thenewboston</small>
          <h1 className="SdksAndLibraries__hero-left-title">SDKs and Libraries</h1>
        </div>
        <div className="SdksAndLibraries__hero-right">
          <img className="SdksAndLibraries__hero-right-img" src={HeroImg} alt="Laptop" />
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

export default SdksAndLibraries;
