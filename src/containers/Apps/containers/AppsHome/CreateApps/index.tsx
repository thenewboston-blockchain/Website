import React from 'react';

import {URLS} from 'constants/routes';
import {Button} from 'components';

import * as S from './Styles';

const CreateApps = () => {
  const handleClick = () => {
    window.location.href = URLS.developerPortal.tutorials;
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Heading>Want to create an app?</S.Heading>
        <S.Paragraph>
          Learn to develop fully functional apps with tutorials created by thenewboston YouTube channel. You will
          receive step-by-step procedures to build apps and integrate TNBC, and gain access to pre-built libraries to
          support multiple programming languages!
        </S.Paragraph>
        <Button variant="contained" color="quaternary" onClick={handleClick}>
          Watch Tutorials
        </Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default CreateApps;
