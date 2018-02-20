import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production'; 

import Axios from 'axios';

Axios.defaults.headers.common.Accept = 'application/vnd.github.v3+json';

Axios.defaults.baseURL = process.env.API_LOCATION;

Object.defineProperty(Vue.prototype, '$http', {
  get(){
    return Axios;
  }
})

import VueRouter from 'vue-router';
import routes from './routes'
Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
});

import VueMaterial from 'vue-material';

import './assets/sass/app.scss';

Vue.use(VueMaterial);


export default{
  router,
};