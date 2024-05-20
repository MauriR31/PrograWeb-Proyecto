import React, { useState } from 'react';

const DetalleProducto = () => {
  const [cantidad, setCantidad] = useState(1);

  const incrementarCantidad = () => setCantidad(cantidad + 1);
  const decrementarCantidad = () => setCantidad(cantidad > 1 ? cantidad - 1 : 1);

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4 border-b">
        <h1 className="text-xl font-bold">TIENDA</h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700">Más vendidos</a>
          <a href="#" className="text-gray-700">Nuevos</a>
          <a href="#" className="text-gray-700">Ofertas</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700">Ayuda</a>
          <a href="#" className="text-black font-bold">Mi Cuenta</a>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-200 h-64"></div>
        <div>
          <h2 className="text-2xl font-bold">Título de Producto: Puede ser bastante largo</h2>
          <p className="text-gray-600 mt-2">Por: HASBRO - Serie: Avengers Endgame</p>
          <div className="border p-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg">DISPONIBLE</span>
              <span className="text-3xl font-bold">S/88.99</span>
            </div>
            <button className="bg-black text-white py-2 px-4 mt-4 w-full">AÑADIR AL CARRITO</button>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg">Cantidad:</span>
              <div className="flex items-center space-x-2">
                <button onClick={decrementarCantidad} className="bg-gray-300 px-2">-</button>
                <span>{cantidad}</span>
                <button onClick={incrementarCantidad} className="bg-gray-300 px-2">+</button>
              </div>
            </div>
            <a href="#" className="text-blue-500 mt-2 block text-center">Ver métodos de envío disponibles</a>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Descripción</h3>
        <p className="mt-2 text-gray-700">
          From the Voltron franchise comes a new Mini Action Voltron Vehicle Force figure by Action Toys. This figure is highly articulated and able to produce various poses from the series, along with being able to separate various parts to form vehicles. This Voltron Vehicle Force toy figure is sure to be a great addition to any Voltron collection!
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Características del Producto:</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Mide 18 centímetros</li>
          <li>Hecho de PVC</li>
          <li>De la serie Voltron</li>
          <li>Articulado</li>
          <li>15 piezas distintas</li>
          <li>Combinable con otras figuras</li>
        </ul>
      </div>
      <footer className="bg-gray-100 mt-8 py-4">
        <div className="container mx-auto flex justify-between">
          <p>© 2010 - 2020 La Tiendita del Abuelo</p>
          <div className="flex space-x-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DetalleProducto;
