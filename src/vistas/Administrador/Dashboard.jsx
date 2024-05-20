import Encabezado from "../../componentes/Header/HeaderParcial.jsx";
import Footer from "../../componentes/Footer/Footer.jsx";

const Dashboard = () => {
  const SummaryCard = ({ title, value }) => (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="text-xl mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col">
        <Encabezado />

        <main className="flex-1 p-6 bg-gray-100">
          <div className="flex-1 bg-white p-4 shadow rounded m-4">
            <ol>
              <li>Admin</li>
              <li>Dashboard</li>
              <li>Usuarios Registrados</li>
              <li>Productos</li>
              <li>Órdenes</li>
              <li>Productos más vendidos</li>
              <li>Series</li>
            </ol>
          </div>
          <div className="flex-1 bg-white p-4">
            <span>
              <h3>Dashboard</h3>
            </span>
            <span>
              <h3>Cambiar Fecha o Periodo</h3>
            </span>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
