import React from 'react';
import BotonMenuPagina from '../../../ConvetirOAdaptar/BotonMenuPagina';

function OrdenesSearch({ buscarOrden, handleSearchChange }) {
  return (
    <section className="p-3.5 flex my-3">
      <button className='block flex-none w-1/5'>
        <BotonMenuPagina />
      </button>
      <input
        type="text"
        name="BuscarN-A-NO"
        id="BuscarN-A-NO"
        placeholder="Buscar por nombre o apellido de usuario o nro de orden..."
        className="max-w-3xl w-full px-4 py-2 rounded-3xl border-slate-950 border-2 bg-white text-gray-800 focus:outline-none"
        value={buscarOrden}
        onChange={handleSearchChange}
      />
    </section>
  );
}

export default OrdenesSearch;
