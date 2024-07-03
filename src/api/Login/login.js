import base from '../base.js'

const endpoint = 'cliente'

const findAll = async () => await base.get(endpoint)

const findAllComplete = async () => await base.get(`${endpoint}/findallcomplete`)

const create = async (payload) => await base.post(endpoint, payload)

const api = { findAll, findAllComplete, create}

export default api;