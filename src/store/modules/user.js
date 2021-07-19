import Vue from 'vue'
import UserApi from '@/api/user'
import Cookie from '@/utils/cookie'

const TOKEN_KEY = "TOKEN_KEY"

const user = {
  state: {
    avatarUrl: null,
    name: null,
    location: null,
    blog: null,
    followers: 0,
    following: 0,
    token: Cookie.getAttribute(TOKEN_KEY)
  },

  mutations: {
    SET_AVATAR_URL: (state, value) => {
      state.avatarUrl = value
    },
    SET_NAME: (state, value) => {
      state.name = value
    },
    SET_LOCATION: (state, value) => {
      state.location = value
    },
    SET_BLOG: (state, value) => {
      state.blog = value
    },
    SET_FOLLOWERS: (state, value) => {
      state.followers = value
    },
    SET_FOLLOWING: (state, value) => {
      state.following = value
    },
    SET_TOKEN: (state, value) => {
      state.token = value
      Cookie.setAttribute(TOKEN_KEY, value, 30)
    },
    REMOVE_TOKEN: (state) => {
      state.token = null
      Cookie.remove(TOKEN_KEY)
    }
  },

  actions: {
    // 用户登陆 获取用户信息与 token
    GetInfo({ commit, rootState }, data) {
      return UserApi.login(data)
        .then((response) => {
          let { user, jwt } = response.data
          commit('SET_AVATAR_URL', user['avatarUrl'].url)
          commit('SET_NAME', user['userName'])
          commit('SET_LOCATION', user['location'])
          commit('SET_BLOG', user['blog'])
          commit('SET_FOLLOWERS', user['followers'])
          commit('SET_FOLLOWING', user['following'])

          commit('SET_TOKEN', jwt)
          return Promise.resolve(true)
        }).catch(err => {
          return Promise.reject(false)
        })

    },
    Cancellation({ commit }) {
      commit('REMOVE_TOKEN')
      Vue.prototype.$message({
        message: 'Token取消绑定',
        type: 'info'
      })
    },
  }
}

export default user