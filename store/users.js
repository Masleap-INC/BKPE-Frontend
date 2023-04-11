export default { 

    namespaced: true,

    state: () => ({
        users:null,
        loadingState: false
    }),
    getters:{

        users(state){
            return state.users
        },
        loadingState:(state)=>{
            return state.loadingState
        }
    },
    mutations: {

        SET_USERS(state,users){
            state.users = users
        },
        SET_LOADING_STATE(state,bool){
            state.loadingState = bool
        }
    },
    actions:{
    
        async getUsersAdmin({ commit, dispatch }){
                     

            try {
       
                const data = await this.$axios.$get(`http://bkpe-env.eba-hezmw5qh.ap-northeast-1.elasticbeanstalk.com/users/`)


                commit('SET_USERS',data.results)
                dispatch('loadingStateChange',false) 
                
         
            }catch(e){
                dispatch('loadingStateChange',false)
                console.log(e)
            }
        },

        loadingStateChange({commit},bool){
            commit('SET_LOADING_STATE',bool)
        }
        
    }
      
}