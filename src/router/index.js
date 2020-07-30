import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import ShopRegister from '../views/ShopRegistration.vue'
import ShopLogin from '../views/ShopLogin.vue'
import ShopItems from '../views/ShopItems.vue'
import ShopList from '../views/ShopList.vue'
import Profile from "../views/Profile.vue"
import Categories from "../views/Categories.vue"
import EditProfile from "../views/EditProfile.vue"

export const routes = {
    '/login': { component: Login },
    '/register': { component: Register },
    '/dashboard': { component: Dashboard },
    '/shopregister': { component: ShopRegister },
    '/shoplogin': { component: ShopLogin },
    '/shopitems': { component: ShopItems },
    '/shoplist': { component: ShopList },
    '/profile': { component: Profile },
    '/categories': { component: Categories },
    '/editprofile': { component: EditProfile },
    '/item': { component: require("../views/Item.vue").default },
    '/additem': { component: require("../views/AddItem.vue").default },
    '/address': { component: require("../views/Address.vue").default },
    '/addaddress': { component: require("../views/AddAddress.vue").default },
    '/cart': { component: require("../views/Cart.vue").default },
    '/orders': { component: require("../views/Orders.vue").default },
    '/orderhistory': { component: require("../views/OrderHistory.vue").default },
    '/checkout': { component: require('../views/CheckOut.vue').default },
    '/trackorder': { component: require('../views/TrackOrder.vue').default }
}