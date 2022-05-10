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
        }
    },
    actions:{

    },
    modules:{

    }
})