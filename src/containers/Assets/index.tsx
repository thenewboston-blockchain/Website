import React, {FC, memo, ReactNode} from 'react';
import clsx from 'clsx';
import {Button, Icon, IconType} from 'components';

import TnbLogo from './TNBassets/TNB-Logo.png';
import TnbLogoAndWordmark from './TNBassets/TNB-LogoAndWordmark.png';

import './Assets.scss';

enum Image {
  'tnb_Logo' = 'TNB-Logo.Zip',
  'tnb_LogoAndWordmark' = 'TNB-Logo-and-Wordmark.Zip',
}
const tnbLogozip = 'https://github.com/thenewboston-developers/Marketing/raw/master/Logo.zip';
const tnbLogoAndWordmarkzip = 'https://github.com/thenewboston-developers/Marketing/raw/master/Logo-and-Wordmark.zip';

const getLogo = (image: Image): string => {
  if (image === Image.tnb_Logo) return TnbLogo;
  return TnbLogoAndWordmark;
};
const getDownloadLink = (image: Image): string => {
  if (image === Image.tnb_Logo) return tnbLogozip;
  return tnbLogoAndWordmarkzip;
};

const Assets: FC = () => {
  const renderCard = (image: Image): ReactNode => {
    return (
      <div className="Assets__card-wrapper">
        <div className="Assets__logo-container">
          <a href={getDownloadLink(image)} rel="noreferrer" download>
            <Button className="Assets__downloadButton">
              <Icon icon={IconType.downloadIcon} size={24} />
            </Button>
          </a>
        </div>
        <div className="Assets__card">
          <img alt={`tnb logo`} className={clsx('Assets__logo', `Assets__logo--tnb`)} src={getLogo(image)} />
        </div>
        <h2 className="Assets__subtext">{image}</h2>
      </div>
    );
  };

  return (
    <div className="Assets">
      <h1 className="Assets__heading">Download thenewboston assets</h1>
      <h2 className="Assets__subtext">All assets of thenewboston at one place for you to download.</h2>
      <div className="Assets__cards-container">
        {renderCard(Image.tnb_Logo)}
        {renderCard(Image.tnb_LogoAndWordmark)}
      </div>
    </div>
  );
};

export default memo(Assets);
