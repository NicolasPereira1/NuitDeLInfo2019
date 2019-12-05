import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Accueil from './components/Accueil';
import Login from './components/Login';

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  mode : "history",
  routes : [
    { path: '/', redirect: '/accueil'},
    { path: '/accueil', component: Accueil},
    { path: '/login', component: Login}
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
