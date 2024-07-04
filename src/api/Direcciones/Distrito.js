import base from '../base.js'

const endpoint = 'distrito'

const findAll = async () => await base.get(endpoint)

const api = {  findAll }

export default api;