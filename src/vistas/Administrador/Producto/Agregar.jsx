import { Link } from 'react-router-dom';
import Sidebar from '../../../componentes/BarraLateralAdmin';
import Footer from '../../../componentes/Footer';

const Agregar = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="p-4 bg-white shadow">
          <h1 className="text-xl font-bold">Agregar Producto</h1>
        </header>
        <main className="flex-1 p-6 bg-gray-100">
          <div className="bg-white p-6 shadow rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="border-dashed border-2 border-gray-300 h-64 flex items-center justify-center">
                  <span className="text-gray-400">Agregar Imagen</span>
                </div>
                <button className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded">Agregar Imagen</button>
              </div>
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700">Nombre</label>
                  <input type="text" className="p-2 border border-gray-300 rounded w-full" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Descripción</label>
                  <textarea className="p-2 border border-gray-300 rounded w-full" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Características</label>
                  <textarea className="p-2 border border-gray-300 rounded w-full" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-700">Marca</label>
                    <input type="text" className="p-2 border border-gray-300 rounded w-full" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Serie</label>
                    <input type="text" className="p-2 border border-gray-300 rounded w-full" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Precio</label>
                    <input type="number" className="p-2 border border-gray-300 rounded w-full" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Tipo</label>
                    <input type="text" className="p-2 border border-gray-300 rounded w-full" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Stock</label>
                    <input type="number" className="p-2 border border-gray-300 rounded w-full" />
                  </div>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Guardar</button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Agregar;
