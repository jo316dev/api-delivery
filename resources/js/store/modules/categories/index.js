import axios from "axios"

export default {
    state: {

        items: {

            data: []
        }


    },
    mutations: {

        LOAD_ITEMS(state, categories) {

            state.items = categories

        }



    },
    actions: {

        loadData(context) {

            context.commit('CHANGE_PRELOADER', true)
            axios.get('/api/categories')
                .then(response => {
                    context.commit('LOAD_ITEMS', response.data)
                })
                .catch(
                    error => {

                    }
                )
                .finally(_ => context.commit('CHANGE_PRELOADER', false))
        },

        loadCategory(context, id) {

            return new Promise((resolve, reject) => {
                context.commit('CHANGE_PRELOADER', true)
                axios.get(`/api/categories/${id}`)
                    .then(res => resolve(res.data))
                    .catch(err => (reject(err)))
                    .finally(_ => context.commit('CHANGE_PRELOADER', false))
            });

        },

        storeCategory(context, param) {

            return new Promise((resolve, reject) => {


                context.commit('CHANGE_PRELOADER', true)
                axios.post('/api/categories', param)
                    .then(res => resolve())
                    .catch(err => (reject(err)))
                    .finally(_ => context.commit('CHANGE_PRELOADER', false))


            });



        },

        updateCategory(context, params) {

            return new Promise((resolve, reject) => {

                context.commit('CHANGE_PRELOADER', true)

                axios.put(`/api/categories/${params.id}`, params)
                    .then(res => resolve())
                    .catch(err => reject(err))
                    .finally(() => context.commit('CHANGE_PRELOADER', false))


            })

        }

    }

}
