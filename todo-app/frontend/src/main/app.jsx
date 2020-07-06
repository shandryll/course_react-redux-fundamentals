// CSS dependencies
import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

import React from 'react';
import Routes from '../main/routes';
import Menu from '../template/menu';

export default (props) => {
  return (
    <div className="container">
      <Routes></Routes>
      <Menu></Menu>
    </div>
  )
};
