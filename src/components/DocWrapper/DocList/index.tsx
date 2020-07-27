import React, {FC, useMemo} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';

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
        ...getCustomClassNames(className, `--${variant}`, true),
      }),
    [className, variant],
  );

  if (variant === 'ul') {
    return <ul className={mainClassName}>{children}</ul>;
  }

  return <ol className={mainClassName}>{children}</ol>;
};

export default DocList;
