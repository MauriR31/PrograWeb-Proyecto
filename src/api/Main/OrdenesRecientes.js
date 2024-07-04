import base from '../base.js'

const endpoint = 'orden'

const findAll = async () => await base.get(endpoint)

const findOne = async (id) => await base.get(`${endpoint}/${id}`)

const update = async (payload) => await base.put(endpoint, payload)

const api = {  findAll, findOne, update }

export default api;