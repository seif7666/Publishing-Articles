<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;

class UserController extends BaseController
{
    public function signIn(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'username' => ['required'],
                'password' => ['required'],
            ]);
            $user = User::signIn($validatedData['username'], $validatedData['password']);
            if ($user != null)
                return $user;
            return Response('Incorrect username or password!', 401);
        } catch (Exception $e) {
            return Response('Arguments not Correct!', 422);
        }
        return Response(200);
    }
    public function signUp(Request $request){
        $validatedData = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
            'firstName'=> ['required'],
            'lastName' => ['required'],
            'type' =>['required']
        ]);

        $message=User::signUp($validatedData);
        if($message == '')
            return Response('Success',200);
        return Response($message, 405);
    }
}
