import request from '@/utils/request'

export const followersSingle = id => request({
  method: 'get',
  url: 'followers/' + id
})

export const followingSingle = id => request({
  method: 'get',
  url: 'followings/' + id
})