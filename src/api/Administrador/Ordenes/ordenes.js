import base from '../../base.js'

const endpoint = 'Admin/OrdenLog'

const findAll = async () => await base.get(endpoint)

const api = { findAll }

export default api;