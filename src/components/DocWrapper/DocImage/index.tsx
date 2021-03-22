import React, {FC} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import './DocImage.scss';

export interface DocImageProps {
  alt: string;
  bordered?: boolean;
  className?: string;
  maxWidth: number;
  src: string;
}

const DocImage: FC<DocImageProps> = ({alt, bordered, className, maxWidth, src}) => {
  return (
    <div className={clsx('DocImage', className)} data-testid="DocImage">
      <img
        alt={alt}
        className={clsx('DocImage__img', {
          DocImage__bordered: bordered,
          ...bemify(className, '__img'),
        })}
        data-testid="DocImage__img"
        src={src}
        style={{maxWidth}}
      />
    </div>
  );
};

export default DocImage;
