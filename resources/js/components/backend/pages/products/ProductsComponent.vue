<template>
    <div>

        <div class="row">
            <div class="col">
                <h3>Produtos</h3>
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

    </div>
</template>

<script>

export default {

   created () {
       this.loadProducts()
   },

   computed:{

       products () {
           return this.$store.state.products.items
       }

   },

   methods:{
       loadProducts () {

            this.$store.dispatch('loadProducts')

       }
   },
  
 
    
}

</script>

<style scoped>

</style>


