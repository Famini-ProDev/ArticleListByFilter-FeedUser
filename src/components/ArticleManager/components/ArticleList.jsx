import React from "react";

const ArticleList = ({ articles }) => {
  return (
    <div>
      <h2>Articles</h2>
      {articles?.length > 0 ? (
        <ul className="list-none">
          {articles?.map((article, index) => (
            <li key={index} className="bg-slate-100 p-5 my-5 rounded-lg">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <p>Source: {article.source.name}</p>
              <p>Published At: {article.publishedAt}</p>
              <p>Author : {article.author}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className="text-center">{"There is no data"}</h2>
      )}
    </div>
  );
};

export default ArticleList;
