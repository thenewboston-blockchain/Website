import React, {FC, useMemo} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import './DocList.scss';

interface ComponentProps {
  className?: string;
  variant: 'ul' | 'ol';
}

const DocList: FC<ComponentProps> = ({children, className, variant}) => {
  const mainClassName = useMemo(
    () =>
      clsx('DocList', className, {
        [`DocList--${variant}`]: true,
        ...bemify(className, `--${variant}`),
      }),
    [className, variant],
  );

  if (variant === 'ul') {
    return <ul className={mainClassName}>{children}</ul>;
  }

  return <ol className={mainClassName}>{children}</ol>;
};

export default DocList;
