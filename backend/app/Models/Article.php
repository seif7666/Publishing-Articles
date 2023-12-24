<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
}
