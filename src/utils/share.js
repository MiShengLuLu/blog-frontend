import Vue from 'vue'
import util from './util'

export default message => {
  if (!message) {
    message = window.location
  } else {
    let arr = (window.location + "").split("#")
    message = arr[0] + "#" + message
  }
  if (util.copy(message)) {
    Vue.prototype.$confirm('链接已复制,去分享给好友吧!!', '分享', {
      showCancelButton: false,
      showClose: false,
      type: 'success'
    })
  } else {
    Vue.prototype.$confirm('链接复制失败,可能因为浏览器不兼容', '分享', {
      showCancelButton: false,
      showClose: false,
      type: 'warning'
    })
  }
}