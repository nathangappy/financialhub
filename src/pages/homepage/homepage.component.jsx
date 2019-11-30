import React, { Component } from 'react';

import firebase from '../../firebase';

import axios from 'axios';

import Navigation from '../../components/navigation/navigation.component';
import HomepageContainer from '../../components/homepage-container/homepage-container.component';

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      headlineStories: []
    };
  }
  async componentDidMount() {
    let headlines = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=50e00636604e42f89129053042aeaafc'
    );
    this.setState({ headlineStories: headlines.data.articles });
  }
  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('signed out'))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className='homepage'>
        {/* <Navigation user={this.props.user} handleSignout={this.handleSignout} /> */}
        <HomepageContainer newsList={this.state.headlineStories} />
      </div>
    );
  }
}

export default HomePage;
