import React, { useState } from "react";
import { AuthorArticle } from "../../../model/user/AuthorArticle";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "../../../ckeditor5/build/ckeditor";

const EditOldArticle = (props) => {
  const [editor, setEditor] = useState(null);
  let article = props.oldArticle;
  return (
    <div style={{ margin: 50 }}>
      <h3 className="h3">{article.title}</h3>
      <div style={{ marginTop: 50 }}>
        <CKEditor
          editor={Editor}
          data={article.body}
          config={{
            licenseKey:
              "RXJOU1RlejlaMW1hT0F3QitZd0JJRVJqamRxNkpKQVFUR2t2TWtwbWdEVjhSazBEV0htajk1KzVSTVd3LU1qQXlOREF4TWpFPQ==",
            toolbar: [
              "heading",
              "bold",
              "italic",
              "|",
              "numberedList",
              "bulletedList",
            ],
          }}
          onReady={(editorr) => {
            setEditor(editorr);
          }}
          onChange={(event) => {
            article.body = editor.getData();
            props.setter(article);
          }}
        />
      </div>
    </div>
  );
};

export default EditOldArticle;
