import React from 'react';

import './dashboard-side.styles.scss';

import SearchBar from '../searchbar/searchbar.component';
import Sectors from '../sectors/sectors.component';

const DashboardSide = () => (
  <div className='dashboard-side'>
    <h3>Dasboard Side</h3>
    <SearchBar />
    <Sectors />
  </div>
);

export default DashboardSide;
