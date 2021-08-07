<template>
    <div>
     


               <form @submit.prevent="onSubmit()">
                   <div :class="['form-group', {'has-error': errors.name}]">
                     
                        <label class="label" v-if="errors.name">{{ errors.name[0]}}</label>
                      
                        
                       <input type="text" v-model="category.name" placeholder="Nome da categoria" class="form-control" >
                   </div>

                     <div :class="['form-group', {'has-error': errors.name}]">
                       <label class="label" v-if="errors.description">{{ errors.description[0]}}</label>
                       <input type="text" v-model="category.description" placeholder="Descrição da categoria" class="form-control">
                   </div>

                   <button class="btn btn-primary">{{ btnTitle }}</button>
               </form>

    </div>
</template>

<script>
export default {

    props:{
        category:{
           require: false,
           type: Object|Array,
           default: () => {
               return {
                   id: '',
                   name: '',
                   description: ''
               }
           }
        },
        updating:{
            require: false,
            type: Boolean,
            default: false
        },
        btnName:{
            require: false,
            type: Boolean,
            default: false
        }
    },

    data () {
        return{
            btnTitle: this.btnName ? 'Editar' : 'Cadastrar',
            errors: {},
        }
    },

    methods:{

        onSubmit () {

            const action = this.updating ? 'updateCategory' : 'storeCategory';

           
          

            this.$store.dispatch( action, this.category)
                                    .then(() => {
                                        this.$snotify.success('Cadastrado com Sucesso')
                                        this.$router.push({name: 'admin.categories'})
                                    })
                                    .catch(error => {
                                        this.$snotify.error('algo deu errado', 'Erro de cadastro')
                                        this.errors = error.response.data.errors
                                    })
        },

        

       
    }

 
    
}
</script>

<style scoped>

.has-error{
    color: red

}
.has-error input{
    border: 1px solid red;
    
}

</style>