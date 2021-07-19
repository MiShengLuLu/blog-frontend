import request from '@/utils/request'

export const list = params => request({
  method: 'get',
  url: '/posts',
  params
})

export const create = data => request({
  method: 'post',
  url: '/posts',
  data
})

export const edit = data => request({
  method: 'put',
  url: '/posts/' + data.id,
  data
})

export const single = params => request({
  method: 'get',
  url: '/posts',
  params
})

export const del = id => request({
  method: 'delete',
  url: '/posts/' + id
})