import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../page/Hello';
import MainView from '../page/MainView';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/thethechat-vue',
      name: MainView.name,
      component: MainView
    }
  ]
});
