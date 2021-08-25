import React from 'react';
import {createPortal} from 'react-dom';
import clsx from 'clsx';
import {SFC} from 'types/generic';
import {bemify} from '@thenewboston/utils';

import './SlideUp.scss';

interface ComponentProps {
  close(): void;
}

const SlideUp: SFC<ComponentProps> = ({children, className, close}) => {
  return createPortal(
    <>
      <div className="SlideUp__overlay" onClick={close} role="button" tabIndex={0} data-testid="SlideUp__overlay" />
      <div className={clsx('SlideUp', className)} data-testid="SlideUp">
        <div className={clsx('SlideUp__content', {...bemify(className, '__content')})} data-testid="SlideUp__content">
          {children}
        </div>
      </div>
    </>,
    document.getElementById('slide-up-root')!,
  );
};

export default SlideUp;
