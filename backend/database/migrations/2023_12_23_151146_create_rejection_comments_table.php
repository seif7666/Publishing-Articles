<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rejection_comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('rejected_article')->constrained('rejected_articles')->onDelete('CASCADE')->onUpdate('CASCADE');
            $table->string('threadID');
            $table->text('content');
            $table->text('value');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rejection_comments');
    }
};
