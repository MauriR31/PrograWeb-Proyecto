import base from '../../base.js'

const endpoint = 'admin/clientes/detalle'

const findOne = async (id) => await base.get(`${endpoint}/${id}`)

const api = { findOne }

export default api;