import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Home from './Home';
import LeftMenu from './LeftMenu';
import TopNav from './TopNav';

const App = () => {
  return (
    <Router>
      <TopNav />
      <div>
        <LeftMenu />
        <Home />
      </div>
    </Router>
  );
};

export default App;
