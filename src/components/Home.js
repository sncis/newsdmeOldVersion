import React from 'react';
import Header from './header/Header';
import { Link } from 'react-router-dom';
import SelectionThumbnail from './SelectionThumbnail';

const Home = () => (
  <div>
    <Header headerLine="welcome to newsdMe" />
    <div className="thumbnailSelection">
    <Link to="/todays-top-headlines">
      <SelectionThumbnail name="todays-headlines" headline="get todays hottest headlines" description="select your favorit countries and topics and get news from all over the world" />
    </Link>
    <Link to="/customised-news">
      <SelectionThumbnail name="customised-news" headline="get news for your favorite topics" description="get customised articles about your favorit topics" />
    </Link>
    </div>
  </div>

  );

export default Home;