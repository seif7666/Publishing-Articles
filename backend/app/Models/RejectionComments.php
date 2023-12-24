<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class RejectionComments extends Model
{
    use HasFactory;

    public static function createComment($data,$rejection_id){
        $comment= new RejectionComments();
        $comment->threadId= $data['threadId'];
        $comment->content= $data['content'];
        $comment->value= $data['contextValue'];
        $comment->rejected_article=$rejection_id;
        $comment->save();
        Log::info($comment);
    }
}
