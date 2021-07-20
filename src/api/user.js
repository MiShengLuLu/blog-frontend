import request from '@/utils/request'

export default {
  // 登陆
  login: data => request({
    method: 'post',
    url: 'auth/local',
    data
  })
}