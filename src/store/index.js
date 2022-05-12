function updateLocalStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart)) //dari cart didalam state jadikan string dan masukkan ke dalam localstorage
}

import  { createStore } from 'vuex'


export default createStore({
    state:{
        cart:[]
    },
    getters:{
        productQuantity: state => product => {
            const item = state.cart.find(i => i.id_product === product.id_product)
            if(item){
                return item.quantity
            }else {
                return null
            }
            // updateLocalStorage(state.cart)
        }
        
    },
    mutations:{
        addToCart(state, product){
            let item = state.cart.find(i => i.id_product === product.id_product)
            if(item){
                item.quantity++;
            }else {
                state.cart.push({...product, quantity: 1})
            }
            updateLocalStorage(state.cart)
        },

        removeItem(state, product){
            let item = state.cart.find(i => i.id_product === product.id_product)
            if(item){
                if(item.quantity > 1){
                    item.quantity--
                } else {
                    state.cart = state.cart.filter( i => i.id_product !== product.id_product)
                }
            }
            updateLocalStorage(state.cart)
        },

        updateCartFromLocalStorage(state){
            const cart = localStorage.getItem('cart')
            if(cart){
                state.cart = JSON.parse(cart)
            }
        }
    },
    actions:{

    },
    modules:{

    }
})