import { ARTICLE_STATES } from "../../constants";

export class AuthorArticle{
    constructor(Id,title, type,created_date){
        this.Id= Id;
        this.title= title;
        this.created_date= created_date;
        this.body="";
        this.type= type;
    }

    isEditable=()=>{
        const bool=this.type===ARTICLE_STATES.REJECTED;
        console.log(bool)
        console.log(this.type);
        return bool;
    }
}