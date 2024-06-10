import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AgregarProducto({ onAgregarProducto }) {
  const [busqueda, setBusqueda] = useState('');
  const [productos, setProductos] = useState([]);

  // Datos iniciales de productos
  const productoEncontrado = [
    { id: 1, desc: 'Colección de historias épicas publicada por Ediciones Fénix' },
    { id: 2, desc: 'Colección de crónicas publicada por Editorial Estrella' },
    { id: 3, desc: 'Colección de misterios publicada por Mundo Literario' },
    { id: 4, desc: 'Colección de leyendas publicada por Ediciones Cosmos' },
    { id: 5, desc: 'Colección de secretos publicada por Editorial Horizonte' },
    { id: 6, desc: 'Colección de relatos publicada por Ediciones Fénix' },
    { id: 7, desc: 'Colección de enigmas publicada por Mundo Literario' },
    { id: 8, desc: 'Colección de héroes publicada por Editorial Estrella' },
    { id: 9, desc: 'Colección de sombras publicada por Ediciones Cosmos' },
    { id: 10, desc: 'Colección de viajes publicada por Editorial Horizonte' },
    { id: 11, desc: 'Colección de cuentos publicada por Mundo Literario' },
    { id: 12, desc: 'Colección de aventuras publicada por Ediciones Cosmos' },
    { id: 13, desc: 'Colección de fantasías publicada por Ediciones Fénix' },
    { id: 14, desc: 'Colección de relatos publicada por Editorial Estrella' },
    { id: 15, desc: 'Colección de historias publicada por Mundo Literario' },
    { id: 16, desc: 'Colección de leyendas publicada por Ediciones Cosmos' },
    { id: 17, desc: 'Colección de crónicas publicada por Ediciones Fénix' },
    { id: 18, desc: 'Colección de secretos publicada por Editorial Horizonte' },
    { id: 19, desc: 'Colección de aventuras publicada por Mundo Literario' },
    { id: 20, desc: 'Colección de relatos publicada por Editorial Estrella' }
  ];

  localStorage.setItem('productos', JSON.stringify(productoEncontrado));
  // Cargar productos al montar el componente
  useEffect(() => {
    setProductos(productoEncontrado);
  }, []);

  // Función para buscar productos por ID
  const handleBuscar = () => {
    const resultado = productoEncontrado.filter(producto =>
      producto.id === parseInt(busqueda)
    );
    setProductos(resultado);
  };

  const handleAgregarProducto = (id) => {
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
                  <td className="border border-gray-400 p-2">{producto.desc}</td>
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
