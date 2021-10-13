import React from 'react';
import {createPortal} from 'react-dom';
import clsx from 'clsx';
import {SFC} from 'types/generic';
import {bemify} from '@thenewboston/utils';
import * as S from './Style';
import * as C from '../SlideUpContent/Style';
import * as O from '../SlideUpOverlay/Style';

interface ComponentProps {
  close(): void;
}

const SlideUp: SFC<ComponentProps> = ({children, className, close}) => {
  return createPortal(
    <>
      <O.SlideUpOverlay
        className={`${className}"__overlay"`}
        onClick={close}
        role="button"
        tabIndex={0}
        data-testid="SlideUp__overlay"
      />
      <S.SlideUp className={className} data-testid="SlideUp">
        <C.SlideUpContent className={clsx({...bemify(className, '__content')})} data-testid="SlideUp__content">
          {children}
        </C.SlideUpContent>
      </S.SlideUp>
    </>,
    document.getElementById('slide-up-root')!,
  );
};

export default SlideUp;
