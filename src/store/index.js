import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import Auth from './Auth.module'
import Shop from './Shop.module'
import Cart from './Cart.module'
Vue.use(Vuex);


export default new Vuex.Store({
  state: { loading: false, message: null },
  modules: { Auth, Shop, Cart }
});
