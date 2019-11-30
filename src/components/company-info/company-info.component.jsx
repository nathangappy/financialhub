import React from 'react';

import './company-info.styles.scss';

import StockChart from '../stock-chart/stock-chart.component';

const CompanyInfo = ({ globalQuote, chartData }) => {
  let data = [20, 12, 12, 12, 22, 25];
  let labels = ['4', '2', '3', '4', '5', '6'];
  let status = parseFloat(globalQuote['10. change percent']).toFixed(2) > 0 ? 'positive' : 'negative';
  console.log(status);
  return (
    <div className='company-info'>
      <div className='quote-info'>
        <h3>{globalQuote['01. symbol'] || null}</h3>
        <p>
          {parseFloat(globalQuote['05. price']).toFixed(2)}
          USD
        </p>
        <p className={status}>{`(${parseFloat(globalQuote['10. change percent']).toFixed(2)})%`}</p>
        <ul>
          <li>Open: {parseFloat(globalQuote['02. open']).toFixed(2)}</li>
          <li>High: {parseFloat(globalQuote['03. high']).toFixed(2)}</li>
          <li>Low: {parseFloat(globalQuote['04. low']).toFixed(2)}</li>
          <li>Prev Close: {parseFloat(globalQuote['08. previous close']).toFixed(2)}</li>
        </ul>
      </div>
      <StockChart data={data} labels={labels} status={status} />
    </div>
  );
};

export default CompanyInfo;
