import base from '../base.js';

const endpoint = 'admin/crearproducto';

const create = async (data) => {
  try {
    const response = await base.post(`${endpoint}/crear`, data);
    return response.data;
  } catch (error) {
    console.error("Error al crear producto:", error);
    return null;
  }
};

const api = { create };

export default api;
