<template>
    <div class="container">
        <h2>Categorias</h2>
    
    
    
        <div class="row">
            <div class="col">
                <router-link :to="{name: 'admin.categories.create'}" class="btn btn-primary">Cadastar</router-link>
            </div>
            <div class="col">
                <filter-category @searchCategory="searchFilter" />
            </div>
        </div>
    
    
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
                    <td class="btn btn-group">
                        <router-link :to="{name: 'admin.categories.edit', params: {id: category.id}}" class="btn btn-warning">Editar</router-link>
                        <button class="btn btn-danger" @click.prevent="confirmDestroy(category)">Remover</button>
                    </td>
    
                </tr>
    
            </tbody>
        </table>
    
    </div>
</template>


<script>
import FilterCategory from './partials/FilterCategory.vue'

export default {

    created() {
        this.loadCategories()
    },


    data() {
        return {
            name: ''
        }
    },




    computed: {
        categories() {

            return this.$store.state.categories.items
        }
    },

    methods: {

        // call all categories 

        loadCategories() {
            return this.$store.dispatch('loadData', { name: this.name })
        },

        confirmDestroy(category) {

            this.$snotify.error(`Deseja deletar ${category.name}`, 'Atenção', {
                timeout: 5000,
                showProgressBar: true,
                closeOnClick: true,
                buttons: [
                    { text: 'Não', action: () => this.$snotify.remove() },
                    {
                        text: 'Sim',
                        action: () => {
                            this.destroy(category)
                            this.$snotify.remove()
                        }
                    },
                ]
            })

        },

        destroy(category) {
            this.$store.dispatch('destroyCategory', category.id)
                .then((result) => {
                    this.$snotify.success('Sucesso ao Deletar')
                    this.loadCategories()


                }).catch((err) => {

                    this.$snotify.error('Erro ao deletar', 'Atenção')

                });
        },
        searchFilter(filter) {
            this.name = filter
            this.loadCategories()
        }


    },
    components: {
        FilterCategory
    }


}
</script>

<style scoped>

</style>