import styled from 'styled-components';
import {Button as SharedButton, Container as SharedContainer, EmojiIcon as SharedEmojiIcon} from 'components';
import colors from 'styles/colors';
import {d2, h3} from 'styles/fonts';
import {fontWeightBold} from 'styles/fonts/fontWeights';
import zIndex from 'styles/zIndex';

export const Background = styled.div`
  align-items: center;
  background: rgba(246, 249, 252, 0.36);
  display: flex;
  justify-content: center;
  height: 472px;
  overflow: hidden;
  position: relative;

  @media (max-width: 1366px) {
    height: 425px;
  }

  @media (max-width: 768px) {
    height: 390px;
  }
`;

export const Container = styled(SharedContainer)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  ${d2.bold};
  color: ${colors.palette.neutral['900']};
  line-height: 1.25;
  margin-top: 8px;
  text-align: center;
`;

export const SubTitle = styled.h2`
  ${h3.regular};
  color: ${colors.palette.neutral['600']};
  line-height: 1.5;
  margin: 40px 0;
  max-width: 594px;
  text-align: center;

  @media (max-width: 992px) {
    margin: 32px 0;
  }
`;

export const Button = styled(SharedButton)`
  align-items: center;
  background-color: ${colors.white};
  display: flex;
  width: fit-content;
  z-index: ${zIndex.appsHeroButton};
`;

type PositionProps = {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
};

export const EmojiIcon = styled(SharedEmojiIcon)<PositionProps>`
  top: ${(props) => `${props.top}px` || 'unset'};
  bottom: ${(props) => `${props.bottom}px` || 'unset'};
  left: ${(props) => `${props.left}px` || 'unset'};
  right: ${(props) => `${props.right}px` || 'unset'};
  position: absolute;
`;

export const DiscordButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: ${colors.discord};
  cursor: pointer;
  display: flex;
  margin-right: 16px;
  min-width: 100px;
  outline: none;

  &:hover {
    color: ${colors.discordHover};
    ${fontWeightBold};
  }
`;
