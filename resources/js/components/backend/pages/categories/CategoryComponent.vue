<template>
    <div class="container">
        <h3>Categorias Cadastradas</h3>
        <hr>
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
                <tr v-for="(category, index) in categories" :key="index">
                    <td>{{ category.id }}</td>
                    <td>{{ category.name}}</td>
                    <td>{{ category.description}}</td>
                    <td>
                        <router-link :to="{name: 'admin.categories.edit', params: {id: category.id}}" class="btn btn-warning">Editar</router-link>
                    </td>
                </tr>

            </tbody>
        </table>
        <div class="card">
            <div class="card-footer">
                <router-link :to="{name: 'admin.categories.add'}" class="btn btn-success">+ Categoria</router-link>
            </div>
        </div>
    </div>


  <!-- this.$snotify.warning(`Deseja realmente excluir ${item.name}`, "Brabo mesmo?", {
                timeout: 2500,
                showProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                buttons: [
                    {text: 'Não', action: (item) => this.$snotify.remove(item.id)},
                    {text: 'Sim', action: (value) => {
                        this.destroy(item)
                        this.$snotify.remove(value.id)
                    }}
                ]
            }) -->


</template>



<script>

export default {

    created(){

        this.$store.dispatch('loadCategories')
        
    },

  
    computed: {
        categories () {
            return this.$store.state.categories.items.data
        }
    },

  

    
}
</script>

<style scoped>

</style>