<template>
    <div>
        <h2>Adcionar categorias</h2>
        <div class="card">
            <div class="card-body">

                <form-category

                
                />
                
            </div>
        </div>
    </div>
</template>

<script>
import FormCategory from './partials/FormCategory.vue';

export default {

    data() {
        return {
            formData: {
                name: "",
                description: ""
            }
        };
    },

    methods: {
        
    },
    components: {

        FormCategory
    }
};
</script>
