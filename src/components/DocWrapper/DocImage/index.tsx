import React from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';
import {SFC} from 'types/generic';

import './DocImage.scss';

export interface DocImageProps {
  alt: string;
  bordered?: boolean;
  className?: string;
  maxWidth: number;
  width?: number;
  src: string;
}

const DocImage: SFC<DocImageProps> = ({alt, bordered, className, maxWidth, src, width}) => {
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
        style={{maxWidth, width}}
      />
    </div>
  );
};

export default DocImage;
