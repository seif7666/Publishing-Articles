import React, { useRef, useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Loading from "../../Loading";
import {services} from "../../../service/services";
import { UserFactory } from "../../../model/user/UserFactory";
import { useNavigate } from "react-router";
import { ARTICLE_STATES, LINKS, ROLES } from "../../../constants";
import { AuthorArticle } from "../../../model/user/AuthorArticle";

const CreateEditor = () => {
  const [editor, setEditor] = useState(null);
  const [isWaiting, setWaiting] = useState(false);
  const navigation = useNavigate();
  const titleRef= useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    setWaiting(true);
    console.log(titleRef.current.value);
    const article=new AuthorArticle('',titleRef.current.value);
    article.body=editor.getData();
    services.authorServices
      .createArticle(UserFactory.getInstance().getUser().Id,article)
      .then((response) => {
        alert("Published Successfully!");
        navigation("/" + ROLES.list[ROLES.AUTHOR_INDEX]);
        setWaiting(false);
      })
      .catch((rejection) => {
        alert(rejection);
        setWaiting(false);
      });
  };
  return (
    <div style={{ margin: 50 }}>
      <div>
        <form>
          <div
            className="form-group"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <input
              className="form-control col-sm-4"
              placeholder="Title"
              style={{ padding: 10, fontSize: "large" }}
              ref={titleRef}
            />
          </div>
        </form>
      </div>
      <div style={{ marginTop: 50 }}>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Welcome to world of creativity!</p>"
          config={{
            toolbar: ["heading", "bold", "italic", "item", "bulletedList"],
          }}
          onReady={(editorr) => {
            console.log("Editor is ready to use!", editorr);
            setEditor(editorr);
          }}
          onChange={(event) => {
            console.log(event);
            editor.getData();
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
      <button className="btn btn-primary m-4" onClick={onSubmit}>
        Create Article
      </button>
      {isWaiting && <Loading />}
    </div>
  );
};

export default CreateEditor;
