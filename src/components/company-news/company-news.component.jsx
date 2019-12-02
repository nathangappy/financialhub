import React from 'react';

import './company-news.styles.scss';

const CompanyNews = ({ stockNews }) => {
  let newsList = stockNews.map(item => {
    return (
      <li key={`${item.news_url} + ${Math.random()}`}>
        <a href={`${item.news_url}`} target='_blank' rel='noopener noreferrer'>
          <img src={`${item.image_url}`} alt='' />
          <p>{item.title}</p>
        </a>
      </li>
    );
  });

  return (
    <div className='company-news'>
      <div className='company-news-group'>
        <ul>{newsList}</ul>
      </div>
    </div>
  );
};

export default CompanyNews;
