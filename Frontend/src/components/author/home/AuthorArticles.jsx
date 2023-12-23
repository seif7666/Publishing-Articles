import React, { useEffect, useRef, useState } from "react";
import { services } from "../../../service/services";
import Loading from "../../Loading";
import { AuthorArticle } from "../../../model/user/AuthorArticle";
import { ARTICLE_STATES } from "../../../constants";
import { Link } from "react-router-dom";
import { UserFactory } from "../../../model/user/UserFactory";


const ArticleHeader=(props)=>{
  let article= new AuthorArticle();
  article=props.article;
  return(
    <div className="article-header-div">
      <h5 className="h5">
        {article.title}
      </h5>
      <div style={{display:'flex',justifyContent:'space-between', width:'25%'}}>
        {article.created_date}
      {article.isEditable() && <Link>Edit</Link>}
      </div>
    </div>
  )
}
const ArticleTable = (props) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const userId= UserFactory.getInstance().getUser().Id;
  useEffect(() => {
    services.authorServices
      .getArticleHeaders(userId, props.type, 0)
      .then((res) => {
        const newArticles=[];
        res.forEach(element => {
          console.log(element.Created_Date);
          newArticles.push(new AuthorArticle(element.id,element.title,props.type,element.created_at));
          setArticles(newArticles);
        });
        setTimeout(()=>setLoading(false),1000);
      })
      .catch((reason) => console.log(reason));
  }, [props.type]);
  if (isLoading) return <Loading />;
  return (
    <div id="article-headers-table">
      {articles.map((article)=><ArticleHeader article={article} />)}
    </div>
  );
};

const AuthorArticles = () => {
  const articleStates = [ARTICLE_STATES.REJECTED, ARTICLE_STATES.PUBLISHED, ARTICLE_STATES.PENDING];
  const [state, setState] = useState(articleStates[0]);
  return (
    <div style={{ margin: 20, marginTop: "5em" }}>
      <div className="input-group">
        <select
          id="select-article-type"
          onChange={(event) => {
            setState(event.target.value);
            console.log(state);
          }}
        >
          {articleStates.map((state) => (
            <option value={state}>{state}</option>
          ))}
        </select>
      </div>
      <div>
        <ArticleTable type={state}/>
      </div>
    </div>
  );
};

export default AuthorArticles;
