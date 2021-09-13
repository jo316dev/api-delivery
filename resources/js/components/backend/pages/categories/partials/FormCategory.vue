<template>
    <div>
        <form class="form" @submit.prevent="onSubmit()">
    
    
            <div :class="['form-group', {'has-error': errors.name}]">
                <div v-if="errors.name">
                    {{ errors.name[0] }}
                </div>
                <input type="text" v-model="category.name" id="" class="form-control" placeholder="Nome Categoria" />
            </div>
    
    
            <div :class="['form-group', {'has-error': errors.description}]">
                <div v-if="errors.description">
                    {{ errors.description[0] }}
                </div>
                <input type="text" v-model="category.description" id="" class="form-control" placeholder="Descrição" />
            </div>
    
            <button class="btn btn-success">Enviar</button>
        </form>
    </div>
</template>

<script>
export default {


    props: {


        category: {
            require: false,
            type: Object | Array,
            default: () => {
                return {
                    id: '',
                    name: '',
                    description: ''
                }
            }
        },


        updating: {
            require: false,
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            errors: {}
        }
    },

    methods: {

        onSubmit() {

            const action = this.updating ? 'updateCategory' : 'storeCategory'

            this.$store.dispatch(action, this.category)
                .then(() => {
                    this.$snotify.success('Cadastrado com sucesso')
                    this.$router.push({name: 'admin.categories'})
                })
                .catch(err => {
                    this.$snotify.error('Reveja o cadastro', 'Atenção ao Error')
                    this.errors = err.response.data.errors
                })
        }
    }
}
</script>

<style scoped>
.has-error{color:red;}
.has-error input{border: 1px solid #fa8072;}
</style>