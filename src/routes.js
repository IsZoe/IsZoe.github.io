import index from './views/index.vue';
import find from './views/find.vue';
import inform from './views/inform.vue';
import usercenter from './views/usercenter.vue';
import add from './views/add.vue';
import repassword from './views/repassword.vue';
import login from './views/login.vue';

const routes = [{
	path: '/',
	name: 'index',
	component: index
}, {
	path: '/find',
	name: 'find',
	component: find
}, {
	path: '/inform',
	name: 'inform',
	component: inform
}, {
	path: '/usercenter',
	name: 'usercenter',
	component: usercenter
}, {
	path: '/add',
	name: 'add',
	component: add
}, {
	path: '/repassword',
	name: 'repassword',
	component: repassword
}, {
	path: '/login',
	name: 'login',
	component: login
}]

export default routes;
