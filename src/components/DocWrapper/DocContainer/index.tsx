import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';

import './DocContainer.scss';

interface ComponentProps {
  className?: string;
  introSection?: ReactNode;
  introTitle?: ReactNode;
  title: ReactNode;
}

const DocContainer: FC<ComponentProps> = ({children, className, introSection, introTitle, title}) => {
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
      >
        {title}
      </h1>
      {children}
    </section>
  );
};

export default DocContainer;
