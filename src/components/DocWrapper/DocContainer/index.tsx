import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {HashLink} from 'components';

import './DocContainer.scss';

export interface DocContainerProps {
  className?: string;
  id?: string;
  introSection?: ReactNode;
  introTitle?: ReactNode;
  lastUpdated?: string;
  title: ReactNode;
}

const DocContainer: FC<DocContainerProps> = ({
  children,
  className,
  id,
  introSection,
  introTitle,
  lastUpdated,
  title,
}) => {
  return (
    <section className={clsx('DocContainer', className)} data-testid="DocContainer">
      {introTitle ? (
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
          >
            {introTitle}
          </h1>
          {Boolean(lastUpdated) && <span className="DocContainer__last-updated">Updated on {lastUpdated}</span>}
        </div>
      ) : null}
      {introSection ? (
        <>
          {introSection}
          <div className={clsx('DocContainer__divider')} />
        </>
      ) : null}
      <div
        className={clsx('DocContainer__wrapper', {
          ...bemify(className, '__wrapper'),
        })}
      >
        <h1
          className={clsx('DocContainer__page-title', {
            ...bemify(className, '__page-title'),
          })}
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
