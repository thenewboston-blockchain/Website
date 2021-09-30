import React from 'react';

import {SFC} from 'types/generic';
import * as S from './Styles';

export enum EmojiType {
  Dice = '🎲',
  Robot = '🤖',
  Console = '🎮',
  CrossedSwords = '⚔️',
  Unicorn = '🦄',
  Alien = '👾',
  GoldCup = '🏆',
  Earth = '🌎',
  RockHandSign = '🤘',
}

type Props = {
  color: string;
  emoji: EmojiType;
  emojiSize?: number;
  size?: number;
  marginBottom?: number;
};

const EmojiIcon: SFC<Props> = ({color, emoji, emojiSize = 40, marginBottom = 0, size = 72}) => {
  return (
    <S.Container color={color} emojiSize={emojiSize} marginBottom={marginBottom} size={size}>
      {emoji}
    </S.Container>
  );
};

export default EmojiIcon;
