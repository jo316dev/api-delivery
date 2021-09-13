<template>
    <div>
        <form @submit.prevent="search" class="form form-inline">
            <input type="text" v-model="filter" placeholder="Pesquisar..." class="form-control">
            <button type="submit" class="btn btn-outline-success">Pesquisar</button>
        </form>
    </div>
</template>

<script>
export default {

    data() {
        return {
            filter: ''
        }
    },

    methods: {

        search() {

            this.$emit('searchCategory', this.filter)

        }
    }

}
</script>