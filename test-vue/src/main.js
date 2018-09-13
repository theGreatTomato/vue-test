
import Vue from 'vue'
import Vuex from 'vuex'
import Acc from './learnRoute/routeContainer.vue'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(Vuex)
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    count: 1,
    status: '加载中...',
    listData: [
      {
        text: 'xxx'
      },
      {
        text: 'yyy'
      },
      {
        text: 'zzz'
      }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.listData.filter(todo => todo.text)
    }
  },
  mutations: {
    // 传的参数最好是对象  state的值只能用commit去改变
    increment (state, payloads) {
      state.count += payloads.num
    }
  },
  actions: {
    increment (context, paylaods) {
      context.state.status = '加载中...'
      setTimeout(() => {
        context.state.status = '加载完成'
        context.commit('increment', paylaods)
      }, 1000)
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { Acc },
  template: '<Acc/>'
})
