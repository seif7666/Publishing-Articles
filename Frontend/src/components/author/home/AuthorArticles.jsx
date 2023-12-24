import React, { useEffect, useRef, useState } from "react";
import { services } from "../../../service/services";
import Loading from "../../Loading";
import { AuthorArticle } from "../../../model/user/AuthorArticle";
import { ARTICLE_STATES, LINKS } from "../../../constants";
import { Link } from "react-router-dom";
import { UserFactory } from "../../../model/user/UserFactory";

const fieldColors = new Map([
  [ARTICLE_STATES.PENDING, "text-primary"],
  [ARTICLE_STATES.PUBLISHED, "text-success"],
  [ARTICLE_STATES.REJECTED, "text-danger"],
]);
const ArticleHeader = (props) => {
  let article = new AuthorArticle();
  article = props.article;
  let date= new Date(article.created_date);
  return (
    <div className={`article-header-div ${fieldColors.get(article.type)}`} >
      <h5 className="h5">{article.title}</h5>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "25%",
        }}
      >
       <span style={{fontSize:'large', fontWeight:'bold'}}>
         {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</span>
        {article.isEditable() && <Link to={LINKS.EDIT_REJECTED_ARTICLE+"/"+article.Id}>Edit</Link>}
      </div>
    </div>
  );
};
const ArticleTable = (props) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const userId = UserFactory.getInstance().getUser().Id;
  useEffect(() => {
    services.authorServices
      .getArticleHeaders(userId, '', 0)
      .then((res) => {
        const newArticles = [];
        res.forEach((element) => {
          newArticles.push(
            new AuthorArticle(
              element.id,
              element.title,
              element.type,
              element.created_at
            )
          );
          setArticles(newArticles);
        });
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((reason) => console.log(reason));
  }, [props.type]);
  if (isLoading) return <Loading />;
  return (
    <div id="article-headers-table">
      {articles.map((article) => (
        <ArticleHeader article={article} />
      ))}
    </div>
  );
};

const AuthorArticles = () => {
  return (
    <div style={{ margin: 20, marginTop: "5em" }}>
      <div>
        <ArticleTable />
      </div>
    </div>
  );
};

export default AuthorArticles;
