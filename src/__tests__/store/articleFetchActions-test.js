import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
// import moxios from 'moxios';
import * as actions  from '../../store/actions/articleFetchActions';
import { SET_CATEGORIES, SET_COUNTRIES, ARTICLES_LOADING, RECEIVED_ARTICLES, FETCH_ARTICLE_ERROR, NO_ARTICLES, REQUEST_PARAMS_MISSING } from '../../store/constants/action-types';



const middleware = [thunk]
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe('store', () => {
  beforeEach(() => {
    store.clearActions();
    // moxios.install();
  });

  afterEach(() => {
    // moxios.uninstall()
  })

  it("should dispatch SET_CATEGORIE action and set right categorie", () => {
    const expectedAction = [
      {
        'type': SET_CATEGORIES,
        'payload': 'business',
    },
    ];
    store.dispatch(actions.setCategories('business'));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should dispatch SET_COUNRTIES action and set country', () => {
    const expectedAction = [
      {
      'type': SET_COUNTRIES,
      'payload': 'us'
    },
  ];
  store.dispatch(actions.setCountries('us'));
  expect(store.getActions()).toEqual(expectedAction);
  });

  it("should dispatch ARTICLE_Loading action", () => {
    const expectedAction = [
      {
        'type': ARTICLES_LOADING,
        'payload': true
      },
    ];
    store.dispatch(actions.articlesIsLoading(true));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("should dispatch RECIVED_ARTICLE action", () => {
   const article = {
      "article": 
      {
      "author": "Aayush Jindal",
      "title": "Bitcoin Price Watch: BTC Bears Eyeing Test of $3,000",
      "description": "Bitcoin price extended its decline",
      "url": "https://www.newsbtc.com/2019/01/29/",
      "urlToImage": "https://www.newsbtc.com/wp-content",
      "publishedAt": "2019-01-29T06:45:44Z",
      "content": "Bitcoin price extended $3,440"
      },
    
    };
    const expectedAction = [ 
      {
        'type': RECEIVED_ARTICLES,
        'payload': article
      },
    ];

    store.dispatch(actions.receivedArticlesSuccessful(article));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("should dispatch FETCH_ARTICLE_ERROR", () => {
    const errorMessage = "noop";
    
    const expectedAction = [
      {
      'type': FETCH_ARTICLE_ERROR,
      'errorMessage': errorMessage
      }
   ];

    store.dispatch(actions.fetchArticleError(errorMessage));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("should dispatch NO_ARTCILE", () => {
    const errorMessage = "nooop"
    const expectedAction = [ 
      {
        'type': NO_ARTICLES,
        'errorMessage': errorMessage
      }
    ]
    store.dispatch(actions.noArticlesFound(errorMessage));
    expect(store.getActions()).toEqual(expectedAction);
  })

  it("should dispatch REQUEST_PARAMS_MISSING", () => {
    const errorMessage= "upps"
    const expectedAction = [ 
      {
        'type': REQUEST_PARAMS_MISSING,
        'errorMessage': errorMessage,
        'paramsMissing': true
      }
    ]
    store.dispatch(actions.fetchArticleParamsMissingError(errorMessage));
    expect(store.getActions()).toEqual(expectedAction);
  });

  // it("should dispatch fetchArticles actions", () => {
  //   const article = {
  //     "article": 
  //     {
  //     "author": "Aayush Jindal",
  //     "title": "Bitcoin Price Watch: BTC Bears Eyeing Test of $3,000",
  //     "description": "Bitcoin price extended its decline",
  //     "url": "https://www.newsbtc.com/2019/01/29/",
  //     "urlToImage": "https://www.newsbtc.com/wp-content",
  //     "publishedAt": "2019-01-29T06:45:44Z",
  //     "content": "Bitcoin price extended $3,440"
  //     },
  //   };

  //   // axios.get.mockImplementation( () =>
  //   //  Promise.resolve({ data: { article } })
  //   // );

  //   const expectedActions = [
  //     { type: ARTICLES_LOADING, payload: false },
  //     { type: RECEIVED_ARTICLES, payload: article },
  //   ];
  //   const newStore = mockStore();
  //   newStore.dispatch(actions.fetchArticles()).then(() => {
  //     expect(store.getActions().toEqual(expectedActions))
  //   });
  // })
  // it("should dispatch fetchArticle action", () => {
  //   const article = {
  //     "article": 
  //     {
  //     "author": "Aayush Jindal",
  //     "title": "Bitcoin Price Watch: BTC Bears Eyeing Test of $3,000",
  //     "description": "Bitcoin price extended its decline",
  //     "url": "https://www.newsbtc.com/2019/01/29/",
  //     "urlToImage": "https://www.newsbtc.com/wp-content",
  //     "publishedAt": "2019-01-29T06:45:44Z",
  //     "content": "Bitcoin price extended $3,440"
  //     },
  //   };

  //   moxios.wait(() => {
  //     const request = moxios.requests.mostRecent();
  //     request.respondWith({
  //       status: 200,
  //       response: article,
  //     })
  //   })
  //   const expectedActions = [
  //     { type: ARTICLES_LOADING, payload: false },
  //     { type: RECEIVED_ARTICLES, payload: article },
  //   ];
  //   const newStore = mockStore()

  //   return newStore.dispatch(actions.fetchArticles()).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   })
  // })
})
