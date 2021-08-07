<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use Faker\Provider\Uuid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    private $product, $category, $totalPages = 10;

    public function __construct(Product $product, Category $category)
    {
        $this->product = $product;
        $this->category = $category;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $value = null)
    {
        $products = $this->product->getResults($request->all(), $this->totalPages, $value);

        return response()->json($products, 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        $data = $request->all();

        if($request->hasFile('image') && $request->file('image')->isValid()){

            

            $name = Str::uuid()->toString();
            
            $extension = $request->image->extension();

            $nameFile = "{$name}.{$extension}";
          
            $data['image'] = $nameFile;

            $upload = $request->image->storeAs('products', $nameFile);

            if(!$upload){
                return response()->json(['error' => 'Falha no Upload'], 500);
            }

        }


        $product = $this->product->create($data);

        return response()->json($product, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if(!$product = $this->product->find($id)){

            return response()->json(['error' => 'Not found'], 404);

        }

        return response()->json($product);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, $id)
    {
        if(!$product = $this->product->find($id)){

            return response()->json(['error' => 'Not found'], 404);

        }

        $data = $request->all();



        if($request->hasFile('image') && $request->file('image')->isValid()){

            if($product->image){

                
                
                if(Storage::exists("product/{$product->image}")){

                    Storage::delete(["product/{$product->image}"]);
                  
                }

                
            }
            
            $name = Str::uuid()->toString();
            
            $extension = $request->image->extension();

            $nameFile = "{$name}.{$extension}";
          
            $data['image'] = $nameFile;

            $upload = $request->image->storeAs('products', $nameFile);

            if(!$upload){
                return response()->json(['error' => 'Falha no Upload'], 500);
            }

        }



        $product->update($data);

        return response()->json($product, 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(!$product = $this->product->find($id)){

            return response()->json(['error' => 'Not found'], 404);

        }
        
        if(Storage::exists("product/{$product->image}")){

            Storage::delete(["product/{$product->image}"]);
          
        }

        $product->delete();

        return response()->json(['success' => true], 200);
    }
}
