
export default ({ store, redirect }) => {

    const token = localStorage.getItem("refreshToken")

    if(token){
        store.dispatch("auth/attempt",token)
    }else{
        store.dispatch('auth/loadingStateChange',false)
        redirect('/')
    }
  
}