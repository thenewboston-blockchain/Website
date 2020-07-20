import React, {FC, useEffect, PropsWithChildren} from 'react';
import {useLocation} from 'react-router-dom';

interface ComponentProps extends PropsWithChildren<unknown> {
  elementId: string;
}

const ScrollToTop: FC<ComponentProps> = ({children, elementId}) => {
  const {pathname} = useLocation();
  useEffect(() => {
    document.getElementById(elementId)?.scrollTo(0, 0);
  }, [pathname, elementId]);

  return <>{children}</>;
};

export default ScrollToTop;
