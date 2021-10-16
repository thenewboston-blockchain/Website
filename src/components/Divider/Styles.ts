import styled, {css} from 'styled-components';
import colors from 'styles/colors';

type Props = {
  type: 'vertical' | 'horizontal';
};

export const Container = styled.div<Props>`
  ${(props) =>
    props.type === 'horizontal'
      ? css`
          border-bottom: 1px solid ${colors.palette.gray['075']};
          width: 100%;
        `
      : `border-right: 1px solid ${colors.palette.gray['075']};`}
`;
