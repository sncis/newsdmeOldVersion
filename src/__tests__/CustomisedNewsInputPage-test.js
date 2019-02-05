import React from 'react';
import CustomisedNewsInputPage from '../components/articles/CustomisedNewsPage';
import Header from '../components/header/Header';
import ArticleList from '../components/articles/ArticleList';
import CustomisedNewsInput from '../components/articles/CustomisedNewsInput';


describe("CustomisedNewsImputPage", () => {
  it("should render", () => {
    const wrapper = shallow(<CustomisedNewsInputPage />);
    expect(wrapper).toHaveLength(1);
  });

  it("should render childrens", () => {
    const wrapper = shallow(<CustomisedNewsInputPage />);

    const header = wrapper.find(Header);
    const articleList = wrapper.find(ArticleList);
    const customisedNewsInpu = wrapper.find(CustomisedNewsInput);

    expect(header).toHaveLength(1);
    expect(articleList).toHaveLength(1);
    expect(customisedNewsInpu).toHaveLength(1);
  })
})