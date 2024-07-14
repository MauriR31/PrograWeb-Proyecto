import base from '../api/base'

const endpoint = 'ListProduct'

const findAll = async () => await base.get(endpoint)

const api = { findAll }

export default api;