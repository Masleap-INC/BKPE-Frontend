export default { 

    namespaced: true,

    state: () => ({
        orders:null,
        loadingState: false,
        shippingDetails:null
    }),
    getters:{
        orders(state){
            return state.orders
        },
        loadingState(state){
            return state.loadingState
        },
        shippingDetails(state){
            return state.shippingDetails
        }
    },
    mutations: {

        SET_ORDERS(state,orders){
            state.orders = orders
        },
        SET_LOADING_STATE(state,bool){
            state.loadingState = bool
        },
        SET_SHIPPING_DETAILS(state,shippingDetails){
            state.shippingDetails = shippingDetails
        }
        
    },
    actions:{
    
        async getOrdersAdmin({ commit, dispatch }){
            try {
       
                const data = await this.$axios.$get(`http://bkpe-env.eba-hezmw5qh.ap-northeast-1.elasticbeanstalk.com/order/`)

                commit('SET_ORDERS',data.results)
                dispatch('loadingStateChange',false) 
         
            }catch(e){
                dispatch('loadingStateChange',false)
                console.log(e)
            }
        },
        ordersStateUpdate({commit},orders){
            commit('SET_ORDERS',orders)
        },
        setShippingDetails({commit},details){
            commit('SET_SHIPPING_DETAILS',details)
        },
        loadingStateChange({commit},bool){
            commit('SET_LOADING_STATE',bool)
        }
        
    }
      
}