import React from 'react';

import './homepage-news.styles.scss';

const HomeNews = ({ newsList }) => {
  let headlineList = newsList.map(story => {
    return (
      <li key={story.url}>
        <div className='story-image'>
          <img src={story.urlToImage} alt='' />
        </div>
        <div className='story-info'>
          <h3>{story.title}</h3>
        </div>
      </li>
    );
  });
  return (
    <div className='homenews'>
      <ul>{headlineList}</ul>
    </div>
  );
};

export default HomeNews;
