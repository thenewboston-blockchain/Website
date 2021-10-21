import React, {FC} from 'react';

import {useWindowDimensions} from 'hooks';
import * as S from './Styles';
import ValuesIllustrationPlaceholder from './ValuesIllustrationPlaceholder.webp';
import ValuesIllustration from './ValuesIllustration.webp';

const AboutUsValue: FC = () => {
  const {width} = useWindowDimensions();

  let iconSize;
  if (width < 600) {
    iconSize = {height: 188, width: 235};
  } else if (width < 768) {
    iconSize = {height: 211, width: 288};
  } else {
    iconSize = {height: 376, width: 456};
  }
  return (
    <S.Container>
      <S.Wrapper>
        <S.Image
          alt="Illustration about TNBC's Values"
          height={iconSize.height}
          placeholderSrc={ValuesIllustrationPlaceholder}
          realSrc={ValuesIllustration}
          width={iconSize.width}
        />
        <S.RightContainer>
          <S.Title>The value comes from you</S.Title>
          <S.Subtitle>
            Coins are minted when utility is added to the platform through DApp creation or contributions. This Proof of
            Value system gives everyone a chance to participate, not just coin or hardware owners.
          </S.Subtitle>
        </S.RightContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default AboutUsValue;
