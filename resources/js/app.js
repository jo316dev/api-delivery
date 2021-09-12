require('./bootstrap');

import Vue from 'vue';
import  Snotify  from 'vue-snotify';

import router from './routes';
import store from './store';

Vue.use(Snotify, {
    toast:{
        showProgressBar: false
    }
})








window.Vue = require('vue').default;


/**
 * Globals
 */



// Vue.component('test-component', require('./components/TestComponent.vue').default);

Vue.component('admin-component', require('./components/backend/AdminComponent.vue').default);
Vue.component('preloader-component', require('./components/layouts/PreloaderComponent.vue').default);


const app = new Vue({
    
    el: '#app',
    router,
    store,
   
    
});
