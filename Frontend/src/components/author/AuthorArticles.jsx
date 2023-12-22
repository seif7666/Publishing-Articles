import React, { useEffect, useRef, useState } from "react";
import { services } from "../../service/services";



const ArticleTable=(props)=>{
    const [articles, setArticles]= useState([]);
    useEffect(()=>{
        services.authorServices.getArticleHeaders(props.userID,props.type,0).then(
          (res)=>console.log(res)
        ).catch((reason)=>console.log(reason));
    }, [])
    
    return(<>
    </>)

}
const AuthorArticles = () => {
  const articleStates = ["Published", "Pending", "Rejected"];
  const [state, setState] = useState(articleStates[0]);
  return (
    <div style={{ margin: 20, marginTop: "5em" }}>
      <div className="input-group">
        <select
          id="select-article-type"
          onChange={(event) => {
            setState(event.target.value);
          }}
        >
          {articleStates.map((state) => (
            <option value={state}>{state}</option>
          ))}
        </select>
      </div>
      <div>
        <ArticleTable />
      </div>
    </div>
  );
};

export default AuthorArticles;
