import axios from 'axios'
axios.defaults.baseURL = "http://192.168.0.106:4050"
const datastorage = require('tns-core-modules/application-settings')
if(datastorage.getString('user') !== undefined) {
    let token = JSON.parse(datastorage.getString('user')).token
    if(token) axios.defaults.headers['authorization'] = 'Bearer ' + token
}

export default axios