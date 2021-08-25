import React, {useCallback, useEffect, useState} from 'react';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';
import {SFC} from 'types/generic';

import './GoToTop.scss';

const GoToTop: SFC = ({className}) => {
  const [show, setShow] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 100) {
      if (!show) setShow(true);
    } else {
      setShow(false);
    }
  }, [show]);

  const scrollTop = () => {
    window.scrollTo({behavior: 'smooth', top: 0});
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      {show && (
        <Icon
          className={clsx('GoToTop', className)}
          dataTestId="GoToTop"
          icon={IconType.chevronUp}
          size={50}
          onClick={scrollTop}
        />
      )}
    </>
  );
};
export default GoToTop;
