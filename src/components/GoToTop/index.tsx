import React from 'react';
import GoToTopIcon from 'mdi-react/ArrowUpIcon';

import './GoToTop.scss';

const GoToTopComp = () => {
  const scrollTop = () => {
    window.scrollTo({behavior: 'smooth', top: 0});
  };
  return (
    <div>
      <GoToTopIcon color="#fff" />
      <GoToTopIcon className="GoToTop__go-to-top" onClick={scrollTop} size={16} />
      <GoToTopIcon size="1em" />
    </div>
  );
};
export default GoToTopComp;
