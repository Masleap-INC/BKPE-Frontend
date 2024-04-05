export default { 

    namespaced: true,

    state: () => ({
        orders:null,
        loadingState: false,
        orderDetails:null,

    }),
    getters:{
        orders(state){
            return state.orders
        },
        loadingState(state){
            return state.loadingState
        },
        getOrderDetails(state){
            return state.orderDetails
        },

    },
    mutations: {

        SET_ORDERS(state,orders){
            state.orders = orders
        },
        SET_LOADING_STATE(state,bool){
            state.loadingState = bool
        },
        SET_ORDER_DETAILS(state,orderDetails){
            state.orderDetails = orderDetails
        },

    },
    actions:{
    
        async getOrdersAdmin({ commit, dispatch }){
            try {
       
                const data = await this.$axios.$get(`/order/`)

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
        setOrderDetails({commit},details){
            commit('SET_ORDER_DETAILS',details)
        },
        loadingStateChange({commit},bool){
            commit('SET_LOADING_STATE',bool)
        },

    }
      
}