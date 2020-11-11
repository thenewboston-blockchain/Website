import React, {FC, memo, ReactNode} from 'react';
import clsx from 'clsx';

import {Asset} from 'types/assets';
import {Button, Icon, IconType} from 'components';
import {socialMediaUrls} from 'utils/social-media';
import TnbLogo from 'assets/images/TNB-Logo.png';
import TnbLogoAndWordmark from 'assets/images/TNB-LogoAndWordmark.png';

import './Assets.scss';

const assets: Asset[] = [
  {
    downloadLink: `${socialMediaUrls.github}/Marketing/raw/master/Logo.zip`,
    imageUrl: TnbLogo,
    subtext: 'TNB-Logo.Zip',
  },
  {
    downloadLink: `${socialMediaUrls.github}/Marketing/raw/master/Logo-and-Wordmark.zip`,
    imageUrl: TnbLogoAndWordmark,
    subtext: 'TNB-Logo-and-Wordmark.Zip',
  },
];

const Assets: FC = () => {
  const renderCard = (asset: Asset): ReactNode => {
    return (
      <div key={asset.subtext} className="Assets__card-wrapper">
        <div className="Assets__logo-container">
          <a href={asset.downloadLink} rel="noreferrer" download>
            <Button className="Assets__downloadButton">
              <Icon icon={IconType.downloadIcon} size={24} />
            </Button>
          </a>
        </div>
        <div className="Assets__card">
          <img alt={`tnb logo`} className={clsx('Assets__logo', `Assets__logo--tnb`)} src={asset.imageUrl} />
        </div>
        <h2 className="Assets__subtext">{asset.subtext}</h2>
      </div>
    );
  };

  return (
    <div className="Assets">
      <h1 className="Assets__heading">Download thenewboston assets</h1>
      <h2 className="Assets__subtext">All assets of thenewboston at one place for you to download.</h2>
      <div className="Assets__cards-container">{assets.map((asset: Asset) => renderCard(asset))};</div>
    </div>
  );
};

export default memo(Assets);
