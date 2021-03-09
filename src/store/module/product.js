// import global api
import Api from '../../api/Api'

const product = {

    //set namespace true
    namespaced: true,

    //state
    state: {
        //index products
        products: [],

        product: {}
    },

    //mutations
    mutations: {

        //set state products dengan data dari respose
        GET_PRODUCTS(state, products){
            state.products = products
        },

        DETAIL_PRODUCT(state, product){
            state.product = product
        }
    },

    //actions
    actions: {
        
        //action getProducts
        getProducts({ commit }){

            //get data products ke server
            Api.get('/products')
            .then(response => {

                //commit ke mutation GET_PRODUCTS dengan response data
                commit('GET_PRODUCTS',response.data.products)
            }).catch(error => {

                //show error log
                console.log(error)
            })
        },

        getDetailProduct({ commit }, slug) {
            
            Api.get(`/product/${slug}`)
            .then(response => {

                //commit ke mutation GET_PRODUCTS dengan response data
                commit('DETAIL_PRODUCT', response.data.product)

            }).catch(error => {
                console.log(error)
            })
        },

        getSearchProduct({ commit }, product) {

            Api.get(`search?q=${product}`)
            .then(response => {

                commit('GET_PRODUCTS', response.data.products)
            }).catch(errror => {

                console.log(error)
            })

        }
    },

    //getters
    getters: {

    }

}

export default product