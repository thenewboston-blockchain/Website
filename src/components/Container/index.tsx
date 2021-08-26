/* eslint-disable react/jsx-props-no-spreading */

import React, {useMemo} from 'react';
import clsx from 'clsx';
import {SFC} from 'types/generic';

import './Container.scss';

type ContainerElement = 'div' | 'header' | 'main';

interface ContainerProps {
  element?: ContainerElement;
  dataTestId?: string;
  maxWidth?: number;
}

const Container: SFC<ContainerProps> = ({children, className, dataTestId, element = 'div', maxWidth = 1366}) => {
  const props = useMemo(
    () => ({
      className: clsx('Container', className),
      'data-testid': dataTestId,
      style: {
        maxWidth,
      },
    }),
    [className, dataTestId, maxWidth],
  );

  switch (element) {
    case 'header': {
      return <header {...props}>{children}</header>;
    }
    case 'main': {
      return <main {...props}>{children}</main>;
    }
    default: {
      return <div {...props}>{children}</div>;
    }
  }
};

export default Container;
