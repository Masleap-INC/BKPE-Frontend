export default function({store,redirect}) {
    console.log(process.client)
    // console.log(store.getters["auth/authenticated"])
    if(store.getters["auth/authenticated"]){
        
        return redirect('/')
    }
}