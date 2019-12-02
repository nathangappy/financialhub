import React from 'react';

import './stock-info.styles.scss';

import CompanyInfo from '../company-info/company-info.component';
import CompanyNews from '../company-news/company-news.component';

const StockInfo = props => {
  let chartData = [];
  let labels = [];
  for (let key in props.chartData) {
    labels.push(key);
    chartData.push(parseFloat(props.chartData[key]['4. close']));
  }
  chartData = chartData.filter((data, idx) => {
    return idx < 10;
  });
  labels = labels.filter((label, idx) => {
    return idx < 10;
  });
  chartData = chartData.reverse();
  labels = labels.reverse();
  return (
    <main className='stockinfo'>
      <CompanyInfo
        globalQuote={props.globalQuote}
        chartData={chartData}
        labels={labels}
      />
      <CompanyNews stockNews={props.stockNews} />
    </main>
  );
};

export default StockInfo;
