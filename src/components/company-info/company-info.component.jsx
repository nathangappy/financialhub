import React from 'react';

import './company-info.styles.scss';

const CompanyInfo = ({ globalQuote }) => {
  return (
    <div className='company-info'>
      <h3>{globalQuote['01. symbol']}</h3>
      <p>{parseFloat(globalQuote['05. price']).toFixed(2)}</p>
      <ul>
        <li>Open: {parseFloat(globalQuote['02. open']).toFixed(2)}</li>
        <li>High: {parseFloat(globalQuote['03. high']).toFixed(2)}</li>
        <li>Low: {parseFloat(globalQuote['04. low']).toFixed(2)}</li>
        <li>Prev Close: {parseFloat(globalQuote['08. previous close']).toFixed(2)}</li>
      </ul>
    </div>
  );
};

export default CompanyInfo;
