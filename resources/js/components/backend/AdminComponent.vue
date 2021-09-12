<template>
    <div class="container">
        
        <ul class="bg-gray-600 nav">
            <li class="nav-item">
                <router-link :to="{name: 'admin.dashboard'}" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'admin.categories'}" class="nav-link">Categorias ({{ totalCategories }})</router-link>
            </li>
        </ul>

       

        <router-view></router-view>

    </div>
</template>


<script>
export default {

    created(){
        console.log(this.$store.state.categories.items.data.length)
    },

    computed:{
        totalCategories () {
            return this.$store.state.categories.items.data.length
        }
    }
    
}
</script>

<style scoped>

</style>