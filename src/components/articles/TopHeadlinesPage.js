import React from 'react';
import SelectionParamsTopHeadlinesForm from './SelectionParamsTopHeadlines';
import Header from '../header/Header';
import ArticleList from './ArticleList';

const TopHeadnlinesPage = () => (
  <div>
    <Header headerLine="Todays Top Headlines" />
      <SelectionParamsTopHeadlinesForm />
    <ArticleList />
  </div>
)

export default TopHeadnlinesPage;