import base from '../../base.js'

const endpoint = 'Admin/UsersLog/Detail'

const findOne = async (id) => await base.get(`${endpoint}/${id}`)

const api = { findOne }

export default api;