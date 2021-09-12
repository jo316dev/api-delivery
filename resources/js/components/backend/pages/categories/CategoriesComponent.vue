<template>
    <div class="container">
        <h2>Categorias</h2>
    
    
    
        <router-link :to="{name: 'admin.categories.create'}" class="btn btn-primary">Cadastar</router-link>
    
    
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Categoria</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
    
                <tr v-for="(category, index) in categories.data" :key="index">
    
                    <td>{{category.id}}</td>
                    <td>{{category.name}}</td>
                    <td>{{category.description}}</td>
                    <td>
                        <router-link :to="{name: 'admin.categories.edit', params: {id: category.id}}" class="btn btn-warning">Editar</router-link>
                    </td>
    
                </tr>
    
            </tbody>
        </table>
    
    </div>
</template>


<script>
export default {

    created() {
        this.$store.dispatch('loadData')
    },


    computed: {
        categories() {

            return this.$store.state.categories.items
        }
    },

    methods: {


    }


}
</script>

<style scoped>

</style>