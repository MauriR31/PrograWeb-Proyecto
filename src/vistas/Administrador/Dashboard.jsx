import { useState } from "react";
import Encabezado from "../../componentes/Header/HCerrarSesion.jsx";
import Footer from "../../componentes/Footer.jsx";
import BotonMenuPagina from "../../componentes/ConvetirOAdaptar/BotonMenuPagina.jsx";
import BarraDashboard from "../../componentes/Administrador/BarraDashboard.jsx";
import Minicalendario from "../../componentes/Administrador/Minicalendario.jsx";
import TablaDashboard from "../../componentes/Administrador/SummaryCards.jsx";

const Dashboard = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (date, type) => {
    if (type === "start") {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  return (
    <div>
      <Encabezado />
      <main className="flex bg-gray-100">
        <BotonMenuPagina />
        <div className="flex-1 flex flex-col ml-4 my-11">
          <BarraDashboard 
            setShowCalendar={setShowCalendar} 
            startDate={startDate} 
            endDate={endDate} 
          />
          {showCalendar && (
            <Minicalendario
              startDate={startDate}
              endDate={endDate}
              handleDateChange={handleDateChange}
              closeCalendar={() => setShowCalendar(false)}
            />
          )}
          <TablaDashboard startDate={startDate} endDate={endDate} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
