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
      globalQuote: {},
      stockNews: [],
      tickerSearch: '',
      companySearch: '',
      companyMatches: []
    };
  }
  componentDidMount() {
    axios
      .get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=V18JBVR8U7KTDD7W`)
      .then(res => this.setState({ globalQuote: res.data['Global Quote'] }));
  }
  handleTickerSearch = async e => {
    e.preventDefault();
    try {
      let newsArray = [];
      // let news = await axios.get(
      //   `https://stocknewsapi.com/api/v1?tickers=${this.state.tickerSearch.toUpperCase()}&items=6&token=j5kxgoilv3tyac5is1rcowzhm1bgacherychyco2`
      // );
      // news.data.data.forEach(item => newsArray.push(item));
      this.setState({ stockNews: newsArray });
      let quote = await axios.get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.tickerSearch.toUpperCase()}&apikey=V18JBVR8U7KTDD7W`
      );
      this.setState({ globalQuote: quote.data['Global Quote'] });
      this.setState({ tickerSearch: '' });
    } catch (error) {
      console.log(error);
    }
  };
  handleSearchChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleCompanyLookup = async e => {
    e.preventDefault();
    try {
      let matches = [];
      let data = await axios.get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.companySearch}&apikey=V18JBVR8U7KTDD7W`
      );
      data.data.bestMatches.forEach(match => matches.push(match));
      this.setState({ companyMatches: matches });
      this.setState({ companySearch: '' });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className='dashboard'>
        <Navigation />
        <DashboardContainer
          globalQuote={this.state.globalQuote}
          stockNews={this.state.stockNews}
          tickerSearch={this.state.tickerSearch}
          companySearch={this.state.companySearch}
          companyMatches={this.state.companyMatches}
          handleSearchChange={this.handleSearchChange}
          handleTickerSearch={this.handleTickerSearch}
          handleCompanyLookup={this.handleCompanyLookup}
        />
      </div>
    );
  }
}

export default Dashboard;
