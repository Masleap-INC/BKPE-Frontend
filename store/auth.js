export default { 

    namespaced: true,

    state: () => ({
        token:null,
        user:null,
        loadingState: true
    }),
    getters:{
        authenticated(state){
            if(state.token && state.user){
                return  true
            }else{
                return false
            }     
        },
        user(state){
            return state.user
        },
        loadingState:(state)=>{
            return state.loadingState
        }
    },
    mutations: {
        SET_TOKEN(state,token){
            state.token = token
        },
        SET_USER(state,user){
            state.user = user
        },
        SET_LOADING_STATE(state,bool){
            state.loadingState = bool
        },

    },
    actions:{
        // signUp({commit},data){
        //     commit('SET_TOKEN',data.token)
        //     commit('SET_USER',data)
        // },

        // Logout
        logout({commit}){
            commit('SET_TOKEN',null)
            commit('SET_USER',null)
            localStorage.setItem('cart_id',null)
        },
        async signIn({dispatch},credentials){

            const data = await this.$axios.$post('/auth/login/', credentials)
    
            dispatch('attempt',data.tokens.refresh) 
            localStorage.setItem("refreshToken",data.tokens.refresh)
            localStorage.setItem("accessToken",data.tokens.access)
          
            await this.$router.push('/'); 

        },
    
        async attempt({ commit, dispatch },token){
                     
            commit('SET_TOKEN',token)
            
            try {
                const data = await this.$axios.$get(`/user/profile/?token=${token}`)
                commit('SET_USER',data)
                await dispatch('cart/loadCart', null, { root: true });
                dispatch('loadingStateChange',false) 
         
            }catch(e){
                commit('SET_TOKEN',null)
                commit('SET_USER',null)
                dispatch('loadingStateChange',false)
            }
        },
        userUpdate({commit},data){
            commit('SET_USER',data)
        },
        loadingStateChange({commit},bool){
            commit('SET_LOADING_STATE',bool)
        },

        
    }
      
}