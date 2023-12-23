import React, { useEffect, useState } from "react";
import Editor from '../../../ckeditor5/build/ckeditor';
import { useParams } from "react-router";
import AdminNavbar from "../AdminNavbar";
import { AdminArticle } from "../../../model/admin/AdminArticle";
import { UserFactory } from "../../../model/user/UserFactory";
import Loading from "../../Loading";
import { services } from "../../../service/services";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { CommentsIntegration, appData } from "./Integration";

const AdminArticleEditor = (props) => {
  let article = props.article;
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    // if (editor !== null) editor.setData(article.body);
  }, [editor]);
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
            commentsOnly:true,
            extraPlugins: [ CommentsIntegration ],
            licenseKey:'RXJOU1RlejlaMW1hT0F3QitZd0JJRVJqamRxNkpKQVFUR2t2TWtwbWdEVjhSazBEV0htajk1KzVSTVd3LU1qQXlOREF4TWpFPQ==',
            toolbar: ["heading", "bold", "italic", "numberedList", "bulletedList", '|','highlight', 'highlight:greenMarker', '|', 'comment', 'commentsArchive'],
          }}
          onReady={(editorr) => {
            console.log("Editor is ready to use!", editorr);
            // setEditor(editorr);
          }}
          onChange={(event) => {
            console.log(event);
            // editor.getData();
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    </div>
  );
};

const AdminReviewArticle = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const user = UserFactory.getInstance().getUser();
  useEffect(() => {
    services.adminServices
      .getArticle(articleId)
      .then((data) => {
        const newArticle = new AdminArticle(articleId, data.title, "", "");
        newArticle.body = data.body;
        setArticle(newArticle);
      })
      .catch((rejection) => alert(rejection));
  }, []);
  return (
    <div>
      <AdminNavbar firstName={user.getFirstName()} />
      {article !== null && <AdminArticleEditor article={article} />}
      {article === null && <Loading />}
    </div>
  );
};

export default AdminReviewArticle;
