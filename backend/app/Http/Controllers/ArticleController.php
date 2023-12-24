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

    public function adminGetArticle($articleId)
    {
        $response = [];
        //Get article.
        $article = Article::find($articleId);
        $recentArticle = $article->getRecentArticle()->get()->first();
        $tracker='';
        if($recentArticle!=null)
            $tracker=$this->longestCommonSubsequenceWithMarkup($recentArticle->body,$article->body);
        return [
            'article'=>$article,
            'changes'=>$tracker
        ];
    }

    public function acceptArticle($articleId)
    {
        Article::updateState($articleId, 'Published');
        return Response('Success', 200);
    }


    function longestCommonSubsequenceWithMarkup($oldSentence, $newSentence)
    {
        $oldWords = explode(' ', $oldSentence);
        $newWords = explode(' ', $newSentence);

        $m = count($oldWords);
        $n = count($newWords);

        $dp = array_fill(0, $m + 1, array_fill(0, $n + 1, 0));

        for ($i = 1; $i <= $m; $i++) {
            for ($j = 1; $j <= $n; $j++) {
                if ($oldWords[$i - 1] == $newWords[$j - 1]) {
                    $dp[$i][$j] = $dp[$i - 1][$j - 1] + 1;
                } else {
                    $dp[$i][$j] = max($dp[$i - 1][$j], $dp[$i][$j - 1]);
                }
            }
        }

        $lcs = [];
        $i = $m;
        $j = $n;

        while ($i > 0 && $j > 0) {
            if ($oldWords[$i - 1] == $newWords[$j - 1]) {
                array_unshift($lcs, $oldWords[$i - 1]);
                $i--;
                $j--;
            } elseif ($dp[$i - 1][$j] > $dp[$i][$j - 1]) {
                array_unshift($lcs, "<--" . $oldWords[$i - 1] . "-->");
                $i--;
            } else {
                array_unshift($lcs, "<++" . $newWords[$j - 1] . "++>");
                $j--;
            }
        }

        while ($i > 0) {
            array_unshift($lcs, "<--" . $oldWords[$i - 1] . "-->");
            $i--;
        }

        while ($j > 0) {
            array_unshift($lcs, "<++" . $newWords[$j - 1] . "++>");
            $j--;
        }

        return implode(' ', $lcs);
    }
}
