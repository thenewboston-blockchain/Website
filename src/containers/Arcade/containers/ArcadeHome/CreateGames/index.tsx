import React from 'react';

import {Button} from 'components';
import {socialMediaUrls} from 'utils/social-media';

import * as S from './Styles';

const CreateGames = () => {
  const handleClick = () => window.open(socialMediaUrls.youtube, '_blank', 'noopener noreferrer');

  return (
    <S.Wrapper>
      <S.Container>
        <S.Heading>Want to create a game?</S.Heading>
        <S.Paragraph>
          Learn to develop fully functional games with tutorials created by thenewboston YouTube channel. You will
          receive step-by-step procedures to build games and integrate TNBC, and gain access to pre-built libraries to
          support multiple programming languages!
        </S.Paragraph>
        <Button variant="contained" color="quaternary" onClick={handleClick}>
          Create Games
        </Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default CreateGames;
