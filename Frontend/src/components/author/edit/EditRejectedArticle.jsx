import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { RejectedArticle } from "../../../model/user/RejectedArticle";
import { services } from "../../../service/services";
import { AuthorArticle } from "../../../model/user/AuthorArticle";
import EditOldArticle from "./EditOldArticle";
import ViewComments from "./ViewComments";
import Loading from "../../Loading";
import { ARTICLE_STATES, ROLES } from "../../../constants";

const EditRejectedArticle = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(new AuthorArticle());
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [state, setState] = useState({ reason: "", comments: [] });
  const navigate = useNavigate();
  let comments = [];
  let reason = "";
  useEffect(() => {
    services.authorServices
      .getRejectedArticle(articleId)
      .then((response) => {
        const element = response.data;
        console.log(element);
        let temp = element.article;
        const authorArticle = new AuthorArticle(
          temp.id,
          temp.title,
          temp.type,
          temp.created_at
        );
        authorArticle.body=temp.body;
        comments = element.comments;
        reason = element.rejectedArticle.reason;
        setState({ reason: reason, comments: comments });
        console.log(comments);
        setArticle(authorArticle);
        setLoading(false);
      })
      .catch((rejection) => {
        console.log(rejection);
      });
  }, []);

  const submit = () => {
    article.type = ARTICLE_STATES.PENDING;
    services.authorServices
      .updateRejectedArticle(article.Id, article)
      .then((response) => {
        if (response.status === 200) {
          alert("Update Successful!");
          navigate(`/${ROLES.list[ROLES.AUTHOR_INDEX]}`);
        }
        alert(response.data);
      })
      .catch((rejection) => alert(rejection));
  };
  if (isLoading)
    return (
      <>
        <Loading />
        <div>{errorMessage}</div>
      </>
    );
  return (
    <div>
      <EditOldArticle oldArticle={article} setter={setArticle} />
      <ViewComments reason={state.reason} comments={state.comments} />
      <div>
        <button className="btn btn-primary m-4" onClick={submit}>
          Update Article
        </button>
      </div>
      <div>{errorMessage}</div>
    </div>
  );
};

export default EditRejectedArticle;