import React, {FC} from 'react';

import thenewbostonLogo from 'assets/logos/thenewboston.png';
import * as S from './Styles';

const App: FC = () => {
  return (
    <S.Container>
      <S.Image alt="thenewboston logo" src={thenewbostonLogo} />
    </S.Container>
  );
};

export default App;
