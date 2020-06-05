import Vue from 'vue';
import markdown from './directives/markdown';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.directive('markdown', markdown);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
