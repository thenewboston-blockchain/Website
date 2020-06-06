import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import AdminLayout from './AdminLayout';
import Home from './Home';
import LeftMenu from './LeftMenu';
import TopNav from './TopNav';

const App = () => {
  return (
    <Router>
      <AdminLayout left={<LeftMenu />} right={<Home />} top={<TopNav />} />
    </Router>
  );
};

export default App;
