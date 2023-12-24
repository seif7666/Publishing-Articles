export class RejectedArticle {

    constructor(article,rejectionNotes,comments){
        this.article=article;
        this.rejectionNotes=rejectionNotes;
        this.comments=comments;
    }

    getOriginalBody=()=>this.article.body;
}