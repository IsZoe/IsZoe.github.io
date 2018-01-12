//import css from './assets/style/main.scss'

//import Vue from 'vue';
//import VueRouter from 'vue-router';

import App from './views/app.vue';
import routes from './routes.js';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './assets/style/all.scss';


Vue.use(MintUI);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
