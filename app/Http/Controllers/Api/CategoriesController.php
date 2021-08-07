<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    private $categories;

    public function __construct(Category $category)
    {
        $this->category = $category;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $categories = $this->category->getResults($request->name);

        return response()->json($categories);
    }

  
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        $category = $this->category->create($request->all());
        

        return response()->json($category, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if(!$category = $this->category->find($id)){
           
            return response()->json(['error'=>'Not Found'], 404);

        }

        return response()->json($category, 200);
    }

 
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, $id)
    {
        if(!$category = $this->category->find($id)){
           
            return response()->json(['error'=>'Not Found'], 404);

        }

        $category->update($request->all());

        return response()->json($category, 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(!$category = $this->category->find($id)){
           
            return response()->json(['error'=>'Not Found'], 404);

        }

        $category->delete();

        return response()->json(['success' => true], 204);

    }


    public function products($id)
    {
        
        if(!$category = $this->category->find($id)){
            return response()->json(['error'=>'Not Found'], 404);
        }

        // dd($category);
        
        
        $products = $category->with('products')->paginate();
       

        return response()->json([
            'category' => $category,
            'products' => $products
        ]);
    }
}
