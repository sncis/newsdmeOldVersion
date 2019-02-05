import React from 'react';
import Header from '../header/Header';
import CustomisedNewsInput from './CustomisedNewsInput';
import ArticleList from './ArticleList';

const CustomisedNewsPage = () => (
  <div>
    <Header headerLine="Your Daily News Digit" />
      <CustomisedNewsInput />
    <ArticleList />
  </div>
)

export default CustomisedNewsPage;