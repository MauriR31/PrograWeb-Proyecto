import base from '../../base.js'

const endpoint = 'admin/ordenes'

const findAll = async () => await base.get(endpoint)

const api = { findAll }

export default api;