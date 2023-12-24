<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Log;

class RecentArticle extends Model
{
    use HasFactory;
    public function getArticle(): BelongsTo
    {
        return $this->belongsTo(Article::class, 'article_id');
    }

    public static function createIfNotExists(Article $article, string $oldBody)
    {
        $recent = $article->getRecentArticle()->get()->first();
        if ($recent != null){
            $recent->delete();
        }
        $recent= new RecentArticle();
        $recent->article_id= $article->id;
        $recent->body= $oldBody;
        $recent->save();
    }
}
