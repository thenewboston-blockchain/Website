import React, {FC, useState} from 'react';

import {EmojiType} from 'components';
import {URLS} from 'constants/routes';
import {useWindowDimensions} from 'hooks';
import colors from 'styles/colors';
import {EMOJI_POSITION_CONFIG, EMOJI_SIZE_CONFIG} from './config';
import DiscordLogo from '../../../../../assets/svgs/DiscordLogo';
import * as S from './Styles';

const AppsHero: FC = () => {
  const {width} = useWindowDimensions();
  const [isDiscordButtonHovered, setIsDiscordButtonHovered] = useState(false);
  let sizeConfig = EMOJI_SIZE_CONFIG.Infinity;
  let positionConfig = EMOJI_POSITION_CONFIG.Infinity;

  /* eslint-disable prefer-destructuring */
  if (width < 414) {
    sizeConfig = EMOJI_SIZE_CONFIG[414];
    positionConfig = EMOJI_POSITION_CONFIG[414];
  } else if (width < 768) {
    sizeConfig = EMOJI_SIZE_CONFIG[768];
    positionConfig = EMOJI_POSITION_CONFIG[768];
  } else if (width < 992) {
    sizeConfig = EMOJI_SIZE_CONFIG[992];
    positionConfig = EMOJI_POSITION_CONFIG[992];
  } else if (width < 1366) {
    sizeConfig = EMOJI_SIZE_CONFIG[1366];
    positionConfig = EMOJI_POSITION_CONFIG[1366];
  } else {
    sizeConfig = EMOJI_SIZE_CONFIG.Infinity;
    positionConfig = EMOJI_POSITION_CONFIG.Infinity;
  }

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <S.Background>
      <S.Container>
        <S.Title>Explore our apps</S.Title>
        <S.SubTitle>
          Explore games and a variety of apps built by our community to earn or spend TNBC, the official cryptocurrency
          of thenewboston.
        </S.SubTitle>
        <S.DiscordButton
          onClick={() => window.open(URLS.discord, '_blank', 'noreferrer noopener')}
          onMouseEnter={() => setIsDiscordButtonHovered(true)}
          onMouseLeave={() => setIsDiscordButtonHovered(false)}
        >
          <DiscordLogo
            color={isDiscordButtonHovered ? colors.discordHover : colors.discord}
            style={{marginRight: '8px'}}
          />
          Discord
        </S.DiscordButton>
      </S.Container>

      {/* Left Emoji Icons */}
      <S.EmojiIcon color="#4f52ff" emoji={EmojiType.Robot} {...positionConfig.leftTop} {...sizeConfig.small} />
      <S.EmojiIcon color="#2da152" emoji={EmojiType.Dice} {...positionConfig.leftMiddle} {...sizeConfig.small} />
      <S.EmojiIcon color="#0085ff" emoji={EmojiType.Console} {...positionConfig.leftBottom} {...sizeConfig.large} />

      {/* Right Emoji Icons */}
      <S.EmojiIcon color="#f9c200" emoji={EmojiType.CrossedSwords} {...positionConfig.rightTop} {...sizeConfig.small} />
      <S.EmojiIcon color="#ff9282" emoji={EmojiType.Alien} {...positionConfig.rightMiddle} {...sizeConfig.large} />
      <S.EmojiIcon color="#4f52ff" emoji={EmojiType.Unicorn} {...positionConfig.rightBottom} {...sizeConfig.large} />
    </S.Background>
  );
};

export default AppsHero;
