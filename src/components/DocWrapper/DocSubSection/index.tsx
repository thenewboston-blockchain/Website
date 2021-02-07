import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {HashLink} from 'components';

import './DocSubSection.scss';

interface ComponentProps {
  className?: string;
  id?: string;
  title: ReactNode;
}

const DocSubSection: FC<ComponentProps> = ({children, className, id, title}) => {
  return (
    <>
      <h2 className={clsx('DocSubSection__h2', {...bemify(className, '__h2')})} id={id}>
        {title}
        {id ? <HashLink className="DocSubSection__HashLink" id={id} /> : null}
      </h2>
      {children}
    </>
  );
};

export default DocSubSection;
