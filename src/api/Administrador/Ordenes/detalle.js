import base from '../../base.js'

const endpoint = 'admin/ordenes/detalle'

const findOne = async (id) => await base.get(`${endpoint}/${id}`)

const remove = async (id) => await base.remove(`${endpoint}/${id}`)

const update = async (payload) => await base.put(endpoint, payload)

const api = { findOne, remove, update }

export default api;