import styled, {css} from 'styled-components';
import {Link as RouterLink} from 'react-router-dom';

import colors from 'styles/colors';
import {b1} from 'styles/fonts';

import {A as BaseA} from 'components';

type CommonProps = {
  mb?: number;
};

type ListProps = CommonProps & {
  bold?: boolean;
};

export const Container = styled.div`
  padding: 80px 0px;
  margin: 0 auto;
  max-width: 688px;

  @media (max-width: 768px) {
    padding: 48px 24px;
  }
`;

export const Paragraph = styled.p<CommonProps>`
  ${b1.regular};
  color: ${colors.palette.neutral['500']};
  line-height: 20px;
  margin: 0;

  ${({mb}) =>
    !!mb &&
    css`
      margin-bottom: ${mb}px;
    `}
`;

export const Highlight = styled.span`
  ${b1.medium};
  color: ${colors.palette.neutral['800']};
`;

export const List = styled.ul<ListProps>`
  ${b1.medium};
  color: ${colors.palette.neutral['800']};
  padding-inline-start: 20px;

  ${({mb}) =>
    !!mb &&
    css`
      margin-bottom: ${mb}px;
    `}

  ${({bold}) =>
    !bold &&
    css`
      ${b1.regular};
      color: ${colors.palette.neutral['500']};
    `}
`;

export const ListItem = styled.li<CommonProps>`
  ${({mb = 8}) =>
    css`
      margin-bottom: ${mb}px;
    `}
`;

export const A = styled(BaseA)`
  ${b1.medium};
  color: ${colors.quaternary};
`;

export const Link = styled(RouterLink)`
  ${b1.medium};
  color: ${colors.quaternary};
`;
