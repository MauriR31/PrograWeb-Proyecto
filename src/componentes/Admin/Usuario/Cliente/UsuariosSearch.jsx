import React from 'react';
import BotonMenuPagina from "../../../ConvetirOAdaptar/BotonMenuPagina";

const UsuariosSearch = ({ buscarUsuario, handleSearchChange }) => (
  <section className="p-3.5 flex my-2">
    <button className="block flex-none w-1/5">
      <BotonMenuPagina />
    </button>
    <input
      type="text"
      name="BuscarC-N-A"
      id="BuscarC-N-A"
      placeholder="Buscar por correo, nombre o apellidos..."
      className="max-w-3xl w-full px-4 py-2 rounded-3xl border-slate-950 border-2 bg-white text-gray-800 focus:outline-none"
      value={buscarUsuario}
      onChange={handleSearchChange}
    />
  </section>
);

export default UsuariosSearch;
