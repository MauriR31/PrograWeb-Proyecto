import "./Dashboard.css";
import Encabezado from "../../../componentes/Header/HeaderParcial.jsx";
import Footer from "../../../componentes/Footer/Footer.jsx";

const Dashboard = () => {
  const SummaryCard = ({ title, value }) => (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="text-xl mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );

  return (
    <div>
      <Encabezado />

      <main className="StyleMain flex">
        <div className="DivBarraAdmin">
          <ol>
            <li className="Supertexto">Admin</li>
            <li className="MoverDerecha">Dashboard</li>
            <li className="MoverDerecha">Usuarios Registrados</li>
            <li className="MoverDerecha">Productos</li>
            <li className="MoverDerecha">Órdenes</li>
            <li className="MoverDerecha">Productos más vendidos</li>
            <li className="MoverDerecha">Series</li>
          </ol>
        </div>
        <div className="ContentArea flex-1">
          <div className="BarraDashboard">
            <h3>Dashboard</h3>
            <h3 className="Fecha ml-auto">Cambiar Fecha o Periodo</h3>
          </div>
          <div className="SummaryCards grid grid-cols-1 md:grid-cols-3 gap-4">
            <SummaryCard title="Órdenes del día de hoy" value="68" />
            <SummaryCard title="Usuarios nuevos" value="12" />
            <SummaryCard title="Ingresos de hoy" value="S/ 13,500.00" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
