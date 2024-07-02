import base from '../../base.js'

const endpoint = 'admin/clientes'

const findAll = async () => await base.get(endpoint)

const update = async (payload) => await base.put(endpoint, payload)

const api = { findAll, update }

export default api;