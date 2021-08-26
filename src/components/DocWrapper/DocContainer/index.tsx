import React, {ReactNode} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {HashLink} from 'components';
import {SFC} from 'types/generic';

import './DocContainer.scss';

export interface DocContainerProps {
  id?: string;
  lastUpdated?: string;
  title: ReactNode;
}

const DocContainer: SFC<DocContainerProps> = ({children, className, id, lastUpdated, title}) => {
  return (
    <section className={clsx('DocContainer', className)} data-testid="DocContainer">
      <div
        className={clsx('DocContainer__wrapper', {
          ...bemify(className, '__wrapper'),
        })}
        data-testid="DocContainer__wrapper"
      >
        <h1
          className={clsx('DocContainer__page-title', {
            ...bemify(className, '__page-title'),
          })}
          data-testid="DocContainer__page-title"
          id={id}
        >
          {title}
          {id ? <HashLink className="DocContainer__HashLink" id={id} /> : null}
        </h1>
        {Boolean(lastUpdated) && <span className="DocContainer__last-updated">Updated on {lastUpdated}</span>}
      </div>
      {children}
    </section>
  );
};

export default DocContainer;
