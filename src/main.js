// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// 加载 bootstrap 的样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 加载开源图标库
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/index.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
