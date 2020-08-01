import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';

import './DocSubSection.scss';

interface ComponentProps {
  className?: string;
  id?: string;
  title: ReactNode;
}

const DocSubSection: FC<ComponentProps> = ({children, className, id, title}) => {
  return (
    <>
      <h2 className={clsx('DocSubSection__h2', {...getCustomClassNames(className, '__h2', true)})} id={id}>
        {title}
      </h2>
      {children}
    </>
  );
};

export default DocSubSection;
