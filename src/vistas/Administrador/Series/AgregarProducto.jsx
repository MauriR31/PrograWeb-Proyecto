import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HVacio from '../../../componentes/Header/HVacio';
import Footer from '../../../componentes/Footer';
import BotonMenuPagina from "../../../componentes/ConvetirOAdaptar/BotonMenuPagina";

function AgregarProducto({ onAgregarProducto }) {
  const [busqueda, setBusqueda] = useState('');
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  const serie = [
    { id: 1, nombre: 'Colección de gadgets inteligentes como relojes y pulseras' },
    { id: 2, nombre: 'Colección de equipos de audio de alta fidelidad' },
    { id: 3, nombre: 'Colección de electrodomésticos modernos para el hogar' },
    { id: 4, nombre: 'Colección de computadoras y laptops de última generación' },
    { id: 5, nombre: 'Colección de smartphones y tablets de diversas marcas' },
    { id: 6, nombre: 'Colección de cámaras fotográficas y accesorios' },
    { id: 7, nombre: 'Colección de videojuegos y consolas de todas las generaciones' },
    { id: 8, nombre: 'Colección de routers, switches y otros equipos de red' },
    { id: 9, nombre: 'Colección de televisores y sistemas de entretenimiento en casa' },
    { id: 10, nombre: 'Colección de accesorios para diversos dispositivos electrónicos' },
    { id: 11, nombre: 'Colección de impresoras y escáneres multifuncionales' },
    { id: 12, nombre: 'Colección de dispositivos y accesorios de realidad virtual' },
    { id: 13, nombre: 'Colección de componentes para ensamblar y mejorar PCs' },
    { id: 14, nombre: 'Colección de drones, robots y accesorios relacionados' },
    { id: 15, nombre: 'Colección de equipos de audio profesional para estudios' },
    { id: 16, nombre: 'Colección de dispositivos electrónicos para automóviles' },
    { id: 17, nombre: 'Colección de dispositivos electrónicos para el hogar inteligente' },
    { id: 18, nombre: 'Colección de dispositivos wearables como relojes inteligentes' },
    { id: 19, nombre: 'Colección de equipos de iluminación LED y sistemas inteligentes' },
    { id: 20, nombre: 'Colección de electrodomésticos y gadgets para la cocina' },
    { id: 21, nombre: 'Colección de monitores y pantallas de alta resolución' },
    { id: 22, nombre: 'Colección de cámaras de seguridad y sistemas de monitoreo' },
    { id: 23, nombre: 'Colección de proyectores y accesorios relacionados' },
    { id: 24, nombre: 'Colección de sistemas de energía como baterías y paneles solares' },
    { id: 25, nombre: 'Colección de dispositivos electrónicos para oficina' },
    { id: 26, nombre: 'Colección de dispositivos para la automatización del hogar' },
    { id: 27, nombre: 'Colección de juguetes electrónicos y educativos' },
    { id: 28, nombre: 'Colección de accesorios para teléfonos móviles' },
    { id: 29, nombre: 'Colección de dispositivos tecnológicos amigables con el medio ambiente' },
    { id: 30, nombre: 'Colección de dispositivos electrónicos para uso personal' },
  ];

  useEffect(() => {
    setProductos(serie);
  }, []);

  const handleBuscar = () => {
    const resultado = serie.filter(producto => producto.id === parseInt(busqueda));
    setProductos(resultado);
  };

  const handleReiniciar = () => {
    setBusqueda('');
    setProductos(serie);
  };

  const handleAgregarProducto = (id) => {
    onAgregarProducto(id);
  };

  const handleCancelar = () => {
    navigate('/series/AgregarSeries');
  };

  return (
    <div className="flex flex-col">
      <HVacio/>
      <main id="MainAgregarProducto" className="flex flex-col w-full">
      <BotonMenuPagina/>
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
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Buscar
            </button>
            <button
              onClick={handleReiniciar}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Reiniciar
            </button>
          </div>
          <button
            onClick={handleCancelar}
            className="bg-red-500 text-white px-4 py-2 rounded-lg mb-4"
          >
            Cancelar
          </button>
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
                  <td className="border border-gray-400 p-2">{producto.nombre}</td>
                  <td className="border border-gray-400 p-2">
                    <button 
                      onClick={() => handleAgregarProducto(producto.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    ><link rel="stylesheet" href="/series/AgregarSeries.jsx" />
                      Agregar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default AgregarProducto;
