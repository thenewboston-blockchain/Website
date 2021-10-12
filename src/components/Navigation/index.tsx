import React, {useState} from 'react';
import {useHistory} from 'react-router';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';
import {SFC} from 'types/generic';

import * as S from './Styles';
// import './Navigation.scss';

type Props = {
  path: string;
  type: 'left' | 'right';
  text: string;
};

const Navigation: SFC<Props> = ({className, text, type, path}) => {
  const history = useHistory();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <S.Navigation
      className={clsx(className)}
      onClick={() => history.push(path)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
    >
      {type === 'left' &&
        (isHovered ? (
          <S.LeftIcon>
            <Icon icon={IconType.arrowLeft} size={20} totalSize={24} />
          </S.LeftIcon>
        ) : (
          <S.LeftIcon>
            <Icon icon={IconType.chevronLeft} size={16} totalSize={16} />
          </S.LeftIcon>
        ))}
      <S.Text>{text}</S.Text>
      {type === 'right' &&
        (isHovered ? (
          <S.RightIcon>
            <Icon icon={IconType.arrowRight} size={20} totalSize={24} />
          </S.RightIcon>
        ) : (
          <S.RightIcon>
            <Icon icon={IconType.chevronRight} size={16} totalSize={16} />
          </S.RightIcon>
        ))}
    </S.Navigation>
  );
};

export default Navigation;
