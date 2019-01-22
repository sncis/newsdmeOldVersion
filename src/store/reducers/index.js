import { REQUEST_PARAMS_MISSING, 
  RECEIVED_ARTICLES, 
  NO_ARTICLES, 
  CLEAR_STORE, 
  SET_COUNTRIES, 
  SET_CATEGORIES, 
  ARTICLES_LOADING } from "../constants/action-types";

// initialising the initial state
const initialState = {
  countries: [],
  categories: [],
  articles: [],
  isLoading: false,
  paramsMissing: false,
  errorMessage: ''
};

//declairing the reducer with the initialState as state and an action returning the state
// initial state is passed as a default parameter ( measn that when no state is given when using the reducer it uses the initial state)
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return {...state, countries: action.payload };
    
    case SET_CATEGORIES:
      return {...state, categories: action.payload };
    
    case ARTICLES_LOADING:
      return{ ...state, isLoading: action.payload };
    
    case RECEIVED_ARTICLES:
      return{...state, articles: [...state.articles, action.payload]};

    case CLEAR_STORE:
      return {...state, 
        countries: action.payload, 
        categories: action.payload, 
        articles: action.payload,
        paramsMissing: false, 
        errorMessage: ''
      };
    
    case NO_ARTICLES:
      return {...state, errorMessage: action.errorMessage };
    
    case REQUEST_PARAMS_MISSING:
      return {...state, paramsMissing : action.paramsMissing, errorMessage: action.errorMessage }
   
    default:
      return state;
  }
};

export default rootReducer;