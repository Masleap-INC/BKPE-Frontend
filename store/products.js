export default { 

    namespaced: true,

    state: () => ({
        filters:{},
        products:[],
        searchKey:null,
        categories:[]

    }),
    getters:{
        products(state){
            return state.products
        },
        categories(state){
            return state.categories
        },
        searchKey(state){
            return state.searchKey
        }
    },
    mutations: {
        SET_PRODUCTS(state,products){
            state.products = [...products]
        },
        SET_CATEGORIES(state,categories){
            state.categories = [...categories]
        },
        SET_SEARCH_KEY(state,key){
            state.searchKey = key
        }
       
    },
    actions:{

        async getProducts({ commit },filters){
                     

            try {
                const data = await this.$axios.$get(`http://127.0.0.1:8000/api/products/productByCategory&Year&Type/${filters.category}/${filters.year}/${filters.type}/`)
                
                commit('SET_PRODUCTS',data)
                console.log(data)
           
            }catch(e){
               
                console.log(e)
            }
        },
        async getCategories({commit}){
            const data = await this.$axios.$get('http://127.0.0.1:8000/api/products/categories/')
            commit('SET_CATEGORIES',data)
        },
        setSearchKey({commit},key){
            commit('SET_SEARCH_KEY',key)
        }

        
    }
      
}