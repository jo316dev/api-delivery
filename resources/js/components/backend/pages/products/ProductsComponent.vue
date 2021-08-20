<template>
    <div>

        <div class="row">
            <div class="col">
                <button type="submit" class="btn btn-primary" @click.prevent="showModal = true">Add</button>
            </div>
            <div class="col">
                <search
                    @search="searchForm"
                ></search>
            </div>
        </div>

         <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products.data" :key="index">

                  <td>{{ product.id}}</td>
                  <td>{{ product.name}}</td>
                  <td>{{ product.description}}</td>
                  <td>{{ product.price}}</td>

              </tr>

            </tbody>
        </table>

        <paginantor
            :pagination="products"
            :offset="6"
            @paginate="loadProducts"
        
        ></paginantor>

        <vodal
            :show="showModal"
            animation="fade"
            @hide="hideModal"
            :width="600"
            :height="500"
        >

        
            <!-- Modal Product -->
            <product-form></product-form>
        
        </vodal>

   

    </div>
</template>

<script>

import PaginateComponent from '../../../layouts/PaginateComponent.vue';
import ProductSearchComponent from '../../layouts/SearchComponents.vue';
import ProductForm from './partials/ProductForm.vue';

import Vodal from 'vodal';

export default {

   created () {
       this.loadProducts(1)
   },

   data () {
       return {

           filter: '',
           showModal: false
       }
   },

   computed:{

       products () {
           return this.$store.state.products.items
       },

       params(){
           return {
               page: this.products.current_page,
               filter: this.search,
           }
       }

   },

   methods:{
       loadProducts (page) {

            this.$store.dispatch('loadProducts',  {...this.params, page})

       },
       searchForm(filter){

           this.search = filter

           this.loadProducts(1)
       },
       hideModal() {
           this.showModal = false
       }
   },

   components:{
       paginantor: PaginateComponent,
       search: ProductSearchComponent,
       Vodal,
       ProductForm,
   }
  
 
    
}

</script>

<style scoped>

</style>


