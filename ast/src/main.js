/*
 * @Author: your name
 * @Date: 2022-04-07 14:34:56
 * @LastEditTime: 2022-04-28 18:46:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-ast/ast/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';
import { Button, Tree } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Tree)
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')