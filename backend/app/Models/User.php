<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;
use PhpParser\Node\Expr\Cast\String_;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firstName',
        'lastName',
        'email',
        'password',
        'type'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'password' => 'hashed',
    ];


    public static function signIn(string $username, string $password){
        $data = User::where('email', $username)->get()->first();
        if (Hash::check($password, $data->password))
            return $data;
        return null;
    }

    public static function signUp($newUser):string{
        try{
            $user= new User($newUser);
            $user->save();
            return '';
        }catch(Exception $e){
            return 'Duplicate Email!';
        }
    }

    public function articles():HasMany{
        return $this->hasMany(Article::class);
    }
}
