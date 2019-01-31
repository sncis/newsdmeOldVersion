import React from 'react';
import TopHeadlinePage from '../components/articles/TopHeadlinesPage';
import Header from '../components/header/Header';
import SelectionParamsTopHeadlinesForm from '../components/articles/SelectionParamsTopHeadlines';
import ArticleList from '../components/articles/ArticleList';

describe("TopHeadlinePage", () => {
  it("should render", () => {
    const topHeadlinePage = shallow(<TopHeadlinePage />);
    expect(topHeadlinePage).toHaveLength(1);
  });

  it("should render childrens", () => {
    const wrapper = shallow(<TopHeadlinePage />);
    const header = wrapper.find(Header);
    const selectionParamsTopHeadlinesForm = wrapper.find(SelectionParamsTopHeadlinesForm);
    const articleList = wrapper.find(ArticleList);

    expect(header).toHaveLength(1);
    expect(selectionParamsTopHeadlinesForm).toHaveLength(1);
    expect(articleList).toHaveLength(1);
  });
})