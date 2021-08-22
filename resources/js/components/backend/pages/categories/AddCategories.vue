<template>
    <div>
      <div class="card">
          <div class="card-header">
              <h3 class="title">Cadastrar Categorias</h3>
          </div>
          <div class="card-body">
              <form-categories></form-categories>
          </div>
      </div>
    </div>
</template>

<script>
import formCategories from './partials/formCategories.vue';

export default {

    components:{
        formCategories
    }
    
}
</script>