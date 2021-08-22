<template>
    <div class="container bg-gray-700 drop-shadow-sm">
        <h1 class="title">
            Categorias
        </h1>
        <div class="row pb-5">
            <div class="col">
                <!-- <button class="btn btn-primary" @click.prevent="showModal = true">Cadastrar</button> -->
                <router-link :to="{name: 'admin.categories.create'}" class="btn btn-primary">Add Categoria</router-link>
            </div>
        </div>
       <table class="table table-striped"> 
           <thead>
               <tr>
                   <th>#</th>
                   <th>Nome</th>
                   <th>Descrição</th>
                   <th>Ações</th>
               </tr>
           </thead>
           <tbody>

               <tr v-for="(category, index) in categories.data" :key="index">
                   <td>{{ category.id }}</td>
                   <td> {{ category.name }} </td>
                   <td> {{ category.description }} </td>
               </tr>

           </tbody>
       </table>

       <!-- Vodal area -->

       <!-- <vodal
            :show="showModal"
            animatio="fade"
            @hide="showModal = false"
            :width="500"
            :height="300"
            
       >
       <div class="card">
         <div class="card-header">
             <h3 class="title">Cadastrar Categoria</h3>
         </div>
         <div class="card-body">
              <form-categories></form-categories>
         </div>
       </div>
       </vodal> -->




    </div>
</template>

<script>

import Vodal from 'vodal';

import formCategories from './partials/formCategories.vue';


export default {

    created () {
        this.$store.dispatch('loadCategories')
    },

    data () {
        return {
            showModal: false
        }
    },

   
    computed: {
        categories () {
            
                return this.$store.state.categories.items
          
        }
    },

    methods:{
        
    },
    components:{
        Vodal,
        formCategories
    }

    
}
</script>

<style scoped>

</style>