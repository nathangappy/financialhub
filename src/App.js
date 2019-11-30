import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

// import pages
import Homepage from './pages/homepage/homepage.component';
import Dashboard from './pages/dashboard/dashboard.component';
import Portfolio from './pages/portfolio/portfolio.component';
import Community from './pages/community/community.component';
import SignUp from './pages/signup/signup.component';
import SignIn from './pages/signin/signin.component';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/community' component={Community} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
};

export default App;
