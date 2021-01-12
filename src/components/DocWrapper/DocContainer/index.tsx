import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';

import {HashLink} from 'components';
import {getCustomClassNames} from 'utils/components';

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
            ...getCustomClassNames(className, '__wrapper', true),
          })}
        >
          <h1
            className={clsx('DocContainer__page-title', {
              ...getCustomClassNames(className, '__page-title', true),
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
          ...getCustomClassNames(className, '__wrapper', true),
        })}
      >
        <h1
          className={clsx('DocContainer__page-title', {
            ...getCustomClassNames(className, '__page-title', true),
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
