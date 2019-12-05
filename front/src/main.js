import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Accueil from './components/Accueil';
import Login from './components/Login';
import Forum from './components/Forum';
import Economique from './components/Economique';
import Sante from './components/Sante';
import Logement from './components/Logement';
import Familial from './components/Familial';
import Administratif from './components/Administratif';
import Register from "./components/Register";

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  mode : "history",
  routes : [
    { path: '/', redirect: '/accueil'},
    { path: '/accueil', component: Accueil},
    { path: '/login', component: Login},
    { path : '/forum', component: Forum},
    { path : '/logement', component: Logement},
    { path : '/administratif', component: Administratif},
    { path : '/sante', component: Sante},
    { path : '/economique', component: Economique},
    { path : '/familial', component: Familial},
    { path : '/register', component: Register}
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
