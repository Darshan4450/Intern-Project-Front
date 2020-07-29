import axios from '../bootstrap'
const Cart = {
    state: {
        order: {
            shop: '',
            items: [],
            total: 0
        }
    },
    actions: {
        addItemToCart({ rootState, state }, item) {
            let id = state.order.items.find(i => i._id === item._id)
            if(id) {
                rootState.message = "Already in the Cart."
            } else {
                item.quantity = 1
                state.order.items.push(item)
                state.order.total += item.price
            }
            setTimeout(() => {
                rootState.message = null
            }, 2000);
        },
        removeItem({ state }, item) {
            state.order.items = state.order.items.filter(i => i._id !== item._id)
            state.order.total -= (item.price * item.quantity)
        },
        incQuantity({ state }, item) {
            state.order.items.map(i => {
                if(i._id === item._id) i.quantity++
            })
            state.order.total += item.price
        },
        decQuantity({ state }, item) {
            if(item.quantity > 1) {
                state.order.items.map(i => {
                    if(i._id === item._id) i.quantity--
                })
                state.order.total -= item.price
            }
        },
        resetCart({ state }) {
            state.order = {
                items: [],
                total: 0
            }
        }
    },
    getters: {
        
    }
}
export default Cart