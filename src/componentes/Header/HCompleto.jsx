import React from 'react';
import { Link } from 'react-router-dom';

function ProductTable() {
  return (
    <header className="bg-gray-200 text-black shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <nav className="MenuCabecera">
          <Link to="/">
            <h1 className="text-2xl font-bold text-black">TIENDA</h1>
          </Link>
        </nav>

        <nav className="MenuCabecera2 hidden lg:flex items-center" style={{ marginLeft: '100px' }}>
          <Link to="/nuevos" className="text-gray-600 hover:text-gray-800 ml-6">Nuevos</Link>
          <Link to="/Masvendidos" className="text-gray-600 hover:text-gray-800 ml-6" style={{ marginLeft: '66px' }}>Más vendidos</Link>
          <Link to="/ofertas" className="text-gray-600 hover:text-gray-800 ml-6" style={{ marginLeft: '66px' }}>Ofertas</Link>
        </nav>

        <nav className="ml-0 lg:ml-auto flex items-center">
          <a href="#" className="Carrito mr-10">
              <Link to="/carrito"><img src="https://icons.veryicon.com/png/o/miscellaneous/forestry-in-yiliang/shop-car.png"
              alt="Carrito de Compras" className="w-8 h-8" /></Link>
          </a>

          <div className="help hidden lg:block mr-8">
            <a href="#" className="text-gray-600 hover:text-gray-800">Ayuda</a>
          </div>

          <Link to="/login" className="Cuenta bg-gray-700 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-800 mr-1">Mi Cuenta</Link>
        </nav>
      </div>
    </header>
  );
}

export default ProductTable;
