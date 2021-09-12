<template>
    <div class="preloader" v-show="preloader">
        <img src="/img/preloader.gif" alt="">
    </div>
</template>

<script>
export default {

    computed:{
        preloader () {
            return this.$store.state.preloader.loading
        }
    }
    
}
</script>

<style scoped>

.preloader{
    background: black;
    opacity: .4;
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 10%;
    
}
.preloader img{
    max-width: 500px;
}

</style>