import React, {FC, memo, ReactNode} from 'react';
import clsx from 'clsx';
import {Button} from 'components';
import TnbLogo30px from './TNBassets/TNB-Logo-30px.png';
import TnbLogo96px from './TNBassets/TNB-Logo-96px.png';
import TnbLogo512px from './TNBassets/TNB-Logo-512px.png';
import TnbLogoAndWordmark30px from './TNBassets/TNB-LogoAndWordmark-30px.png';
import TnbLogoAndWordmark96px from './TNBassets/TNB-LogoAndWordmark-96px.png';
import TnbLogoAndWordmark512px from './TNBassets/TNB-LogoAndWordmark-512px.png';

import './Assets.scss';

enum Image {
  'tnb_Logo_30px' = 'TNB-Logo-30px.png',
  'tnb_Logo_96px' = 'TNB-Logo-96px.png',
  'tnb_Logo_512px' = 'TNB-Logo-512px.png',
  'tnb_LogoAndWordmark_30px' = 'TNB-LogoAndWordmark-30px.png',
  'tnb_LogoAndWordmark_96px' = 'TNB-LogoAndWordmark-96px.png',
  'tnb_LogoAndWordmark_512px' = 'TNB-LogoAndWordmark-512px.png',
}

const getLogo = (image: Image): string => {
  if (image === Image.tnb_Logo_30px) return TnbLogo30px;
  if (image === Image.tnb_Logo_96px) return TnbLogo96px;
  if (image === Image.tnb_Logo_512px) return TnbLogo512px;
  if (image === Image.tnb_LogoAndWordmark_30px) return TnbLogoAndWordmark30px;
  if (image === Image.tnb_LogoAndWordmark_96px) return TnbLogoAndWordmark96px;
  return TnbLogoAndWordmark512px;
};

const Assets: FC = () => {
  const renderCard = (image: Image): ReactNode => {
    return (
      <div className="Assets__card-wrapper">
        <div>{image}</div>
        <div className="Assets__card">
          <img alt={`tnb logo`} className={clsx('Assets__logo', `Assets__logo--tnb`)} src={getLogo(image)} />
        </div>
        <a href={image} rel="noreferrer" download>
          <Button className="Assets__DownloadButton">Download</Button>
        </a>
      </div>
    );
  };

  return (
    <div className="Assets">
      <h1 className="Assets__heading">Download Assets of thenewboston</h1>
      <h2 className="Assets__subtext">All assets of thenewboston at one place for you to download.</h2>
      <div className="Assets__cards-container">
        {renderCard(Image.tnb_Logo_30px)}
        {renderCard(Image.tnb_Logo_96px)}
        {renderCard(Image.tnb_Logo_512px)}
        {renderCard(Image.tnb_LogoAndWordmark_30px)}
        {renderCard(Image.tnb_LogoAndWordmark_96px)}
        {renderCard(Image.tnb_LogoAndWordmark_512px)}
      </div>
    </div>
  );
};

export default memo(Assets);
