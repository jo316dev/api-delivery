<template>
    <div>
           <form @submit.prevent="">
                   <div :class="['form-group', {'has-error': errors.name}]">
                        <label class="label" v-if="errors.name">{{ errors.name[0]}}</label>  
                       <input type="text" v-model="product.name" placeholder="Nome do produto" class="form-control" >
                   </div>

                     <div :class="['form-group', {'has-error': errors.description}]">
                       <label class="label" v-if="errors.description">{{ errors.description[0]}}</label>
                       <textarea name="" v-model="product.description" id="" cols="30" rows="10" class="form-control"></textarea>
                    </div>

                    <div :class="['form-group', {'has-error': errors.price}]">
                        <label class="label" v-if="errors.price">{{ errors.price[0]}}</label>  
                       <input type="text" v-model="product.price" placeholder="Valor do produto" class="form-control" >
                   </div>

                   <button class="btn btn-primary">Enviar</button>
               </form>
    </div>
</template>

<script>
export default {

    data () {
        return {
            product: {
                name: '',
                description: '',
                price: ''
            },
            errors:{

            }
        }
    }
    
   
}
</script>