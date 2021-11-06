import React from 'react';

import {SFC} from 'types/generic';
import {
  AlienEmoji,
  ConsoleEmoji,
  CrossedSwordEmoji,
  DiceEmoji,
  DiscordEmoji,
  LoudSpeakerEmoji,
  MailEmoji,
  NewspaperEmoji,
  RobotEmoji,
  ThoughtBalloonEmoji,
  UnicornEmoji,
} from './components';
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
  ThoughtBalloon = '💭',
  Newspaper = '📰',
  Mail = '✉️',
  Discord = 'Discord',
  LoudSpeaker = '📢',
}

type Props = {
  color: string;
  emoji: EmojiType;
  emojiSize?: number;
  size?: number;
  transparentBackground?: boolean;
  marginBottom?: number;
  marginRight?: number;
  zoomOnHover?: boolean;
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
    case EmojiType.Discord:
      return <DiscordEmoji style={style} />;
    case EmojiType.LoudSpeaker:
      return <LoudSpeakerEmoji style={style} />;
    case EmojiType.Mail:
      return <MailEmoji style={style} />;
    case EmojiType.Newspaper:
      return <NewspaperEmoji style={style} />;
    case EmojiType.Robot:
      return <RobotEmoji style={style} />;
    case EmojiType.ThoughtBalloon:
      return <ThoughtBalloonEmoji style={style} />;
    case EmojiType.Unicorn:
      return <UnicornEmoji style={style} />;
    default:
      return <AlienEmoji style={style} />;
  }
};

const EmojiIcon: SFC<Props> = ({
  className,
  color,
  emoji,
  emojiSize = 40,
  marginBottom = 0,
  marginRight = 0,
  size = 72,
  transparentBackground = false,
  zoomOnHover = false,
}) => {
  return (
    <S.Container
      className={className}
      color={color}
      emojiSize={emojiSize}
      marginBottom={marginBottom}
      marginRight={marginRight}
      size={size}
      transparentBackground={transparentBackground}
      zoomOnHover={zoomOnHover}
    >
      <S.InnerContainer>{getEmojiIcon(emoji, emojiSize)}</S.InnerContainer>
    </S.Container>
  );
};

export default EmojiIcon;
