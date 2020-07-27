import React, {FC} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';

import './DocImage.scss';

interface ComponentProps {
  alt: string;
  className?: string;
  maxWidth: number;
  src: string;
}

const DocImage: FC<ComponentProps> = ({alt, className, maxWidth, src}) => {
  return (
    <div className={clsx('DocImage', {className})}>
      <img
        alt={alt}
        className={clsx('DocImage__img', {...getCustomClassNames(className, '__img', true)})}
        src={src}
        style={{maxWidth}}
      />
    </div>
  );
};

export default DocImage;
