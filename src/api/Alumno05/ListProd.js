import base from '../base.js';

const endpoint = 'admin/productos'

const findAll = async () => await base.get(endpoint)

const findOne = async (id) => await base.get(`${endpoint}/${id}`)

const findAllComplete = async () => await base.get(`${endpoint}/findallcomplete`)

const api = { findAll, findOne, findAllComplete }

export default api;