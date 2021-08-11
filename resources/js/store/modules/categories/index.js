import axios from "axios";

export default{
    state:{
        items: {
            data: []
        },

    },
    mutations:{

        LOAD_CATEGORIES (state, categories) {
            state.items = categories
        }

    },
    actions:{

        loadCategories (context, params) {
            context.commit('CHANGE_PRELOADER', true);
            axios.get('/api/categories', {params})
                    .then(response => {
                        
                        context.commit('LOAD_CATEGORIES', response.data)
                    })
                    .catch(error => console.log(error))
                    .finally(_ => context.commit('CHANGE_PRELOADER', false));
        },

        storeCategory (context, params) {
            return new Promise((resolve, reject) => {

                context.commit('CHANGE_PRELOADER', true);
                axios.post('/api/categories', params)
                            .then(response => resolve(response))
                            .catch(error => reject(error))
                            .finally(_ => context.commit('CHANGE_PRELOADER', false))


            })
        },

        loadCategory (context, id) {

             return new Promise((resolve, reject) => {

                context.commit('CHANGE_PRELOADER', true);

                axios.get(`/api/categories/${id}`)
    
                            .then(res => resolve(res.data))
                            .catch(error => reject(error))
                            .finally(_ => context.commit('CHANGE_PRELOADER', false));

             })


        },

        updateCategory (context, params) {

            return new Promise((resolve, reject) => {

                context.commit('CHANGE_PRELOADER', true);

                axios.put(`/api/categories/${params.id}`, params)
                            .then(res => resolve(res.data))
                            .catch(error => reject(error))
                            .finally(_ => context.commit('CHANGE_PRELOADER', false));

             })

        },

        destroyCategory (context, id) {

            return new Promise((resolve, reject) => {

                context.commit('CHANGE_PRELOADER', true);

                axios.delete(`/api/categories/${id}`)
                                .then(res => resolve())
                                .catch(error => reject(error))
                                .finally(_ => context.commit('CHANGE_PRELOADER', false));
                                
            })

        }



        
    }
}