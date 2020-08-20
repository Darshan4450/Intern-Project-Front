import axios from "../bootstrap"

const datastorage = require('tns-core-modules/application-settings')
const Shop = {
    state: { shops: [] },
    actions: {
        addShop({rootState}, shop) {
            return axios.post('/shop/register', shop)
            .then((data) => {
                rootState.message = "Your Request Is Under Verification. We'll Let You Know ASAP."
                setTimeout(() => {
                    rootState.message = null
                }, 3000);
                return
            })
        },
        loadShops({state}, category) {
            state.shops = []
            if(category !== undefined) {
                return axios.get(`/shop?category=${category}`)
                .then((data) => {
                    state.shops = data.data
                    return 1
                })
            } else {
                return axios.get(`/shop`)
                .then((data) => {
                    state.shops = data.data
                    return 1
                })
            }
        },
        updateShop({rootState, state}, shop) {
            delete shop.items
            axios.put(`/shop/${shop._id}`, shop)
            .then((data) => {
                state.user = data.data
                let user = JSON.parse(datastorage.getString('user'))
                datastorage.setString('user', JSON.stringify({...user, image: data.data.image}))
                rootState.message = 'Updated Successfully.'
                setTimeout(() => {
                    rootState.message = null
                }, 5000);
            })
        }
    }
}

export default Shop