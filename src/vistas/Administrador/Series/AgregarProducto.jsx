import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AgregarProducto({ onAgregarProducto }) {
  const [busqueda, setBusqueda] = useState('');
  const [productos, setProductos] = useState([]);

  // Función para simular la búsqueda de productos por ID
  const handleBuscar = () => {
    // Lógica para buscar el producto por ID
    // En este ejemplo, simulamos una búsqueda simple
    const productoEncontrado = {
      id: Math.floor(Math.random() * 1000), // ID aleatorio para simular el producto encontrado
      descripcion: `Producto encontrado con ID: ${busqueda}` // Descripción basada en el ID ingresado
    };

    setProductos([productoEncontrado]);
  };

  // Función para agregar el producto seleccionado
  const handleAgregarProducto = (id) => {
    // Lógica para agregar el producto seleccionado
    onAgregarProducto(id);
  };

  // Resto del código

  return (
    <div className="flex flex-col">
      <main id="MainAgregarProducto" className="flex flex-col w-full">
        <section id="APCabecera" className="p-4">
          <h2 className="text-xl font-bold">Agregar Producto</h2>
        </section>
        <div className="p-4">
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Buscar por ID"
              className="border-2 border-gray-400 rounded-md w-full p-2 mr-2"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button
              onClick={handleBuscar}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Buscar
            </button>
          </div>
          {/* Mostrar la lista de productos */}
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-2">ID</th>
                <th className="border border-gray-400 p-2">Descripción</th>
                <th className="border border-gray-400 p-2">Acción</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td className="border border-gray-400 p-2">{producto.id}</td>
                  <td className="border border-gray-400 p-2">{producto.descripcion}</td>
                  <td className="border border-gray-400 p-2">
                  <Link to="/series/AgregarSeries" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Agregar</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AgregarProducto;
