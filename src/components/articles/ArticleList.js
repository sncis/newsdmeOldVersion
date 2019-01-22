import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";

import Article from "./Article";
import "./ArticleList.css";

const mapStateToProps = (state) => {
  return { 
    articles: state.articles,
    paramsMissing: state.paramsMissing,
    errorMessage: state.errorMessage,
    isLoading: state.isLoading

  };
}

const ListArticle = ({ articles, errorMessage, isLoading }) => (

    <div className="article-list">
      { articles.length > 0 && articles.map(element=> (
        <Article articles={element} key={uuidv1()}/>        
      ))}
      { articles.length === 0 && <p className="noArticles">{ errorMessage }</p> }
      { isLoading && <p className="loading">Loading....! we are looing for articles</p>}
    </div>
    
   
);

const ArticleList = connect(mapStateToProps) (ListArticle); 
export default ArticleList;