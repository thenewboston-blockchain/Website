import React, {FC} from 'react';

import Logo from 'assets/svgs/thenewboston-primary.svg';
import * as S from './Styles';

const TopNavLogo: FC = () => (
  <S.LinkContainer to="/">
    <S.Image alt="thenewboston Logo" src={Logo} />
  </S.LinkContainer>
);

export default TopNavLogo;
