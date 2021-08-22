import axios from "axios"

export default {
    state:{

        items: {
            data: []
        }

    },
    mutations:{

        LOAD_ITEMS (state, categories) {
            state.items = categories.data
        }

    },
    actions:{

        loadCategories (context) {

            context.commit('CHANGE_PRELOADER', true)

            axios.get('/api/categories')
                            .then(response => {
                                
                                context.commit('LOAD_ITEMS', response)
                                
                            })
                            .catch(error => {
                                console.log(error)
                            })
                            .finally(() => {
                                context.commit('CHANGE_PRELOADER', false)
                            })
        },

        storeCategories(context, params){

            return new Promise((resolve, reject) => {

                context.commit('CHANGE_PRELOADER', true)
                axios.post('/api/categories', params)
                                .then( response => resolve())
                                .catch(error => reject(error.response))
                                .finally(() => context.commit('CHANGE_PRELOADER', false))
            });


        },

    }
}