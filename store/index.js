import {Store} from 'vuex'
import cart from './cart'
import auth from './auth'
import loading from './loading'


new Store({

    state: () => ({
      
    }),
    modules: {
     cart,
     auth,
     loading
    }
    

    
})