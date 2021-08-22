require('./bootstrap');

import Vue from 'vue';

import router from './routes';
import store from './store';




window.Vue = require('vue').default;


/**
 * Globals
 */

Vue.component('admin-component', require('./components/backend/AdminComponent.vue').default)
Vue.component('preloader-component', require('./components/layouts/PreloaderComponent').default)




const app = new Vue({
    
    el: '#app',
    router,
    store,
    
});
