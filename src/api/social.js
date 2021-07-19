import request from '@/utils/request'

export const followersSingle = params => request({
  method: 'get',
  url: 'followers',
  params
})

export const followingSingle = params => request({
  method: 'get',
  url: 'followings',
  params
})