/* eslint-disable react/jsx-props-no-spreading */

import React, {ComponentType, Suspense} from 'react';

import {Loader} from 'components';
import './withSuspense.scss';

export default function withSuspense<P>(WrappedComponent: ComponentType<P>) {
  return (props: P) => {
    return (
      <Suspense fallback={<Loader className="WithSuspense__loader" />}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
}
