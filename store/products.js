export default { 

    namespaced: true,

    state: () => ({
        filter:{year: '1967',type: 1,category: 5},
        filterProducts:[],
        searchKey:null,
        categories:null,
        products:null,
        newProducts:null,
        saleProducts:null,
        CLoadingState:true

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
        products(state){
            return state.products
        },
        categories(state){
            return state.categories
        },
        filter(state){
            return state.filter
        },
        searchKey(state){
            return state.searchKey
        },
        CLoadingState:(state)=>{
            return state.CLoadingState
        }
    },
    mutations: {
        SET_FILTER_PRODUCTS(state,filterProducts){
            state.filterProducts = [...filterProducts]
        },
        SET_NEW_PRODUCTS(state,newProducts){
            state.newProducts = newProducts
        },
        SET_SALE_PRODUCTS(state,saleProducts){
            state.saleProducts = saleProducts
        },
        SET_PRODUCTS(state,products){
            state.products = products
        },
        SET_FILTERS(state,filters){
            state.filter = {...filters}
        },
        SET_CATEGORIES(state,categories){
            state.categories = categories
        },
        SET_SEARCH_KEY(state,key){
            state.searchKey = key
        },
        SET_CLOADING_STATE(state,bool){
            state.CLoadingState = bool
        }
       
    },
    actions:{

        async getFilterProducts({ commit,dispatch },filters){
            dispatch('CLoadingStateChange',true)
            commit('SET_FILTERS',filters)
            try {
                const data = await this.$axios.$get(`http://bkpe-env.eba-hezmw5qh.ap-northeast-1.elasticbeanstalk.com/products/?category=${filters.category}&type=${filters.type}&year=${filters.year}`)
                commit('SET_FILTER_PRODUCTS',data.results)
                dispatch('CLoadingStateChange',false)
            }catch(e){  
                console.log(e)
            }
        },
        async getAppProductsAdmin({commit}){
            const products = await this.$axios.$get('http://bkpe-env.eba-hezmw5qh.ap-northeast-1.elasticbeanstalk.com/products/')
            console.log(products.results)
            commit('SET_PRODUCTS',products.results)
        },
        async getAppProducts({commit}){
            
            const newProducts = await this.$axios.$get('http://bkpe-env.eba-hezmw5qh.ap-northeast-1.elasticbeanstalk.com/products/?new=true')
            commit('SET_NEW_PRODUCTS',newProducts.results)
            const saleProducts = await this.$axios.$get('http://bkpe-env.eba-hezmw5qh.ap-northeast-1.elasticbeanstalk.com/products/?onSale=true')
            commit('SET_SALE_PRODUCTS',saleProducts.results)
            
        },
        async getCategories({commit}){

            const data = await this.$axios.$get('http://bkpe-env.eba-hezmw5qh.ap-northeast-1.elasticbeanstalk.com/categories/')

            commit('SET_CATEGORIES',data.results)

        },
        setSearchKey({commit},key){
            commit('SET_SEARCH_KEY',key)
        },
        CLoadingStateChange({commit},bool){
            commit('SET_CLOADING_STATE',bool)
        }

        
    }
      
}