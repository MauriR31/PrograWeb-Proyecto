const BarraDashboard = ({ setShowCalendar }) => {
  return (
    <div className="flex-1 flex flex-col ml-4">
      <div className="bg-white flex justify-between items-center pl-8 pt-4 pb-4 mb-4 mt-4 rounded-lg shadow-sm">
        <h3 className="font-extrabold">Dashboard</h3>
        <h3
          className="pr-8 ml-auto cursor-pointer font-bold text-blue-500 underline"
          onClick={() => setShowCalendar(true)}
        >
          Cambiar Fecha o Periodo
        </h3>
      </div>
    </div>
  );
};

export default BarraDashboard;
