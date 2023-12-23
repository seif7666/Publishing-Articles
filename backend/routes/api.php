<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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
Route::get('/author/articles/{author_id}', [ArticleController::class, 'getArticleHeaders']);

Route::get('/admin/articles',[ArticleController::class,'adminGetArticleHeaders']);
Route::get('/admin/article/{articleId}',[ArticleController::class,'adminGetArticle']);
