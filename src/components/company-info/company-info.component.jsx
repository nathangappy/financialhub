import React from 'react';

import './company-info.styles.scss';

const CompanyInfo = ({ globalQuote }) => {
  console.log(globalQuote);
  return (
    <div className='company-info'>
      <h3>{globalQuote['01. symbol']}</h3>
    </div>
  );
};

export default CompanyInfo;
