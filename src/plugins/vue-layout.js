import Vue from 'vue';
import router from '../router/index';
import store from '../store/index';

// Vue.component('my-layout',{

//     render: function(createElement, context){

//         return createElement('div',{},context.children)

//     }

// })
const layouts = {
  install(Vue, option) {
    if (option.layouts.length) {
      option.layouts.forEach((item) =>
        Vue.component(item, () => import(`../layouts/${item}.vue`))
      );
    }
  }
};

Vue.use(layouts, { layouts: ['BaseLayout', 'BaseLayoutTest'] });

router.afterEach((to) => {
  if (to.meta.layout) {
    store.commit('setState', {
      type: 'layout',
      data: to.meta.layout
    });
  } else {
    store.commit('setState', {
      type: 'layout',
      data: 'BaseLayout'
    });
  }
});
