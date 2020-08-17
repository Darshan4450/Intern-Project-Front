import axios from "../bootstrap"

const datastorage = require('tns-core-modules/application-settings')
const user = datastorage.getString('user')
const initialState = user ? { isAuth: true, user: JSON.parse(user) } : {isAuth: false, user: null}

const Auth = {
    state: { isAuth: initialState.isAuth, user: initialState.user },
    actions: {
        register({state, rootState}, user) {
            return axios.post('/register', user)
            .then((data) => {
                console.log(data)
                rootState.message = 'Registered. Try to Login.'
                setTimeout(() => {
                    rootState.message = null
                }, 5000);
            })
        },
        login({state}, user) {
            if(user.role === "customer") {
                return axios.post('/login', user)
                .then((data) => {
                    let token = data.data.token
                    let user = {...data.data.user, token}
                    state.user = data.data.user
                    datastorage.setString('user', JSON.stringify(user))
                    state.isAuth = true
                    return data
                })
            } else {
                return axios.post('/shop/login', user)
                .then((data) => {
                    let token = data.data.token
                    let user = {...data.data.shop, token}
                    user.role = "owner"
                    datastorage.setString('user', JSON.stringify(user))
                    state.user = user
                    state.isAuth = true
                    return data
                })
            }
        },
        logout({state}) {
            datastorage.remove('user')
            state.user = null
            state.isAuth = false
            return 1
        },
        addAddress({rootState, state}, address) {
            return axios.post(`/user/addaddress/${state.user._id}`, { address: address })
            .then((data) => {
                rootState.message = 'Address Successfully Saved.'
                state.user.addresses.push(address)
                setTimeout(() => {
                    rootState.message = null
                }, 5000);
            })
        },
        updateUser({rootState, state}, euser) {
            axios.put(`/user/${euser._id}`, euser)
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
    },
}

export default Auth