import React from 'react';
import {createPortal} from 'react-dom';
import clsx from 'clsx';
import {SFC} from 'types/generic';
import {bemify} from '@thenewboston/utils';
import * as S from './Style';

interface ComponentProps {
  close(): void;
}

const SlideUp: SFC<ComponentProps> = ({children, className, close}) => {
  return createPortal(
    <>
      <S.SlideUp
        className={`${className}"__overlay"`}
        onClick={close}
        role="button"
        tabIndex={0}
        data-testid="SlideUp__overlay"
      />
      <S.SlideUp className={clsx('SlideUp', className)} data-testid="SlideUp">
        <S.SlideUp
          className={clsx('SlideUp__content', {...bemify(className, '__content')})}
          data-testid="SlideUp__content"
        >
          {children}
        </S.SlideUp>
      </S.SlideUp>
    </>,
    document.getElementById('slide-up-root')!,
  );
};

export default SlideUp;
