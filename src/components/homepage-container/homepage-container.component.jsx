import React from 'react';

import './homepage-container.styles.scss';

import HomeHero from '../homepage-hero/homepage-hero.component';
import HomeNews from '../homepage-news/homepage-news.component';
import HomeSide from '../homepage-side/homepage-side.component';

const HomepageContainer = ({ newsList }) => {
  return (
    <div className='home-container'>
      <HomeHero />
      <HomeNews newsList={newsList} />
      <HomeSide />
    </div>
  );
};

export default HomepageContainer;
