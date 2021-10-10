import React, {useMemo} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {SFC} from 'types/generic';
import './DocList.scss';

export interface DocListProps {
  variant: 'ul' | 'ol';
}

const DocList: SFC<DocListProps> = ({children, className, variant}) => {
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
