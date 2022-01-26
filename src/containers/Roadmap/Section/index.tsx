import React from 'react';

import * as S from './Styles';

type Props = {
  children: React.ReactNode;
  title: string;
};

const Section: React.FC<Props> = ({children, title}) => {
  return (
    <S.Container>
      <S.Heading>{title}</S.Heading>
      {children}
    </S.Container>
  );
};

export default Section;
