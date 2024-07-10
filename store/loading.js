export default{
    namespaced: true,

    state: () => ({
        loadingState: false
    }),
    getters: {
        loadingState:(state)=>{
          return state.loadingState
        }
    },
    mutations: {
        SET_LOADING_STATE(state,bool){
            state.loadingState = bool
        }
    },
    actions: {
        loadingStateChange({commit},bool){
            commit('SET_LOADING_STATE',bool)
        }
    }
}