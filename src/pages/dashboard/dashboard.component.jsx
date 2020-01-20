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
      tickerSearch: '',
      companySearch: '',
      globalQuote: {},
      chartData: {},
      stockNews: [],
      companyMatches: []
    };
  }
  componentDidMount() {
    this.setState({ globalQuote: {}, chartData: {} });
    axios
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=VN8ZHM1KG3SFX28V`
      )
      .then(res => this.setState({ globalQuote: res.data['Global Quote'] }))
      .catch(err => {
        this.props.history.push('/dashboard');
      });
    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=VN8ZHM1KG3SFX28V`
      )
      .then(res => {
        this.setState({ chartData: res.data['Time Series (Daily)'] });
      })
      .catch(err => console.log('error getting chart data'));
  }
  handleTickerSearch = async e => {
    e.preventDefault();
    this.setState({ chartData: {} });
    try {
      // get news stories about searched ticker
      let newsArray = [];
      let news = await axios.get(
        `https://stocknewsapi.com/api/v1?tickers=${this.state.tickerSearch.toUpperCase()}&items=9&token=j5kxgoilv3tyac5is1rcowzhm1bgacherychyco2`
      );
      news.data.data.forEach(item => newsArray.push(item));
      this.setState({ stockNews: newsArray });

      // get quote data about searched ticker
      let quote = await axios.get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.tickerSearch.toUpperCase()}&apikey=VN8ZHM1KG3SFX28V`
      );
      this.setState({ globalQuote: quote.data['Global Quote'] });

      // get up to date chart data for searched ticker
      let chartData = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.tickerSearch.toUpperCase()}&apikey=VN8ZHM1KG3SFX28V`
      );
      this.setState({ chartData: chartData.data['Time Series (Daily)'] });
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
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.companySearch}&apikey=VN8ZHM1KG3SFX28V`
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
          tickerSearch={this.state.tickerSearch}
          companySearch={this.state.companySearch}
          globalQuote={this.state.globalQuote}
          chartData={this.state.chartData}
          stockNews={this.state.stockNews}
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
