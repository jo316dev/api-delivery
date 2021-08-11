<template>
    <div class="container mb=1">
        <ul class="nav bg-dark">
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'admin.dashboard'}">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'admin.categories'}">Categorias ({{ totalCategories }})</router-link>
            </li>
            <li>
                <router-link class="nav-link" :to="{name: 'admin.products'}">Produtos</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

    computed: {
        totalCategories () {
            return this.$store.state.categories.items.data.length
        }
    },
    
}
</script>

<style scoped>

</style>