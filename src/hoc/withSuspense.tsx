import React, {Suspense} from 'react';

import {Loader} from 'components';

import './styles.scss';

export default function withSuspense<P>(WrappedComponent: React.ComponentType<P>) {
  const ComponentWithSuspense = (props: P) => {
    return (
      <Suspense fallback={<Loader className="WithSuspense__loader" />}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <WrappedComponent {...props} />
      </Suspense>
    );
  };

  return ComponentWithSuspense;
}
