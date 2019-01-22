import axios from 'axios';
import {API_KEY } from '../constants/keys';
import { ARTICLES_LOADING, 
  RECEIVED_ARTICLES, 
  FETCH_ARTICLE_ERROR, 
  SET_CATEGORIES, 
  SET_COUNTRIES, 
  CLEAR_STORE, 
  NO_ARTICLES, 
  REQUEST_PARAMS_MISSING} from "../constants/action-types";

  export const clearStore = () => ({
    type: CLEAR_STORE,
    payload: []
  })

  export const setCountries = (countries) => ({
    type: SET_COUNTRIES,
    payload: countries
  })
  
  export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories
  })
  
  export const articlesIsLoading = (value) => ({
    type: ARTICLES_LOADING,
    payload: value
  })
  
  export const receivedArticlesSuccessful = (articles) => ({
    type: RECEIVED_ARTICLES,
    payload: articles
  })
  
  export const fetchArticleError = () => ({
    type: FETCH_ARTICLE_ERROR,
    payload: "uuppps something went wrong"
  })
  
  export const noArticlesFound = () => ({
    type: NO_ARTICLES,
    errorMessage: "No articles found for this keyword(s)! Please try again"
  })
  
  export const fetchArticleParamsMissingError = (message) => ({
    type: REQUEST_PARAMS_MISSING,
    errorMessage: message,
    paramsMissing: true
  })
  
  
  export const fetchArticles = () => {
    return(dispatch, getState) => {
      const countries = getState().countries.size > 0 ? getState().countries : [''];
      const categories = getState().categories.size > 0 ? getState().categories : [''];
      
      dispatch(articlesIsLoading(true));
      for(const country of countries)
        for(const cat of categories)
          axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${cat}&apiKey=${API_KEY}`)
        .then(data => {
          dispatch(articlesIsLoading(false));
          dispatch(receivedArticlesSuccessful(data.data.articles))
        })
        .catch(error => {
          if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.header);
            dispatch(fetchArticleParamsMissingError("Ups! you forgot to tell us what you are interested in! Please selest at least one country OR a category"))
          }else if(error.request){
            console.log(error.request);
          }
          dispatch(fetchArticleError());
        })
    }
  }
  
  export const fetchCustomisedArticles = (query) => {
    return dispatch => {
      dispatch(articlesIsLoading(true));
  
      axios.get(`https://newsapi.org/v2/everything?q=${query.split(' ').join("+")}&apiKey=${API_KEY}`)
      .then(data => {
        if(!data.data.articles.length){
          dispatch(articlesIsLoading(false));
          dispatch(noArticlesFound());
        }else{
          dispatch(articlesIsLoading(false));
          dispatch(receivedArticlesSuccessful(data.data.articles))
        }
        })
      .catch(error => {
        if(error.response){
          console.log(error.response.status);
          console.log(error.response.message);
          dispatch(fetchArticleParamsMissingError("please enter a least one Keyword"));
  
        }else if(error.request){
          dispatch(fetchArticleError());
        }else{
          console.log("ERROR: " + error.message);
          dispatch(fetchArticleError());
        }
      })
     } 
  }