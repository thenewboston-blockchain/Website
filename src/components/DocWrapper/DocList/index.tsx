import React, {FC, useMemo} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import './DocList.scss';

export interface DocListProps {
  className?: string;
  variant: 'ul' | 'ol';
}

const DocList: FC<DocListProps> = ({children, className, variant}) => {
  const mainClassName = useMemo(
    () =>
      clsx('DocList', className, {
        [`DocList--${variant}`]: true,
        ...bemify(className, `--${variant}`),
      }),
    [className, variant],
  );

  if (variant === 'ul') {
    return (
      <ul className={mainClassName} data-testid="DocList--ul">
        {children}
      </ul>
    );
  }

  return (
    <ol className={mainClassName} data-testid="DocList--ol">
      {children}
    </ol>
  );
};

export default DocList;
