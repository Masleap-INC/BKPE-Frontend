export default { 

    namespaced: true,

    state: () => ({
        token:null,
        user:null
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
        }
    },
    mutations: {
        SET_TOKEN(state,token){
            state.token = token
        },
        SET_USER(state,user){
            state.user = user

        }
    },
    actions:{
        
        async signIn(store,credentials){
            
            const data = await this.$axios.$post('http://127.0.0.1:8000/api/users/login/', credentials,{withCredentials: true})

            store.dispatch('attempt',data.token)
           
            if(data){
                localStorage.setItem("token",data.token)
                await this.$router.push('/');
            }else{
                console.log(data.detail)
            }
      
        },

        async attempt({ commit},token){
            
            
            commit('SET_TOKEN',token)
            try {
                const data = await this.$axios.$get('http://127.0.0.1:8000/api/users/profile/',{        
                    headers:{
                        'Authorization':'Bearer '+token
                    }              
                })
                
                commit('SET_USER',data.user)

            }catch(e){
                commit('SET_TOKEN',null)
                commit('SET_USER',null)
                console.log(e)
            }
        }
    }
      
}