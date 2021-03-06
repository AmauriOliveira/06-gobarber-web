import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
// import Dashboard from '../pages/Dashboard';
// import NotFound from '../pages/NotFound';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
      <Route path="/signup" component={SignUp} />
      {/* <Route component={NotFound} isPrivate /> */}
    </Switch>
  );
};

export default Router;
