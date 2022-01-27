import Vue from 'vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

export default () => {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/foo', component: Foo,
      },
      {
        path: '/bar', component: Bar
      }
     ]
  })
  return router;
}