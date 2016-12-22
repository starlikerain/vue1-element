import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import goods from 'components/goods/goods';
import seller from 'components/seller/seller';
import ratings from 'components/ratings/ratings';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(vueResource);

let app = Vue.extend(App);

var router = new VueRouter({
  linkActiveClass:'active'
});


router.map({
  '/goods':{
    component :goods
  },
  '/seller':{
    component :seller
  },
  '/ratings':{
    component :ratings
  }
});

router.start(app, '#app');
// 上线的话就不用router.go
// 直接用带hash 来默认访问这个goods
router.go('/goods');
