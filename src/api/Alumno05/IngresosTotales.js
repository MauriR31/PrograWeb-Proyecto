import base from '../base.js';

const endpoint = 'admin/ingresos';

const getRevenueByDate = async (startDate, endDate) => {
  try {
    const response = await base.get(`${endpoint}/revenueByDate?startDate=${startDate}&endDate=${endDate}`);
    console.log (response.revenue);
    return response.revenue;
  } catch (error) {
    console.error("Error al obtener ingresos:", error);
    return null;
  }
};

const api = { getRevenueByDate };

export default api;
