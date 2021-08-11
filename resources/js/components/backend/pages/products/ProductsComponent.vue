<template>
    <div>

    </div>
</template>

<script>

export default {

   created () {
       this.loadProducts()
   },

   methods:{
       loadProducts () {

            this.$store.dispatch('loadProducts')

       }
   }
 
    
}

</script>

<style scoped>

</style>


