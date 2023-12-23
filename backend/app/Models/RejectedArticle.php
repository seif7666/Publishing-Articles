<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\Request;

class RejectedArticle extends Model
{
    use HasFactory;

    public static function createOrUpdate($data){
        $rejected_article= RejectedArticle::find($data['article_id']);
        if($rejected_article==null)
            $rejected_article=new RejectedArticle();
        $rejected_article->aritcle_id=$data['article_id'];
        $rejected_article->reason=$data['reason'];
        $rejected_article->save();
        return $rejected_article->id;
    }

}
