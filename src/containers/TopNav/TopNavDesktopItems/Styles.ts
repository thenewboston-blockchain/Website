import styled from 'styled-components';

import {Avatar, Button} from 'components';
import colors from 'styles/colors';
import {fontWeightBold} from 'styles/fonts/fontWeights';

export const Separator = styled.div`
  background-color: ${colors.palette.gray['200']};
  height: 25px;
  margin-left: 30px;
  width: 0.5px;
`;

export const RightSection = styled.div`
  display: flex;
  margin-left: 24px;
`;

export const AppButton = styled(Button)`
  align-items: center;
  display: flex;
  margin-right: 16px;
`;

export const DownloadButton = styled(Button)`
  margin-right: 16px;
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

export const ProfileImage = styled(Avatar)`
  border-radius: 50%;
  height: auto;
  margin-left: 12px;
  margin-right: 24px;
  width: 36px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 1366px) {
    display: none;
  }
`;
