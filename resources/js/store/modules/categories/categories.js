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

            axios.get('/api/categories')
                            .then(response => {
                                
                                context.commit('LOAD_ITEMS', response)
                                
                            })
                            .catch(error => {
                                console.log(error)
                            })
        }

    }
}