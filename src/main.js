// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vue from 'vue'
import Vuex from 'vuex'
import Store from '@/store'
import util from '@/utils/util'
import share from '@/utils/share'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'mavon-editor/dist/markdown/github-markdown.min.css'


import DefaultLayout from '~/layouts/Default.vue'

import '@/assets/css/common.css'

// 注册 mavonEditor
Vue.use(mavonEditor)


export default function (Vue, { appOptions, router, head, isClient }) {
  Vue.use(Vuex)
  appOptions.store = new Vuex.Store(Store)

  // 注册 element-ui
  Vue.use(ElementUI)
  // 注册 mavonEditor
  // Vue.use(mavonEditor)

  Vue.prototype.$markdown = function (value) {
    return mavonEditor.markdownIt.render(value)
  }

  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.prototype.$util = util
  Vue.prototype.$share = share
}
