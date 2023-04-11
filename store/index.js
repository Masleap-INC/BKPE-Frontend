import {Store} from 'vuex'
import cart from './cart'
import auth from './auth'
import loading from './loading'
import users from './users'


new Store({

    state: () => ({
      
    }),
    modules: {
     cart,
     auth,
     loading,
     users
    }
    

    
})