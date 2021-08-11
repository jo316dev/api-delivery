<template>
    <div>
        <form action="" class="form form-inline" @submit.prevent="search">
            <input v-model="filter" type="text" placeholder="Pesquisar..." class="form-group mr-sm-2">
            <button type="submit" class="btn btn-primary btn-sm">Pesquisar</button>
        </form>
    </div>
</template>

<script>

export default {

    data () {
        return {
            filter: ''
        }
    },

    methods:{
        search () {
            this.$emit('searchCategory', this.filter)
        }
    }
   
}

</script>
