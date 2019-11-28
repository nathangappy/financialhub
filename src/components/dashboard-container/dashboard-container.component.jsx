import React from 'react';

import './dashboard-container.styles.scss';

import StockInfo from '../stock-info/stock-info.component';
import DashboardSide from '../dashboard-side/dashboard-side.component';

const DashboardContainer = props => {
  return (
    <div className='dashboard-container'>
      <StockInfo globalQuote={props.globalQuote} />
      <DashboardSide />
    </div>
  );
};

export default DashboardContainer;
