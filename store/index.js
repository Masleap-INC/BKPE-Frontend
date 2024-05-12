import {Store} from 'vuex'
import cart from './cart'
import auth from './auth'
import loading from './loading'
import users from './users'
import alert from './alert'
import orders from './orders'
import notifications from './notifications'


new Store({
    state: () => ({
        
    }),
    
    modules: {
     alert,
     cart,
     auth,
     loading,
     users,
     orders,
     notifications
    }
    
})