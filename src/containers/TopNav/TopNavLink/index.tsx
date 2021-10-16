import React, {FC} from 'react';

import * as S from './Styles';

interface ComponentProps {
  className?: string;
  text: string;
  to: string;
}

const TopNavLink: FC<ComponentProps> = ({className, text, to}) => {
  return (
    <S.TopNavLink className={className} to={to}>
      {text}
    </S.TopNavLink>
  );
};

export default TopNavLink;
