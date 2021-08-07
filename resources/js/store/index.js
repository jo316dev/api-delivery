import Vue from 'vue';
import Vuex from 'vuex';

import categories from './modules/categories';
import preloader from './modules/preloader';


Vue.use(Vuex);

const store = new Vuex.Store({

    modules:{
        categories,
        preloader
    }

})

export default store;