import React from 'react';
import {useHistory} from 'react-router';

import {ROUTES} from 'constants/routes';
import {Button} from 'components';

import * as S from './Styles';

const CreateGames = () => {
  const history = useHistory();

  const handleClick = () => history.push(ROUTES.tutorials);

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
