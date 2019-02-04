import React from 'react';
import uuidv1 from "uuid";

import Article from '../components/articles/Article';

describe("Article", () => {
  it("should render", () => {
    const anArticle = [
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
      const article = shallow(<Article articles={anArticle} key={uuidv1()} />);
      const articleItem = article.find('.article-item');
      console.log(article.debug());

      expect(Article).toHaveLength(1);
      expect(articleItem).toHaveLength(1);
  });
})