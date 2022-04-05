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
        // signUp({commit},data){
        //     commit('SET_TOKEN',data.token)
        //     commit('SET_USER',data)
        // },

        logout({commit}){
            commit('SET_TOKEN',null)
            commit('SET_USER',null)
        },
        async signIn(store,credentials){
            
            const data = await this.$axios.$post('http://127.0.0.1:8000/api/users/login/', credentials)
            
            store.dispatch('attempt',data.access)
           
            if(data){
                localStorage.setItem("accessToken",data.access)
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
                        'Authorization':`Bearer ${token}`
                        // 'Authorization':`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUwNzIxMzM0LCJpYXQiOjE2NDgxMjkzMzQsImp0aSI6IjAwZDUxNmU0NGU3NjRiZWVhOWI0OGQ4NmMyMGMyMTQ0IiwidXNlcl9pZCI6Mn0.gl-mekJCHM5oDrmXv68FUR59kxJ4WHUGqXjQY3w1jN0`
                    }              
                })
                
                commit('SET_USER',data)

            }catch(e){
                commit('SET_TOKEN',null)
                commit('SET_USER',null)
                console.log(e)
            }
        }
    }
      
}