<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\RejectedArticleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Models\RejectedArticle;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/user', [UserController::class, 'signIn']);
Route::post('/user/sign-up', [UserController::class, 'signUp']);
Route::post('/author/article', [ArticleController::class, 'createArticle']);
Route::post('/admin/article/{articleId}',[RejectedArticleController::class,'rejectArticle']);
Route::get('/author/articles/{author_id}', [ArticleController::class, 'getArticleHeaders']);
Route::get('/author/rejected-article/{article_id}', [RejectedArticleController::class, 'getRejectedArticle']);
Route::post('/author/rejected-article/{article_id}', [RejectedArticleController::class, 'getRejectedArticle']);




Route::get('/admin/articles',[ArticleController::class,'adminGetArticleHeaders']);
Route::get('/admin/article/{articleId}',[ArticleController::class,'adminGetArticle']);
Route::put('/admin/article/{articleId}',[ArticleController::class,'acceptArticle']);
Route::post('/admin/article/{articleId}',[RejectedArticleController::class,'rejectArticle']);


