import React, {FC, memo, ReactNode} from 'react';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';

import {Asset} from 'types/assets';
import {A, Container, PageTitle} from 'components';
import {socialMediaUrls} from 'utils/social-media';
import TnbLogo from 'assets/images/TNB-Logo.png';
import TnbLogoAndWordmark from 'assets/images/TNB-LogoAndWordmark.png';
import TnbLogoAndWordmarkWhite from 'assets/images/TNB-LogoAndWordmarkWhite.png';

import './Assets.scss';

const MARKETING_ASSETS_ROOT_DIR = `${socialMediaUrls.github}/Marketing/raw/master/Assets`;

const assets: Asset[] = [
  {
    backgroundColor: 'light',
    downloadLink: `${MARKETING_ASSETS_ROOT_DIR}/Logo.zip`,
    imageUrl: TnbLogo,
    subtext: 'TNB-Logo.Zip',
  },
  {
    backgroundColor: 'light',
    downloadLink: `${MARKETING_ASSETS_ROOT_DIR}/Logo-and-Wordmark.zip`,
    imageUrl: TnbLogoAndWordmark,
    subtext: 'TNB-Logo-and-Wordmark.Zip',
  },
  {
    backgroundColor: 'dark',
    downloadLink: `${MARKETING_ASSETS_ROOT_DIR}/Logo-and-Wordmark-white.zip`,
    imageUrl: TnbLogoAndWordmarkWhite,
    subtext: 'TNB-Logo-and-Wordmark-white.Zip',
  },
];

const Assets: FC = () => {
  const renderCard = (asset: Asset): ReactNode => {
    return (
      <div
        key={asset.subtext}
        className={clsx('Assets__card-wrapper', {
          'Assets__card-wrapper--dark': asset.backgroundColor === 'dark',
        })}
      >
        <A className="Assets__download-button" href={asset.downloadLink} newWindow={false}>
          <Icon icon={IconType.download} totalSize={42} />
        </A>
        <div className="Assets__card">
          <img alt={`tnb logo`} className={clsx('Assets__logo')} src={asset.imageUrl} />
        </div>
        <h2 className="Assets__subtext">{asset.subtext}</h2>
      </div>
    );
  };

  return (
    <>
      <PageTitle title="Assets" />
      <Container className="Assets">
        <h1 className="Assets__heading">Download thenewboston assets</h1>
        <h2 className="Assets__subtext">All assets of thenewboston at one place for you to download.</h2>
        <div className="Assets__cards-container">{assets.map((asset: Asset) => renderCard(asset))}</div>
      </Container>
    </>
  );
};

export default memo(Assets);
