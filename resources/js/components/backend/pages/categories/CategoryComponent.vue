<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>Categorias Cadastradas</h3>
            </div>
            <div class="col">
                <search @searchCategory="search"></search>
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
                <tr v-for="(category, index) in categories" :key="index">
                    <td>{{ category.id }}</td>
                    <td>{{ category.name}}</td>
                    <td>{{ category.description}}</td>
                    <td>
                        <router-link :to="{name: 'admin.categories.edit', params: {id: category.id}}" class="btn btn-warning">Editar</router-link>
                       <button class="btn btn-danger" @click.prevent="confirmDestroy(category)">Remover</button>
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





</template>



<script>

import SearchComponent from './partials/SearchComponent.vue';

export default {

    created(){
        this.loadCategories()
        
    },

    data (){
        return {
            filter: ''
        }
    },

  
    computed: {
        categories () {
            return this.$store.state.categories.items.data
        }
    },

    methods:{

         loadCategories () {
            this.$store.dispatch('loadCategories', {name: this.filter})
        },

        confirmDestroy (category) {

            this.$snotify.error(`Deseja deletar categoria ${category.name}?`, 'Confirmação', {
                timeout: 2500,
                showProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                buttons: [
                    {text: 'Não', action: (category) => this.$snotify.remove(category.id)},
                    {text: 'Sim', action: (value) => {
                        this.destroy(category)
                        this.$snotify.remove(value.id)
                    }}
                ]

            })

        },

        destroy (category) {
            console.log(category)
            this.$store.dispatch('destroyCategory', category.id)
                                .then(_ => {
                                    this.$snotify.success('Sucesso ao deletar')
                                    this.loadCategories()
                                })
                                .catch(error => {
                                    this.$snotify.error('problemas ao deletar')
                                })
            

        },

        search (filter) {
            this.filter = filter

            this.loadCategories()
        }

       

    
    },
    components:{
        search: SearchComponent
    }

  

    
}
</script>

<style scoped>

</style>