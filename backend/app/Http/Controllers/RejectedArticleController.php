<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\RecentArticle;
use App\Models\RejectedArticle;
use App\Models\RejectionComments;
use Exception;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use RuntimeException;

class RejectedArticleController extends Controller
{
    public function rejectArticle($articleId, Request $request){
        //Make the article rejected.
        $rejection=[
            'article_id'=>$articleId,
            'reason'=>$request['rejectionNotes'],
        ];
        try{
            DB::beginTransaction();
            Article::updateState($articleId,'Rejected');
            $rejectionId= RejectedArticle::createOrUpdate($rejection);
            $comments= $request['commentsRepo'];
            foreach($comments as $comment){
                RejectionComments::createComment($comment,$rejectionId);
            }
            // throw new RuntimeException("Testing");
            DB::commit();
        }catch(Exception $e){
            DB::rollBack();
            // return $e;
        }
        return Response('',200);
        //Create if it doesn't exit a new record in rejected.
        //Add comments of rejection.
    }

    public function getRejectedArticle(int $articleId){
        //Get original article.
        $article= Article::find($articleId);
        $rejectedArticle= RejectedArticle::where('aritcle_id',$articleId)->get()->first();
        $comments= RejectionComments::where('rejected_article',$rejectedArticle->id)->get()->all();

        $response=[
            'article'=>$article,
            'rejectedArticle'=>$rejectedArticle,
            'comments'=>$comments
        ];
        Log::info($response);
        return $response;
    }
    
    public function updateRejectedArticle(int $articleId, Request $request){
        //Update article fields ---> [body and type(state)]
        //Save the recent version of the article
        //Delete the rejected article and by cascading the comments are also released!
        try{
            DB::beginTransaction();
            $article=Article::find($articleId);
            $oldBody=$article->updateRejectedArticle($request);
            RecentArticle::createIfNotExists($article,$oldBody);            
            RejectedArticle::where('aritcle_id',$articleId)->delete();
            DB::commit();
            return Response('Success',200);
        }catch(Exception $e){
            DB::rollBack();
            return $e;
        }

    }
}
