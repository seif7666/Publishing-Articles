import React, { useEffect, useState } from "react";
import Editor from "../../../ckeditor5/build/ckeditor";
import { useNavigate, useParams } from "react-router";
import AdminNavbar from "../AdminNavbar";
import { AdminArticle } from "../../../model/admin/AdminArticle";
import { UserFactory } from "../../../model/user/UserFactory";
import Loading from "../../Loading";
import { services } from "../../../service/services";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { CommentsIntegration, appData } from "./Integration";
import { LINKS, ROLES } from "../../../constants";
import BodyTracker from "./BodyTracker";

function encapsulateComments(comments) {
  const totalComments = [];
  for (let thread of comments) {
    for (let innerComment of thread.comments) {
      const record = {
        threadId: thread.id,
        contextType: thread.context.type,
        contextValue: thread.context.value,
        commentId: innerComment.id,
        content: innerComment.content,
        createdAt: innerComment.createdAt,
      };
      totalComments.push(record);
    }
  }
  return totalComments;
}
const AdminArticleEditor = (props) => {
  let article = props.article;
  const [editor, setEditor] = useState(null);
  const [comments, setComments] = useState([]);
  const navigation = useNavigate();
  const setCommentsFromEditor = (e) => {
    const commentsRepositoryPlugin = editor.plugins.get("CommentsRepository");
    setComments(commentsRepositoryPlugin.getCommentThreads());
    console.log(comments[0]);
  };
  const resolve = (message) => {
    alert(message);
    navigation("/" + ROLES.list[ROLES.ADMIN_INDEX]);
  };
  const reject = (errorMessage) => alert(errorMessage);
  const acceptArticle = () => {
    services.adminServices
      .acceptArticle(article.Id)
      .then((response) => resolve("Successfully Published!"))
      .catch((rejection) => reject(rejection));
  };

  const rejectArticle = () => {
    const body = {
      rejectionNotes: editor.getData(),
      commentsRepo: encapsulateComments(comments),
      adminId: UserFactory.getInstance().getUser().Id,
    };
    services.adminServices
      .rejectArticle(article.Id, body)
      .then((response) => resolve("Successfully Rejected!"))
      .catch(reject);
  };
  return (
    <div>
      <div style={{ marginTop: "5em" }}>
        <h2>{article.title}</h2>
      </div>
      <div>
        <CKEditor
          editor={Editor}
          // disabled={true}
          data={article.body}
          config={{
            commentsOnly: true,
            extraPlugins: [CommentsIntegration],
            licenseKey:
              "RXJOU1RlejlaMW1hT0F3QitZd0JJRVJqamRxNkpKQVFUR2t2TWtwbWdEVjhSazBEV0htajk1KzVSTVd3LU1qQXlOREF4TWpFPQ==",
            toolbar: [
              "heading",
              "bold",
              "italic",
              "numberedList",
              "bulletedList",
              "|",
              "highlight",
              "highlight:greenMarker",
              "|",
              "comment",
              "commentsArchive",
            ],
          }}
          onReady={(editorr) => {
            // console.log("Editor is ready to use!", editorr);
            setEditor(editorr);
          }}
          onChange={(event) => {
            // console.log(event);
            // // editor.getData();
            setCommentsFromEditor(null);
          }}
          onBlur={(event, editor) => {
            setCommentsFromEditor(null);
          }}
          onFocus={(event, editor) => {
            setCommentsFromEditor(null);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "30%",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        <button className="btn btn-success" onClick={acceptArticle}>
          Accept
        </button>
        <button className="btn btn-danger" onClick={rejectArticle}>
          Reject
        </button>
      </div>
    </div>
  );
};

const AdminReviewArticle = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [changes, setChanges] = useState("");
  const user = UserFactory.getInstance().getUser();
  useEffect(() => {
    services.adminServices
      .getArticle(articleId)
      .then((data) => {
        const newArticle = new AdminArticle(
          articleId,
          data.article.title,
          "",
          ""
        );
        newArticle.body = data.article.body;
        setArticle(newArticle);
        if (data.recentArticle !== null) setChanges(data.changes);
      })
      .catch((rejection) => alert(rejection));
  }, []);
  return (
    <div>
      <AdminNavbar firstName={user.getFirstName()} />
      {article !== null && (
        <div>
          <AdminArticleEditor article={article} />
          <BodyTracker changes={changes} />
        </div>
      )}
      {article === null && <Loading />}
    </div>
  );
};

export default AdminReviewArticle;
