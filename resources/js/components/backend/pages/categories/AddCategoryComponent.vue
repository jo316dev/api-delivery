<template>
    <div>
       <div class="card">
           <div class="card-header">
               <h3>Cadastro de Categoria</h3>
           </div>
           <div class="card-body">

               <form-cat></form-cat>

           </div>
           <div class="card-footer">

           </div>
       </div>
    </div>
</template>

<script>
import FormCategoryComponent from './partials/FormCategoryComponent.vue';

export default {

    components:{

        formCat: FormCategoryComponent,
    }
    
}
</script>

<style scoped>

</style>