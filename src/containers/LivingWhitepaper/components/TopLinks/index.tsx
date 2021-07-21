import React, {FC} from 'react';

import {Link} from 'react-router-dom';

import './TopLinks.scss';

const TopLinks: FC = () => {
  return (
    <div className="TopLinks">
      <Link to="/developer" className="TopLinks__link">
        Developer
      </Link>
      <Link to="/developer/whitepaper" className="TopLinks__link">
        Living Whitepaper
      </Link>
      <Link to="/projects" className="TopLinks__link">
        Projects
      </Link>
    </div>
  );
};

export default TopLinks;
