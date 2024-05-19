import React, { useState } from 'react';

function AgregarProducto({ onAgregarProducto }) {
  const [busqueda, setBusqueda] = useState('');
  const [productos, setProductos] = useState([]);

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleBuscar = () => {
    // Aquí implementarías la lógica para buscar productos según la búsqueda
    // En este ejemplo, simularemos una búsqueda simple con un array de productos
    const productos = [
      { id: 1, descripcion: 'Producto 1' },
      { id: 2, descripcion: 'Producto 2' },
      { id: 3, descripcion: 'Producto 3' },
    ];
    setProductos(productos);
  };

  const handleAgregarProducto = (id) => {
    // Lógica para agregar el producto seleccionado
    onAgregarProducto(id);
  };

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
              placeholder="Buscar por ID o descripción"
              className="border-2 border-gray-400 rounded-md w-full p-2 mr-2"
              value={busqueda}
              onChange={handleBusquedaChange}
            />
            <button
              onClick={handleBuscar}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Buscar
            </button>
          </div>
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
                  <td className="border border-gray-400 p-2">{
                    producto.descripcion}</td>
                    <td className="border border-gray-400 p-2">
                      <button onClick={() => handleAgregarProducto(producto.id)} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                        Agregar
                      </button>
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
  