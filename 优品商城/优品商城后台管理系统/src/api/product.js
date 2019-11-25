import { get, post, put, del } from '../utils/request'

export function products(params) {
  return get('/api/v1/admin/products', params)
}

export function getProductById(id) {
  return get(`/api/v1/admin/products/${id}`)
}

export function createOne(model) {
  return post('/api/v1/admin/products', model)
}

export function upDateById(id, model) {
  return put(`/api/v1/admin/products/${id}`, model)
}

export function delById(id) {
  return del(`/api/v1/admin/products/${id}`)
}
