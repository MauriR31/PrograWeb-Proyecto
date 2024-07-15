import { useEffect, useState } from "react";
import GetOrdersByDateAPI from "../../api/Alumno05/CantOrdenes.js";
import GetUsersByDateAPI from "../../api/Alumno05/CantUsuarios.js";
import GetRevenueByDateAPI from "../../api/Alumno05/IngresosTotales.js";

const SummaryCard = ({ title, value }) => (
  <div className="bg-white p-4 shadow rounded-lg mb-4">
    <h3 className="text-xl mb-2">{title}</h3>
    <p className="text-3x1 font-bold">{value}</p>
  </div>
);

const TablaDashboard = ({ startDate, endDate }) => {
  const [summaryData, setSummaryData] = useState({
    orders: 0,
    newUsers: 0,
    revenue: "S/ 0.00",
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log(`Fetching data for range: ${startDate} to ${endDate}`);

      const ordersResponse = await GetOrdersByDateAPI.getOrdersByDate(
        startDate,
        endDate
      );
      const usersResponse = await GetUsersByDateAPI.getUsersByDate(
        startDate,
        endDate
      );
      const revenueResponse = await GetRevenueByDateAPI.getRevenueByDate(
        startDate,
        endDate
      );

      console.log("Orders Response:", ordersResponse);
      console.log("Users Response:", usersResponse);
      console.log("Revenue Response:", revenueResponse);

      setSummaryData({
        orders: ordersResponse || 0,
        newUsers: usersResponse || 0,
        revenue: `S/ ${parseFloat(revenueResponse || 0).toFixed(2)}`,
      });
    };

    fetchData();
  }, [startDate, endDate]);

  return (
    <div className="flex-1 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Órdenes del Periodo" value={summaryData.orders} />
        <SummaryCard
          title="Usuarios Ingresados en el Periodo"
          value={summaryData.newUsers}
        />
        <SummaryCard title="Ingresos del Periodo" value={summaryData.revenue} />
      </div>
    </div>
  );
};

export default TablaDashboard;
