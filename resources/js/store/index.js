import Vue from 'vue';
import Vuex from 'vuex';

import categories from './modules/categories';
import products from './modules/products'
import preloader from './modules/preloader';


Vue.use(Vuex);

const store = new Vuex.Store({

    modules:{
        categories,
        products,
        preloader
    }

})

export default store;