export default {

    namespaced:true,

    state:()=>({
        cart:[],
        totalPrice:0
    }),

    getters:{
        getCart(state){
            return state.cart
        },
        getTotalPrice(state){
            return state.totalPrice
        }
    },
    mutations:{
        ADD_TO_CART(store,data){
            store.cart.push(data)
        },
        INC_ITEM_QTY(store,idx){
            store.cart[idx].quantity += 1
        },
        DEC_ITEM_QTY(store,idx){
            if(store.cart[idx].quantity>1){
                store.cart[idx].quantity -= 1
            }else{
                console.log("You must take at least one item or remove the item form cart")
            }          
        },
        REM_CART_ITEM(store,idx){
            store.cart.splice(idx,1)
        },
        ADD_CART_LOCALSTORAGE(store){
            localStorage.setItem("cart",JSON.stringify(store.cart))
        },
        CLONE_CART_FROM_LOCALSTORAGE(store,data){
            store.cart = [...data]
        },
        SET_TOTAL_PRICE(store){
            let price = 0
            store.cart.forEach(item => {
                price =  price + ((item.product.onSale ? item.product.salePrice : item.product.price) * item.quantity)
            });
            store.totalPrice = price
        }
        

    },

    actions:{
        addToCart({commit},data){
            commit('ADD_TO_CART',data)
            commit('SET_TOTAL_PRICE')
            commit('ADD_CART_LOCALSTORAGE')
        },
        incItemQty({commit},idx){
            commit('INC_ITEM_QTY',idx)
            commit('SET_TOTAL_PRICE')
            commit('ADD_CART_LOCALSTORAGE')
        },
        decItemQty({commit},idx){
            commit('DEC_ITEM_QTY',idx)
            commit('SET_TOTAL_PRICE')
            commit('ADD_CART_LOCALSTORAGE')
        },
        remCartItem({commit},idx){
            commit('REM_CART_ITEM',idx)
            commit('SET_TOTAL_PRICE')
            commit('ADD_CART_LOCALSTORAGE')
        },
        fetchCartLocalstorage({commit}){
            const cartFromLocalstorage = JSON.parse(localStorage.getItem("cart")) || [];
            commit("CLONE_CART_FROM_LOCALSTORAGE",cartFromLocalstorage);
            commit('SET_TOTAL_PRICE')
        },


    }
}