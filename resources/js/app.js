require('./bootstrap');

import Vue from 'vue';
import Snotify  from 'vue-snotify';


import router from './routes';
import store from './store';

Vue.use(Snotify, {toast:{
    showProgressBar: false,
    
}});



window.Vue = require('vue').default;


/**
 * Globals
 */

Vue.component('admin-component', require('./components/backend/AdminComponent').default);
Vue.component('preloader-component', require('./components/layouts/PreloaderComponent').default);


const app = new Vue({
    router,
    store,
    el: '#app',
    
});
