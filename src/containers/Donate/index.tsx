import React, {FC, memo, ReactNode} from 'react';
import clsx from 'clsx';
import {Container, PageTitle} from 'components';

import BitcoinLogo from 'assets/svgs/bitcoin.svg';
import EthereumLogo from 'assets/svgs/ethereum.svg';
import TnbLogo from 'assets/svgs/thenewboston-primary.svg';
import BitcoinQr from './QrCodes/bitcoin-qr.png';
import EthereumQr from './QrCodes/ethereum-qr.png';
import TnbQr from './QrCodes/tnb-qr.png';
import './Donate.scss';

enum Crypto {
  'bitcoin' = 'bitcoin',
  'ethereum' = 'ethereum',
  'tnb' = 'tnb',
}

const getLogo = (crypto: Crypto): string => {
  if (crypto === Crypto.bitcoin) return BitcoinLogo;
  if (crypto === Crypto.ethereum) return EthereumLogo;
  return TnbLogo;
};

const getQrCode = (crypto: Crypto): string => {
  if (crypto === Crypto.bitcoin) return '3GZYi3w3BXQfyb868K2phHjrS4i8LooaHh';
  if (crypto === Crypto.ethereum) return '0x0E38e2a838F0B20872E5Ff55c82c2EE7509e6d4A';
  return 'b6e21072b6ba2eae6f78bc3ade17f6a561fa4582d5494a5120617f2027d38797';
};

const getQrImage = (crypto: Crypto): string => {
  if (crypto === Crypto.bitcoin) return BitcoinQr;
  if (crypto === Crypto.ethereum) return EthereumQr;
  return TnbQr;
};

const Social: FC = () => {
  const renderCard = (crypto: Crypto): ReactNode => {
    return (
      <div className="Donate__card">
        <div className="Donate__logo-container">
          <img
            alt={`${crypto} logo`}
            className={clsx('Donate__logo', `Donate__logo--${crypto}`)}
            src={getLogo(crypto)}
          />
        </div>
        <span className="Donate__qr-code">{getQrCode(crypto)}</span>
        <img alt={`${crypto} qr`} className="Donate__qr-image" src={getQrImage(crypto)} />
      </div>
    );
  };

  return (
    <>
      <PageTitle title="Donate" />
      <Container className="Donate">
        <h1 className="Donate__heading">Donate to thenewboston</h1>
        <h2 className="Donate__subtext">
          All donations will go to thenewboston to help fund the team to continue to develop the community and create
          content.
        </h2>
        <div className="Donate__cards-container">
          {renderCard(Crypto.tnb)}
          {renderCard(Crypto.bitcoin)}
          {renderCard(Crypto.ethereum)}
        </div>
      </Container>
    </>
  );
};

export default memo(Social);
