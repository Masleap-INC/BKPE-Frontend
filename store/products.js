export default { 

    namespaced: true,

    state: () => ({
        filter:{year: '1967',type: 'RESTORATION',category: ''},
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
        SET_FILTERS_VALUE(state,category){
            state.filter.category = category
        },
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
            console.log("game")
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
                const data = await this.$axios.$get(`products/product-filter-specific-attribute/?category=${filters.category}&year_${filters.year}=True&type=${filters.type}`)
                console.log(data)
                commit('SET_FILTER_PRODUCTS',data)
                dispatch('CLoadingStateChange',false)
            }catch(e){  
                console.log(e)
            }
        },
        async getAppProductsAdmin({commit},editedProductList=null){
            if(editedProductList==null){
                const products = await this.$axios.$get('/products/')
                commit('SET_PRODUCTS',products.results)
            }else{
                commit('SET_PRODUCTS',editedProductList)
            }
            
        },

        async getProductListAfterDeleteAdmin({commit},{editedProductsList,productId}){ 
            console.log(productId)
            await this.$axios.delete(`/products/product-details/${productId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            commit('SET_PRODUCTS',editedProductsList)
            this.$router.push('/Admin/AdminProductsPage');
        },
       
        async getAppProducts({commit}){
            
            const newProducts = await this.$axios.$get('/products/search-onsalenew/?search_param=new')
            commit('SET_NEW_PRODUCTS',newProducts.results)
            const saleProducts = await this.$axios.$get('/products/search-onsalenew/?search_param=onsale')
            commit('SET_SALE_PRODUCTS',saleProducts.results)
            
        },
        async getCategories({commit}){

            const data = await this.$axios.$get('/categories/categories')

            commit('SET_CATEGORIES',data)
            commit('SET_FILTERS_VALUE',data[0].id)

        },
        setSearchKey({commit},key){
            commit('SET_SEARCH_KEY',key)
        },
        CLoadingStateChange({commit},bool){
            commit('SET_CLOADING_STATE',bool)
        }

        
    }
      
}