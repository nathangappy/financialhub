import React, { Component } from 'react';
import './App.css';

import firebase from './firebase';

import { Switch, Route } from 'react-router-dom';

// import pages
import Homepage from './pages/homepage/homepage.component';
import Dashboard from './pages/dashboard/dashboard.component';
import Portfolio from './pages/portfolio/portfolio.component';
import Community from './pages/community/community.component';
import SignUp from './pages/signup/signup.component';
import SignIn from './pages/signin/signin.component';

// import navigation
import Navigation from './components/navigation/navigation.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user });
      } else {
        this.setState({ user: {} });
      }
    });
  }
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Homepage user={this.state.user} />
          </Route>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/community' component={Community} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
