<template>
    <div>
         <div class="card">
           <div class="card-header">
               <h3>Edição Categoria</h3>
           </div>
           <div class="card-body">

           <form-cat 
                :category="category"
                :updating="true"
               
           ></form-cat>

           </div>
           <div class="card-footer">

           </div>
       </div>
    </div>
</template>

<script>
import FormCategoryComponent from './partials/FormCategoryComponent.vue';
export default {

    props: {
        id: {
            require: true
        }
    },

    created() {
        this.loadCategory()
    },

    data () {
        return {
            category: {}
        }
    },

    components:{
        formCat: FormCategoryComponent,
    },

    methods:{
        loadCategory () {
            this.$store.dispatch('loadCategory', this.id)
                                .then((response) => {
                                    this.category = response
                                })
                                .catch((error) => {
                                 
                                    console.log(error);
                                    
                                    
                                })
        }
    }


    
}
</script>

<style scoped>

</style>