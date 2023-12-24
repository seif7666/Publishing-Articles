<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'written_by',
        'title',
        'body',
        'type',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function getRecentArticle():HasOne{
        return $this->hasOne(RecentArticle::class,'article_id');
    }

    public function createArticle(){
        if(Article::where('written_by',$this->written_by)->where('title',$this->title)->get()->count())
            return 'A title was found with the same name!';
        $this->save();
        return '';
    }

    public function getArticleHeaders(){
        $result=Article::select('id','title','created_at', 'type')->where('written_by',$this->written_by)->get();
        return $result;
    }

    public static function updateState($articleId,$state){
        $article=Article::find($articleId);
        $article->type=$state;
        $article->save();
    }

    public function updateRejectedArticle($request){
        $oldBody= $this->body;
        print_r($request['body']);
        $this->body= $request['body'];
        $this->type= $request['type'];
        $this->save();
        return $oldBody;
    }
}
