import React, {useCallback, useEffect, useState} from 'react';
import {IconType} from '@thenewboston/ui';

import {SFC} from 'types/generic';

import * as S from './Styles';

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
        <S.GoToTop className={className} dataTestId="GoToTop" icon={IconType.chevronUp} size={50} onClick={scrollTop} />
      )}
    </>
  );
};
export default GoToTop;
