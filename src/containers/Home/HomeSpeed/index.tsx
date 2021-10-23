import React, {FC} from 'react';

import {Button} from 'components';
import {URLS} from 'constants/routes';
import {useWindowDimensions} from 'hooks';

import GlobeImage from './Globe.png';
import * as S from './Styles';

const HomeSpeed: FC = () => {
  const {width} = useWindowDimensions();
  return (
    <S.Container>
      <S.Title>Build on the fastest growing blockchain network</S.Title>
      <S.SubTitle>
        Transaction speeds of less than a second and ultra low fees make it accessible for anyone around the world to
        send coins to each other.
      </S.SubTitle>
      <Button
        variant="outlined"
        onClick={() => window.open(URLS.developerPortal.whitepaper, '_blank', 'noreferrer noopener')}
      >
        Whitepaper
      </Button>
      <S.StatisticsContainer>
        <S.StatisticSection>
          <S.StatisticTitle>Speed</S.StatisticTitle>
          <S.StatisticNumber>3,238</S.StatisticNumber>
          <S.StatisticDescription>transactions per second</S.StatisticDescription>
        </S.StatisticSection>
        <S.StatisticDivider type={width > 992 ? 'vertical' : 'horizontal'} />
        <S.StatisticSection>
          <S.StatisticTitle>Latency</S.StatisticTitle>
          <S.StatisticNumber>0.015</S.StatisticNumber>
          <S.StatisticDescription>millisecond block time</S.StatisticDescription>
        </S.StatisticSection>
        <S.StatisticDivider type={width > 992 ? 'vertical' : 'horizontal'} />
        <S.StatisticSection>
          <S.StatisticTitle>Eco-friendly</S.StatisticTitle>
          <S.StatisticTransactionDescription>
            A fast and low carbon footprint blockchain.
          </S.StatisticTransactionDescription>
        </S.StatisticSection>
      </S.StatisticsContainer>
      <S.Image alt="TNB Globe" src={GlobeImage} />
    </S.Container>
  );
};

export default HomeSpeed;
