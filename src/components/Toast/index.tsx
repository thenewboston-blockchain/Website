import React, {useMemo} from 'react';
import clsx from 'clsx';
import {IconType} from '@thenewboston/ui';
import {bemify} from '@thenewboston/utils';

import {SFC} from 'types/generic';

import * as S from './Styles';

export type ToastType = 'success' | 'warning';
interface ComponentProps {
  type: ToastType;
}

const Toast: SFC<ComponentProps> = ({children, className, type = 'warning'}) => {
  const iconType = useMemo<IconType>(() => {
    switch (type) {
      case 'success':
        return IconType.checkCircle;
      default:
        return IconType.alertCircleOutline;
    }
  }, [type]);

  return (
    <S.Container type={type} className={className && clsx(className, bemify(className, `--${type}`))}>
      <S.Icon
        className={className && clsx(bemify(className, '__icon'), bemify(className, `__icon--${type}`))}
        icon={iconType}
      />
      <S.Text className={className && clsx(bemify(className, '__text'))}>{children}</S.Text>
    </S.Container>
  );
};

export default Toast;
