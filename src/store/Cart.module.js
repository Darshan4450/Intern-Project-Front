
const Cart = {
    state: {
        items: []
    },
    actions: {
        addItemToCart({ state }, item) {
            item.quantity = 1
            state.items.push(item)
        }
    }
}
export default Cart