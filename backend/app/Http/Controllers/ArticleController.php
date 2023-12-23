<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Exception;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function createArticle(Request $request)
    {
        try {
            $validate = $request->validate([
                'written_by' => ['required'],
                'title' => ['required'],
                'body' => ['required'],
                'type' => ['required']
            ]);
            $article = new Article($validate);
            $message = $article->createArticle();
            if ($message != '')
                return Response($message, 403);
            return Response('Success', 200);
        } catch (Exception $e) {
            return $e;
        }
    }

    public function getArticleHeaders($author_id, Request $request)
    {
        $article = new Article();
        $article->written_by = $author_id;
        return $article->getArticleHeaders();
    }

    public function adminGetArticleHeaders()
    {
        $articles = Article::select('title', 'articles.created_at', 'users.firstName', 'users.lastName', 'articles.id')
            ->join('users', 'users.id', '=', 'articles.written_by')
            ->where('articles.type', 'Pending')->get();
        return $articles;
    }

    public function adminGetArticle($articleId){
        $response=[];
        //Get article.
        $article=Article::find($articleId);
        return $article;
        //Get Previous article
        //Combine
    }
}
