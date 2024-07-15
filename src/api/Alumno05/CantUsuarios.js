import base from '../base.js';

const endpoint = 'admin/cantidadusuarios';

const getUsersByDate = async (startDate, endDate) => {
  try {
    const response = await base.get(`${endpoint}/usersByDate?startDate=${startDate}&endDate=${endDate}`);
    console.log (response.users);
    return response.users;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return null;
  }
};

const api = { getUsersByDate };

export default api;
