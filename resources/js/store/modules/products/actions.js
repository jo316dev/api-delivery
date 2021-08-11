import axios from 'axios';

import { URL_BASE } from '../../../configs/configs';

const RESOURCE = 'products';

export default {

    loadProducts (context) {
        axios.get(`${URL_BASE}${RESOURCE}`)
                        .then(response => {
                            
                            context.commit('CHANGE_PRELOADER', true)

                            context.commit('LOAD_PRODUCTS', response.data)
                            console.log(response)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                        .finally(_ => context.commit('CHANGE_PRELOADER', false));

    }

}