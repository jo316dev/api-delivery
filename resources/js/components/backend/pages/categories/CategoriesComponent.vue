<template>
    <div class="container bg-gray-700 drop-shadow-sm">
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
    </div>
</template>

<script>


export default {

    created () {
        this.$store.dispatch('loadCategories')
    },

   
    computed: {
        categories () {
            
                return this.$store.state.categories.items
          
        }
    },

    
}
</script>

<style scoped>

</style>