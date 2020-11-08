import React, {useState, useEffect} from 'react';
import Icon, {IconType} from 'components/Icon';

import './GoToTop.scss';

const GoToTopButton = ({showBelow}: any) => {
  const [show, setShow] = useState(!showBelow);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      setShow(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({behavior: 'smooth', top: 0});
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <div>{show && <Icon className="GoToTop__button" icon={IconType.chevronUp} size={50} onClick={scrollTop} />}</div>
  );
};
export default GoToTopButton;
