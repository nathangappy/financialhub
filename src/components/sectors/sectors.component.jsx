import React, { Component } from 'react';

import axios from 'axios';

import './sectors.styles.scss';

class Sectors extends Component {
  constructor() {
    super();

    this.state = {
      sectors: []
    };
  }
  async componentDidMount() {
    let sectorData = await axios.get(
      'https://www.alphavantage.co/query?function=SECTOR&apikey=V18JBVR8U7KTDD7W'
    );
    const sectorArray = Object.entries(
      sectorData.data['Rank F: Year-to-Date (YTD) Performance']
    );
    this.setState({ sectors: sectorArray });
  }
  render() {
    let sectorList = this.state.sectors.map(sector => {
      let formattedNum = sector[1].replace(/%/g, '');
      formattedNum = parseInt(formattedNum.replace(/\./g, ''));
      return (
        <li key={sector[0]}>
          {sector[0]} -{' '}
          <span className={`${formattedNum}` > 0 ? 'positive' : 'negative'}>
            {sector[1]}
          </span>
        </li>
      );
    });
    return (
      <div className='sectors'>
        <h3>Sectors - YTD</h3>
        <ul>{sectorList}</ul>
      </div>
    );
  }
}

export default Sectors;
