import { Link } from 'react-router-dom';
import Sidebar from '../../../componentes/BarraLateralAdmin';
import Footer from '../../../componentes/Footer';

const Productos = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="p-4 bg-white shadow">
          <h1 className="text-xl font-bold">Productos</h1>
        </header>
        <main className="flex-1 p-6 bg-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl">Lista de Productos</h2>
            <Link to="/admin/productos/agregar" className="px-4 py-2 bg-blue-500 text-white rounded">+ Agregar Producto</Link>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Buscar por id, serie o detalle..."
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Detalle</th>
                  <th className="px-4 py-2">Serie</th>
                  <th className="px-4 py-2">Precio</th>
                  <th className="px-4 py-2">Fecha de Registro</th>
                  <th className="px-4 py-2">Stock</th>
                  <th className="px-4 py-2">Estado</th>
                  <th className="px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {/* Ejemplo de fila de producto */}
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">Manga Dragon Ball Vol 1</td>
                  <td className="border px-4 py-2">Dragon Ball</td>
                  <td className="border px-4 py-2">S/ 30.99</td>
                  <td className="border px-4 py-2">11/02/2022</td>
                  <td className="border px-4 py-2">12</td>
                  <td className="border px-4 py-2">Activo</td>
                  <td className="border px-4 py-2">
                    <Link to="/admin/productos/1" className="text-blue-500">Ver</Link> | 
                    <button className="text-red-500 ml-2">Desactivar</button>
                  </td>
                </tr>
                {/* Repetir filas según los productos */}
              </tbody>
            </table>
            <div className="mt-4 flex justify-between items-center">
              <button className="px-4 py-2 bg-gray-300 rounded">Anterior</button>
              <div>1 2 3 4 5 ... 11</div>
              <button className="px-4 py-2 bg-gray-300 rounded">Siguiente</button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Productos;
