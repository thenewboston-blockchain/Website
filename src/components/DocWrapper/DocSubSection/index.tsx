import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';

import './DocSubSection.scss';

interface ComponentProps {
  className?: string;
  title: ReactNode;
}

const DocSubSection: FC<ComponentProps> = ({children, className, title}) => {
  return (
    <>
      <h2 className={clsx('DocSubSection__h2', {...getCustomClassNames(className, '__h2', true)})}>{title}</h2>
      {children}
    </>
  );
};

export default DocSubSection;
