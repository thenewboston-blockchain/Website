import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {HashLink} from 'components';

import './DocContainer.scss';

interface ComponentProps {
  className?: string;
  id?: string;
  introSection?: ReactNode;
  introTitle?: ReactNode;
  lastUpdated?: string;
  title: ReactNode;
}

const DocContainer: FC<ComponentProps> = ({children, className, id, introSection, introTitle, title, lastUpdated}) => {
  return (
    <section className={clsx('DocContainer', className)}>
      {introTitle ? (
        <div
          className={clsx('DocContainer__wrapper', {
            ...bemify(className, '__wrapper'),
          })}
        >
          <h1
            className={clsx('DocContainer__page-title', {
              ...bemify(className, '__page-title'),
            })}
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
