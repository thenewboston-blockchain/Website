import React from 'react';
import {useHistory} from 'react-router';

import {ROUTES, URLS} from 'constants/routes';

import WalletImage from 'assets/images/wallet.png';

import * as S from './Styles';

const DownloadWallet = () => {
  const history = useHistory();

  return (
    <S.Container>
      <S.Image alt="Wallet" src={WalletImage} />
      <S.Content>
        <S.Heading>Get TNB Coins</S.Heading>
        <S.Paragraph>Download our desktop wallet to send and receive coins.</S.Paragraph>
        <S.A href={URLS.tnbFaucet}>Get 50 free coins from the Faucet.</S.A>
        <S.Button variant="outlined" onClick={() => history.push(ROUTES.download)}>
          Download Wallet
        </S.Button>
      </S.Content>
      <S.MobileImage alt="Wallet" src={WalletImage} />
    </S.Container>
  );
};

export default DownloadWallet;
