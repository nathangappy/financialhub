import React from 'react';

import './dashboard-container.styles.scss';

import StockInfo from '../stock-info/stock-info.component';
import DashboardSide from '../dashboard-side/dashboard-side.component';

const DashboardContainer = props => {
  return (
    <div className='dashboard-container'>
      <StockInfo globalQuote={props.globalQuote} stockNews={props.stockNews} chartData={props.chartData} />
      <DashboardSide
        tickerSearch={props.tickerSearch}
        companySearch={props.companySearch}
        companyMatches={props.companyMatches}
        handleSearchChange={props.handleSearchChange}
        handleTickerSearch={props.handleTickerSearch}
        handleCompanyLookup={props.handleCompanyLookup}
      />
    </div>
  );
};

export default DashboardContainer;
