import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {HashLink} from 'components';

import './DocSubSection.scss';

export interface DocSubSectionProps {
  className?: string;
  id?: string;
  title: ReactNode;
}

const DocSubSection: FC<DocSubSectionProps> = ({children, className, id, title}) => {
  return (
    <>
      <h2 className={clsx('DocSubSection__h2', {...bemify(className, '__h2')})} data-testid="DocSubSection__h2" id={id}>
        {title}
        {id ? <HashLink className="DocSubSection__HashLink" id={id} /> : null}
      </h2>
      {children}
    </>
  );
};

export default DocSubSection;
