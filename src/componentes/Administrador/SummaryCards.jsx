const SummaryCard = ({ title, value }) => (
  <div className="bg-white p-4 shadow rounded-lg mb-4">
    <h3 className="text-xl mb-2">{title}</h3>
    <p className="text-3x1 font-bold">{value}</p>
  </div>
);

const TablaDashboard = ({ startDate, endDate }) => {
  const summaryData = {
    orders: 68,
    newUsers: 12,
    revenue: "S/ 13,500.00",
  };

  return (
    <div className="flex-1 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard
          title="Órdenes del día de hoy"
          value={summaryData.orders}
        />
        <SummaryCard title="Usuarios nuevos" value={summaryData.newUsers} />
        <SummaryCard title="Ingresos de hoy" value={summaryData.revenue} />
      </div>
    </div>
  );
};

export default TablaDashboard;
