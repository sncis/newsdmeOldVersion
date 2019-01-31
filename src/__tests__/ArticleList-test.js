import React from 'react';
import ArticleList from '../components/articles/ArticleList';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import Article from '../components/articles/Article';


describe("ArticleList", () => {
  let store;
  beforeEach(()=>{
    store = configureStore();
  });

  it("should render with one article", () => {
    const anArticle =  [
        {
        "source": {
          "id": null,
          "name": "Cnet.com"
        },
          "author": "Claire Reilly",
          "title": "John McAfee plans to run for president 'in exile' using thousands of masked doppelgangers - CNET",
          "description": "The crypto-enthusiast has donned a wig, jumped on a boat and is now on the run from the IRS. But that won’t stop his 2020 presidential campaign.",
          "url": "https://www.cnet.com/news/john-mcafee-plans-to-run-for-president-in-exile-using-thousands-of-masked-doppelgangers/",
         "urlToImage": "https://cnet2.cbsistatic.com/img/m11WL2F25ludzMGXxktW4BmlKRU=/724x407/2019/01/23/ca8b43f1-15d0-4d6d-9458-2cc86e09b2fc/gettyimages-591306354.jpg",
          "publishedAt": "2019-01-23T05:21:12Z",
          "content": "The software tycoon's"
        }];

    const initialState = {
      articles: [anArticle],
      paramsMissing: false,
      errorMessage: '',
      isLoading: false
    }

    const mockedStore = store(initialState)
    const articleList = mount(
      <Provider store={mockedStore}>
        <ArticleList /> 
      </Provider>
    );    
    const article = articleList.find(Article);
    
    expect(articleList).not.toBeNull();
    expect(article).toHaveLength(1);
;
  });
  it('should render noArticles when no article found', () => {
    const initalState = {
      articles: [],
      paramsMissing: false,
      errorMessage: 'no article found',
      isLoading:false
    }

    const mockedStore = store(initalState);
    const articleList = mount(
      <Provider store={mockedStore}>
        <ArticleList />
      </Provider>
    );
  
    expect(articleList.find('.noArticles')).toHaveLength(1);
  });
  it("should render errorMessage when params are missing", () => {
    const initialState ={
      articles:[],
      paramsMissing: true,
      errorMessage: "params are missing",
      isLoading: false
    }
    const mockedStore = store(initialState);

    const articleList = mount(
      <Provider store={mockedStore}>
        <ArticleList />
      </Provider>
    );

    expect(articleList.find('.paramsMissing')).toHaveLength(1);
  });
  it("should render isLoading message when articles are loading", () => {
    const initalState = {
      articles: [],
      paramsMissing:false,
      errorMessage: '',
      isLoading: true,
    }

    const mockedStore = store(initalState);
    const articleList = mount(
      <Provider store={mockedStore}>
        <ArticleList />
      </Provider>
    )
    expect(articleList.find('.loading')).toHaveLength(1);
  })
})