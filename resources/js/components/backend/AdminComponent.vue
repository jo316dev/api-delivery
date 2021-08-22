<template>
    <div class="container">

        <ul class="nav bg-dark">
            <li class="nav-item">
                <router-link :to="{name: 'admin.dashboard'}" class="nav-link">Dashboard</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'admin.categories'}" class="nav-link">Categorias ( {{ totalItems }} ) </router-link>
            </li>
        </ul>

        <router-view></router-view>
    </div>
</template>




<script>
export default {

    computed:{
        totalItems () {
            return this.$store.state.categories.items.data.length
        }
    }
    
}
</script>