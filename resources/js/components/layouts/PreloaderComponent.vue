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

.preloader {
    background: black;
    position: absolute;
    z-index: 9999;
    opacity: 0.4;
    width: 100%;
    height: 100%;
    text-align: center;
    margin: 0;
}

.preloader img {
    max-width: 200px;
    margin: 200px 0 0 0;
    padding: auto;
}

</style>