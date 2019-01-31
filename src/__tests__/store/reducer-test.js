import { Reducer } from 'redux-testkit';
import rootReducer from '../../store/reducers/index';
import { SET_CATEGORIES, SET_COUNTRIES, ARTICLES_LOADING, RECEIVED_ARTICLES, FETCH_ARTICLE_ERROR, REQUEST_PARAMS_MISSING, NO_ARTICLES, CLEAR_STORE} from '../../store/constants/action-types';


const initialState = {
  countries: [],
  categories: [],
  articles: [],
  isLoading: false,
  paramsMissing: false,
  errorMessage: ''
};

describe("rootReducer", () => {
  it("should have initial state", () => {
    expect(rootReducer()).toEqual(initialState)
  });
  it('should handle SET_CATEGORIE action on initialState', () => {
    const action = { 
      'type': SET_CATEGORIES,
      'payload': 'business'
    }
    const newState = {
      ...initialState,
      categories: action.payload,
    }
    Reducer(rootReducer).expect(action).toReturnState(newState);
  });

  it('should handle SET_COUTRIES action on inistalState', () => {
    const action = {
      'type': SET_COUNTRIES,
      'payload': ['us', 'de', 'gb']
    }
    const newState = {
      ...initialState,
      countries: ['us','de','gb']
    }
    Reducer(rootReducer).expect(action).toReturnState(newState);
  });

  it('should handle ARTILCES_LOADING action when articles are loding', () => {
    const action = {
      'type': ARTICLES_LOADING,
      'payload':true
    }
    const newState = {
      ...initialState,
      isLoading: true
    }
    Reducer(rootReducer).expect(action).toReturnState(newState);
  });

  it("should handle RECEIVED_ARTICLES action on inistialState", () => {
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
        }
    };
  
    const action = {
      'type': RECEIVED_ARTICLES,
      'payload': article
    }

    const newState = {
      ...initialState,
      articles: [article]
    }
    Reducer(rootReducer).expect(action).toReturnState(newState);
  })

  it("should handle FETCH_ARTICLE_ERROR on initialState", () => {
    const errorMessage = "uuppps something went wrong"
    
    const action = {
      'type': FETCH_ARTICLE_ERROR,
      'errorMessage': errorMessage
    }

    const newState = {
      ...initialState,
      errorMessage: errorMessage
    }

    Reducer(rootReducer).expect(action).toReturnState(newState);
  })

  it("should handle REQUEST_PARAMS_MISSING on initialState", () => {
    const errorMessage = "parmas missing";
    const action = {
      'type': REQUEST_PARAMS_MISSING,
      'errorMessage': errorMessage,
      'paramsMissing': true
    }
    const newState = {
      ...initialState,
      errorMessage: errorMessage,
      paramsMissing: true
    }
    Reducer(rootReducer).expect(action).toReturnState(newState);
  })

  it("should handle NO_ARTICLE action on initialState", () => {
    const errorMessage = "no article";
    const action = { 
      'type': NO_ARTICLES,
      'errorMessage': errorMessage
    }
    const newState = {
      ...initialState,
      errorMessage: errorMessage
    }
    Reducer(rootReducer).expect(action).toReturnState(newState);
  })

  it("should handle CLEAR_STORE action", () => {
    const action = {
      'type': CLEAR_STORE,
      'countries': [], 
      'categories': [], 
      'articles': [],
      'isLoading': false,
      'paramsMissing': false, 
      'errorMessage': ''
    }
    const newState = {
      ...initialState,
    }
    Reducer(rootReducer).expect(action).toReturnState(newState)
  })

  it('should use initialState when action is not defined', () => {
    const action = {
      'type': undefined,
      'payload': []
    }

    const newState = {
      ...initialState
    }
    Reducer(rootReducer).expect(action).toReturnState(newState)
  })

})