import React, {FC} from 'react';
import {createPortal} from 'react-dom';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';

import './SlideUp.scss';

interface ComponentProps {
  className?: string;
  close(): void;
}

const SlideUp: FC<ComponentProps> = ({children, className, close}) => {
  return createPortal(
    <>
      <div className="SlideUp__overlay" onClick={close} role="button" tabIndex={0} />
      <div className={clsx('SlideUp', className)}>
        <div className={clsx('SlideUp__content', {...getCustomClassNames(className, '__content', true)})}>
          {children}
        </div>
      </div>
    </>,
    document.getElementById('slide-up-root')!,
  );
};

export default SlideUp;
