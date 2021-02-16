import React, {FC} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import './DocImage.scss';

interface ComponentProps {
  alt: string;
  bordered?: boolean;
  className?: string;
  maxWidth: number;
  src: string;
}

const DocImage: FC<ComponentProps> = ({alt, bordered, className, maxWidth, src}) => {
  return (
    <div className={clsx('DocImage', {className})}>
      <img
        alt={alt}
        className={clsx('DocImage__img', {
          DocImage__bordered: bordered,
          ...bemify(className, '__img'),
        })}
        src={src}
        style={{maxWidth}}
      />
    </div>
  );
};

export default DocImage;
