import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductTable() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let timer;

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDropdownOpen = () => {
    clearTimeout(timer);
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    timer = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <header className="bg-blue-200 text-black shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        <nav className="MenuCabecera">
          <Link to="/">
            <h1 className="text-2xl font-bold text-black">TIENDA</h1>
          </Link>
        </nav>

        <div className="flex items-center">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none ml-14"
            onClick={toggleDrawer}
            aria-label="Toggle drawer"
          >
            Menú
          </button>

          {isDrawerOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50" onClick={toggleDrawer}>
              <div className="absolute inset-y-0 left-0 max-w-xs w-full bg-white shadow-lg">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h5 className="text-lg font-semibold text-gray-800">¡Hola!</h5>
                  <button
                    className="text-gray-500 hover:text-gray-800 focus:outline-none"
                    onClick={toggleDrawer}
                    aria-label="Close drawer"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="py-4">
                  <ul>
                    <li className="px-4 py-2 hover:bg-blue-100">
                      <Link to="/Nuevos" className="block px-4 py-2 hover:bg-blue-100">Nuevos</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-blue-100">
                      <Link to="/Ofertas" className="block px-4 py-2 hover:bg-blue-100">Ofertas</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-blue-100">
                      <Link to="/MasVendidos" className="block px-4 py-2 hover:bg-blue-100">Más Vendidos</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>

        <nav className="ml-0 lg:ml-auto flex items-center">
          <a href="#" className="Carrito mr-10">
            <Link to="/carrito">
              <img src="https://icons.veryicon.com/png/o/miscellaneous/forestry-in-yiliang/shop-car.png"
                alt="Carrito de Compras" className="w-8 h-8" />
            </Link>
          </a>

          <div className="help hidden lg:block mr-8">
            <a href="#" className="text-gray-600 hover:text-gray-800">Ayuda</a>
          </div>

          <div className="relative">
            <button
              id="dropdownHoverButton"
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
              className="Cuenta bg-gray-700 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-800 mr-1 cursor-pointer inline-flex items-center"
            >
              Iniciar Sesión
            </button>

            {isDropdownOpen && (
              <div
                id="dropdownHover"
                className="absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                onMouseEnter={handleDropdownOpen}
                onMouseLeave={handleDropdownClose}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Iniciar Sesión</Link>
                  </li>
                  <li>
                    <Link to="/registro" className="block px-4 py-2 hover:bg-gray-100">Regístrate</Link>
                  </li>
        
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default ProductTable;
