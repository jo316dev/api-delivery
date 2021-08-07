<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];


    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function getResults($filter = null)
    {
       if(!$filter){
           return $this->paginate();
       }

       return $this->where('name', 'LIKE', "%{$filter}%")
                                            ->paginate();
    }
}
