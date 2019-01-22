import React from "react";
import uuidv1 from "uuid";
import "./Article.css";


const Article = ({ articles }) => (
  <div className="articles">
    {articles.map(item => (
      <div className="article-item" key={uuidv1()}>
        <a className="link-to-artilce-card" href={item.url} target="blank">
          <div className="thumbnail">
            <img src={item.urlToImage} alt="thumbnail" />
          </div>
          <h2 className="headline">{item.title}</h2>
          <p className="description">{item.description}</p>
        </a>
        <a href={item.source.name} target="blank">
          <p className="source">source: {item.source.name}</p>
        </a>

      </div>
    ))}
  </div>
);

export default Article;  