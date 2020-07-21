import Vue from 'nativescript-vue';
import Navigator from 'nativescript-vue-navigator';

import './assets/sass/app.scss';
import App from './App.vue';
import { routes } from './router/index';
import store from './store';

Vue.use(Navigator, { routes });

// Set the following to `true` to hide the logs created by nativescript-vue
Vue.config.silent = false;
// Set the following to `false` to not colorize the logs created by nativescript-vue
// disabled in template due to typing issue for Typescript projects....NEEDS TO BE FIXED
// Vue.config.debug = true;

new Vue({
  store,
  render: h => h(App),
}).$start();
