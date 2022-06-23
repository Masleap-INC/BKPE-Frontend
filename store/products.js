export default { 

    namespaced: true,

    state: () => ({
        year:null,
        type:null,
        products:[],
        searchKey:null
    }),
    getters:{
        products(state){
            return state.products
        },
        searchKey(state){
            return state.searchKey
        }
    },
    mutations: {
        SET_PRODUCTS(state,products){
            state.products = [...products]
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
        setSearchKey({commit},key){
            commit('SET_SEARCH_KEY',key)
        }

        
    }
      
}