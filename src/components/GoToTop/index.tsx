import React, {FC, useCallback, useEffect, useState} from 'react';
import {Icon, IconType} from '@thenewboston/ui';

import './GoToTop.scss';

const GoToTop: FC = () => {
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
        <Icon className="GoToTop" dataTestId="GoToTop" icon={IconType.chevronUp} size={50} onClick={scrollTop} />
      )}
    </>
  );
};
export default GoToTop;
