import styled from 'styled-components';
import colors from 'styles/colors';
import fonts from 'styles/fonts/base';

import {A} from 'components';

export const LinkContainer = styled(A)`
  align-items: center;
  background: ${colors.white};
  border-radius: 12px;
  box-shadow: 0 0 4px rgba(4, 34, 53, 0.3);
  color: ${colors.primary};
  column-gap: 18px;
  display: grid;
  grid-template-columns: 30px auto;
  margin: 12px;
  padding: 18px;
  row-gap: 12px;
  width: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  @media (min-width: 480px) {
    width: 392px;
  }

  @media (min-width: 768px) {
    column-gap: 24px;
    padding: 18px 24px;
    width: 540px;
  }
`;

export const Description = styled.div`
  grid-column: 1 / 3;

  @media (min-width: 768px) {
    grid-column: 2;
  }
`;

export const DescriptionHandle = styled.div`
  display: none;
  font-weight: ${fonts.weight.semiBold};

  @media (min-width: 768px) {
    display: inline;
  }
`;

export const Handle = styled.div`
  font-weight: ${fonts.weight.semiBold};
  grid-column: 2;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    grid-row: 1;
  }
`;
