<template>
    <div>
        <h3>Editar</h3>
    
        <form-category 
        :category="category" 
        :updating="true"
        />
    
    </div>
</template>

<script>
import FormCategory from './partials/FormCategory.vue';

export default {

    created() {
        this.$store.dispatch('loadCategory', this.id)
            .then(res => this.category = res)
            .catch(err => console.log(err))
    },

    props: {
        id: {
            require: true
        }
    },

    data() {
        return {
            category: {
                name: '',
                description: ''
            }
        }
    },

    components: {
        FormCategory
    }

}
</script>