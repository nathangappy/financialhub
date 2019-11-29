import React from 'react';

import './searchbar.styles.scss';

const SearchBar = props => {
  let companyLookupMatches = props.companyMatches.map(match => {
    return (
      <li key={match['1. symbol']}>
        <p>
          {match['1. symbol']} - {match['2. name']}
        </p>
      </li>
    );
  });
  return (
    <div className='searchbar'>
      <form action='' onSubmit={props.handleTickerSearch} className='tickerSearch'>
        <label htmlFor='tickerSearch'>Get Financial Data</label>
        <input type='text' onChange={props.handleSearchChange} value={props.tickerSearch} name='tickerSearch' />
        <button>Get Info</button>
      </form>
      <form action='' onSubmit={props.handleCompanyLookup} className='companySearch'>
        <label htmlFor='companySearch'>Search for Company Symbol</label>
        <input type='text' onChange={props.handleSearchChange} value={props.companySearch} name='companySearch' />
        <button>Find Symbol</button>
      </form>
      <ul>{companyLookupMatches}</ul>
    </div>
  );
};

export default SearchBar;
