import React, {useState} from 'react';
import GoToTopIcon from 'mdi-react/ChevronUpIcon';

import './GoToTop.scss';

const GoToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({behavior: 'smooth', top: 0});
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div>
      <GoToTopIcon color="#fff" />
      <GoToTopIcon
        className="GoToTop__go-to-top"
        onClick={scrollTop}
        size={16}
        style={{display: showScroll ? 'flex' : 'none'}}
      />
      <GoToTopIcon size="1em" />
    </div>
  );
};
export default GoToTopButton;
