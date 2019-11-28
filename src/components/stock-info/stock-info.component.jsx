import React from 'react';

import './stock-info.styles.scss';

import CompanyInfo from '../company-info/company-info.component';
import CompanyNews from '../company-news/company-news.component';

const StockInfo = props => {
  return (
    <main className='stockinfo'>
      <CompanyInfo globalQuote={props.globalQuote} />
      <CompanyNews />
    </main>
  );
};

export default StockInfo;
