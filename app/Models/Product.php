<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'price', 'image', 'category_id'];


    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getResults($data, $total, $value = 0)
    {
        if (!isset($data['filter']) && ! !isset($data['name']) && !isset($data['price']) && !isset($data['description'])){

            return $this->paginate($total);
        }

       return $this->where(function($query) use ($data, $value){

            if(isset($data['filter'])){
                $filter = $data['filter'];
                $query->where('name', $filter);
                $query->orWhere('description', 'LIKE', "%{$filter}%");
            }

            if(isset($data['price'])){
                $filter = $data['price'];
                $query->whereBetween('price', [$value, $filter]);
            }
            
            if(isset($data['name'])){
                $query->where('name', $data['name']);
            }

            if(isset($data['description'])){
                $filter = $data['filter'];
                $query->where('description', 'LIKE', "%{$filter}%");
            }

        })->paginate($total);
    }
}
