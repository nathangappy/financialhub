import React, { Component } from 'react';

import './dashboard.styles.scss';

import axios from 'axios';

// import components
import Navigation from '../../components/navigation/navigation.component';
import DashboardContainer from '../../components/dashboard-container/dashboard-container.component';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      globalQuote: {}
    };
  }
  componentDidMount() {
    axios
      .get(
        'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=V18JBVR8U7KTDD7W'
      )
      .then(res => this.setState({ globalQuote: res.data['Global Quote'] }));
  }
  render() {
    return (
      <div className='dashboard'>
        <Navigation />
        <DashboardContainer globalQuote={this.state.globalQuote} />
      </div>
    );
  }
}

export default Dashboard;
