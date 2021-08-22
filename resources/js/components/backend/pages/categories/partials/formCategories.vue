<template>
    <div>

        <form class="form" @submit.prevent="onSubmit">
            <div class="form-group">
                <input v-model="categories.name" type="text" class="form-control" placeholder="Titulo da Categoria">
            </div>

            <div class="form-group">
                <input v-model="categories.description" type="text" class="form-control" placeholder="Descrição da Categoria">
            </div>

            <button class="btn btn-sm btn-success">Cadastrar</button>
        </form>

    </div>
</template>

<script>
export default {

    props:{

        update:{
            require: false,
            type: Boolean,
            default: false
        },

        categories:{
            require: false,
            type: Object,
            default: () => {
                return {
                    name: '',
                    description: ''
                }
            }
        }
    },

    methods:{

        onSubmit () {
            this.$store.dispatch('storeCategories', this.categories)
                                .then(() => {

                                    this.$router.push({name: 'admin.categories'})
                                    
                                })
                                .catch(() => {
                                    console.log(error)
                                });
        },
    }



}
</script>