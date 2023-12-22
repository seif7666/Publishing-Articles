import { Article } from "../Article";

export class AdminArticle extends Article{
    constructor(Id=0,title='', created_date='', writtenBy='XXXXX'){
        super(Id,title,created_date);
        this.previousBody='';
    }
}