import base from '../base.js'

const endpoint = 'cliente'

const findAll = async () => await base.get(endpoint)

const findOne = async (id) => await base.get(`${endpoint}/${id}`)

const findAllComplete = async () => await base.get(`${endpoint}/findallcomplete`)

const create = async (payload) => await base.post(endpoint, payload)

const api = { findAll, findOne, findAllComplete, create}

export default api;