export default { 

    namespaced: true,

    state: () => ({
        filter:{year: '1967',type: 'RESTORATION',category: 1},
        filterProducts:[],
        searchKey:null,
        categories:null,
        newProducts:null,
        saleProducts:null

    }),
    getters:{
        filterProducts(state){
            return state.filterProducts
        },
        newProducts(state){
            return state.newProducts
        },
        saleProducts(state){
            return state.saleProducts
        },
        categories(state){
            return state.categories
        },
        filter(state){
            return state.filter
        },
        searchKey(state){
            return state.searchKey
        }
    },
    mutations: {
        SET_FILTER_PRODUCTS(state,filterProducts){
            state.filterProducts = [...filterProducts]
        },
        SET_NEW_PRODUCTS(state,newProducts){
            state.newProducts = [...newProducts]
        },
        SET_SALE_PRODUCTS(state,saleProducts){
            state.saleProducts = [...saleProducts]
        },
        SET_FILTERS(state,filters){
            state.filter = {...filters}
        },
        SET_CATEGORIES(state,categories){
            state.categories = [...categories]
        },
        SET_SEARCH_KEY(state,key){
            state.searchKey = key
        }
       
    },
    actions:{

        async getFilterProducts({ commit },filters){
                     
            commit('SET_FILTERS',filters)
            try {
                const data = await this.$axios.$get(`http://127.0.0.1:8000/api/products/productByCategory&Year&Type/${filters.category}/${filters.year}/${filters.type}/`)
                commit('SET_FILTER_PRODUCTS',data)
           
            }catch(e){  
                console.log(e)
            }
        },
        async getAppProducts({commit}){
            const newProducts = await this.$axios.$get('http://127.0.0.1:8000/api/products/ProdStatus/newProducts/')
            commit('SET_NEW_PRODUCTS',newProducts)
            const saleProducts = await this.$axios.$get('http://127.0.0.1:8000/api/products/saleStatus/onsale/')
            commit('SET_SALE_PRODUCTS',saleProducts)
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