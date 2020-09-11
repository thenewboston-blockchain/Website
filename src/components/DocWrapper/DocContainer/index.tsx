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
  title: ReactNode;
}

const DocContainer: FC<ComponentProps> = ({children, className, id, introSection, introTitle, title}) => {
  return (
    <section className={clsx('DocContainer', className)}>
      {introTitle ? (
        <h1
          className={clsx('DocContainer__page-title', {
            ...getCustomClassNames(className, '__page-title', true),
          })}
        >
          {introTitle}
        </h1>
      ) : null}
      {introSection ? (
        <>
          {introSection}
          <div className={clsx('DocContainer__divider')} />
        </>
      ) : null}
      <h1
        className={clsx('DocContainer__page-title', {
          ...getCustomClassNames(className, '__page-title', true),
        })}
        id={id}
      >
        {title}
        {id ? <HashLink className="DocContainer__HashLink" id={id} /> : null}
      </h1>
      {children}
    </section>
  );
};

export default DocContainer;
