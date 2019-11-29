import React from 'react';

import './dashboard-side.styles.scss';

import SearchBar from '../searchbar/searchbar.component';
import Sectors from '../sectors/sectors.component';

const DashboardSide = props => (
  <div className='dashboard-side'>
    <h3>Financial Hub Search Center</h3>
    <SearchBar
      tickerSearch={props.tickerSearch}
      companySearch={props.companySearch}
      companyMatches={props.companyMatches}
      handleSearchChange={props.handleSearchChange}
      handleTickerSearch={props.handleTickerSearch}
      handleCompanyLookup={props.handleCompanyLookup}
    />
    <Sectors />
  </div>
);

export default DashboardSide;
