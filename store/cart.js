export default {

    namespaced:true,

    state:()=>({
        cart:[],
        totalPrice:0,

    }),

    getters:{
        getCart(state){
            return state.cart
        },
        getTotalPrice(state){
            return state.totalPrice
        },

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
                price =  price + ((item.product.onSale ? item.product.normal_price : item.product.normal_price) * item.quantity)
            });
            store.totalPrice = price
        },


    },

    actions:{
        async addToCart({commit},data){
            const response = await this.$axios.$post(`/order/add-to-cart/`,data.cart,{
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
            console.log(response)
            commit('ADD_TO_CART',{product:data.product,quantity:data.quantity,id:response.id})
            commit('SET_TOTAL_PRICE')
            commit('ADD_CART_LOCALSTORAGE')
        },
        async incItemQty({commit},{idx,id,qty,price}){
            console.log(qty,price)
            const newQty = qty + 1
            const newPrice = newQty * price
            console.log(newPrice)
            const response = await this.$axios.$put(`/order/update-cart/${id}/`,{quantity:newQty,price:newPrice.toFixed(2)},{
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
            console.log(response)
            commit('INC_ITEM_QTY',idx)
            commit('SET_TOTAL_PRICE')
            commit('ADD_CART_LOCALSTORAGE')
        },
        async decItemQty({commit},{idx,id,qty,price}){
            const response = await this.$axios.$put(`/order/update-cart/${id}/`,{quantity:qty-1,price:(price*qty).toFixed(2)},{
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
            console.log(response)
            commit('DEC_ITEM_QTY',idx)
            commit('SET_TOTAL_PRICE')
            commit('ADD_CART_LOCALSTORAGE')
        },
        async remCartItem({commit},{idx,id}){
            console.log("cart deleted")
            await this.$axios.$delete(`/order/update_cart/${id}`,{
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
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