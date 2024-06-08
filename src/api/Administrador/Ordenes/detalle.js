import base from '../../base.js'

const endpoint = 'Admin/OrdenLog/Detail'

const findOne = async () => await base.get(`${endpoint}/${id}`)

const update = async (payload) => await base.put(endpoint, payload)

const api = { findOne, update }

export default api;