<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\RejectedArticle;
use App\Models\RejectionComments;
use Exception;
use Illuminate\Http\Request;
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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(RejectedArticle $rejectedArticle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RejectedArticle $rejectedArticle)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, RejectedArticle $rejectedArticle)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RejectedArticle $rejectedArticle)
    {
        //
    }
}
