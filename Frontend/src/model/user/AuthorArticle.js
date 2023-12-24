import { ARTICLE_STATES } from "../../constants";
import { Article } from "../Article";

export class AuthorArticle extends Article {
  constructor(Id = 0, title = "", type = "", created_date = "") {
    super(Id, title, created_date);
    this.type = type;
  }

  isEditable = () => {
    const bool = this.type === ARTICLE_STATES.REJECTED;
    console.log(bool);
    console.log(this.type);
    return bool;
  };
}
