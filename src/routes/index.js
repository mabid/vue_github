import repositories from './../pages/repositories/repositories.vue';
import user from './../pages/user/user.vue';
export default [
  {
    path: '/repositories',
    name: 'repositories',
    component: repositories
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/',
    redirect: '/repositories'
  },
  {
    path: '/*',
    redirect: 'repositories'
  }
];