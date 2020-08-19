import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import Notifications from "vue-notification";
Vue.use(Notifications);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
