import base from '../base.js';

const endpoint = 'admin/cantidadordenes';

const getOrdersByDate = async (startDate, endDate) => {
  try {
    const response = await base.get(`${endpoint}/ordersByDate?startDate=${startDate}&endDate=${endDate}`);
    console.log ("aea" + response.count);
    return response.count;
    
  } catch (error) {
    console.error("Error al obtener órdenes:", error);
    return { count: 0 }; // Devolver un objeto por defecto en caso de error
  }
};

const api = { getOrdersByDate };

export default api;
