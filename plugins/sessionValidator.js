import Vue from 'vue'
import Cookie from 'js-cookie'

export default ({ store, redirect }) => {
//   const checkSessionValidity = async () => {
    console.log("timer")
    const token = Cookie.get("refreshToken")

      if(token){
        store.dispatch("auth/attempt",token)
      }else{
        store.dispatch('auth/loadingStateChange',false)
      }
  
    //   store.commit('SET_TOKEN', null) // Update to 'SET_TOKEN'
        // store.dispatch('auth/SET_TOKEN', null) // Dispatch 'SET_TOKEN' action
 
    
//   }

//   Vue.mixin({
//     mounted() {
//       checkSessionValidity()
//       const interval = setInterval(async () => {
//         await checkSessionValidity()
//       }, 100000)

//       window.addEventListener('beforeunload', () => {
//         clearInterval(interval)
//       })
//     }
//   })
}