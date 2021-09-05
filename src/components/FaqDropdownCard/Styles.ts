import styled from 'styled-components';
import colors from 'styles/colors';
import {h3} from 'styles/fonts';
import {Icon} from '@thenewboston/ui';

import {Link} from 'react-router-dom';

export const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 0 24px 0 rgba(229, 234, 244, 0.58);
  min-height: 80px;
  padding: 24px;
  position: relative;
`;

export const Anchor = styled.div`
  position: absolute;
  top: -60px;
`;

export const DropdownContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const HashLink = styled.div`
  ${h3.regular};
  display: none;
  margin-left: 8px;
`;

export const LeftContainer = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
  }

  &:hover ${HashLink} {
    display: inline;
  }
`;

export const ToggleIcon = styled(Icon)`
  outline: none;

  &:focus {
    background-color: transparent;
  }
`;

export const Question = styled(Link)`
  ${h3.medium};
  color: ${colors.palette.gray['700']};
`;

const Answer = styled.div`
  ${h3.regular};
  color: ${colors.palette.gray['500']};
  display: none;
`;

export const ExpandedAnswer = styled(Answer)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
