import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState } from "react";
import Editor from "../../../ckeditor5/build/ckeditor";
import { Integration } from "./Integration";

const ViewComments = (props) => {
  const reason = props.reason;
  const comments = props.comments;
  Integration.comments = comments;
  return (
    <div style={{ marginTop: 100 }}>
      <CKEditor
        editor={Editor}
        // disabled={true}
        data={reason}
        config={{
          extraPlugins: [Integration],
          licenseKey:
            "RXJOU1RlejlaMW1hT0F3QitZd0JJRVJqamRxNkpKQVFUR2t2TWtwbWdEVjhSazBEV0htajk1KzVSTVd3LU1qQXlOREF4TWpFPQ==",
          commentsOnly: true,

          toolbar: ["comment", "commentsArchive"],
        }}
        onReady={(editor) => {
          console.log(reason);
          // addAdminUser(editor.plugins.get("Users"));
          // setComments(editor.plugins.get("CommentsRepository"));
          // editor.setData(reason);
        }}
      />
    </div>
  );
};

export default ViewComments;
