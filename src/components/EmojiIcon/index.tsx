import React from 'react';

import {SFC} from 'types/generic';
import {AlienEmoji, ConsoleEmoji, DiceEmoji, CrossedSwordEmoji, RobotEmoji, UnicornEmoji} from './components';
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

const getEmojiIcon = (emojiType: EmojiType, emojiSize: number) => {
  const style = {height: `${emojiSize}px`, width: `${emojiSize}px`};
  switch (emojiType) {
    case EmojiType.Alien:
      return <AlienEmoji style={style} />;
    case EmojiType.Console:
      return <ConsoleEmoji style={style} />;
    case EmojiType.CrossedSwords:
      return <CrossedSwordEmoji style={style} />;
    case EmojiType.Dice:
      return <DiceEmoji style={style} />;
    case EmojiType.Robot:
      return <RobotEmoji style={style} />;
    case EmojiType.Unicorn:
      return <UnicornEmoji style={style} />;
    default:
      return <AlienEmoji style={style} />;
  }
};

const EmojiIcon: SFC<Props> = ({className, color, emoji, emojiSize = 40, marginBottom = 0, size = 72}) => {
  return (
    <S.Container className={className} color={color} emojiSize={emojiSize} marginBottom={marginBottom} size={size}>
      {getEmojiIcon(emoji, emojiSize)}
    </S.Container>
  );
};

export default EmojiIcon;
