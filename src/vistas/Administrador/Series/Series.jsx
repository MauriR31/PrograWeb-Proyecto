import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BarraCuenta from '../../../componentes/BarraCuenta';
import BarraPaginacion from '../../../componentes/BarraPaginacion';

function Series() {
  const [busqueda, setBusqueda] = useState('');
  const [opcionBusqueda, setOpcionBusqueda] = useState('nombre');

  const usuarios = [
    { id: 1, nombre: 'DORAGON BOL', desc: 'Descripción 1', fecha: '01/01/2022', nprod: 5, accion: <Link to="/Admin/series/AgregarSeries">Ver</Link> },
    { id: 2, nombre: 'ONE PIECE', desc: 'Descripción 2', fecha: '02/01/2022', nprod: 8, accion: <Link to="/Admin/series/AgregarSeries">Ver</Link> },
    { id: 3, nombre: 'NARUTO', desc: 'Descripción 3', fecha: '03/01/2022', nprod: 10, accion: <Link to="/Admin/series/AgregarSeries">Ver</Link> },
    { id: 4, nombre: 'NARUTO', desc: 'Descripción 3', fecha: '03/01/2022', nprod: 10, accion: <Link to="/Admin/series/AgregarSeries">Ver</Link> },
    { id: 5, nombre: 'NARUTO', desc: 'Descripción 3', fecha: '03/01/2022', nprod: 10, accion: <Link to="/Admin/series/AgregarSeries">Ver</Link> },
    { id: 6, nombre: 'NARUTO', desc: 'Descripción 3', fecha: '03/01/2022', nprod: 10, accion: <Link to="/Admin/series/AgregarSeries">Ver</Link> },
    { id: 7, nombre: 'NARUTO', desc: 'Descripción 3', fecha: '03/01/2022', nprod: 10, accion: <Link to="/Admin/series/AgregarSeries">Ver</Link> },
    { id: 8, nombre: 'NARUTO', desc: 'Descripción 3', fecha: '03/01/2022', nprod: 10, accion: <Link to="/Admin/series/AgregarSeries">Ver</Link> },
    { id: 9, nombre: 'NARUTO', desc: 'Descripción 3', fecha: '03/01/2022', nprod: 10, accion: <Link to="/Admin/series/AgregarSeries">Ver</Link> },
  
  ];

  // Función para manejar el cambio en el input de búsqueda
  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  // Función para manejar el cambio en el selector de búsqueda
  const handleOpcionBusquedaChange = (e) => {
    setOpcionBusqueda(e.target.value);
  };

  // Filtrar usuarios basados en el término de búsqueda y la opción de búsqueda seleccionada
  const usuariosFiltrados = usuarios.filter(usuario => {
    if (opcionBusqueda === 'id') {
      return usuario.id.toString().includes(busqueda.toLowerCase());
    } else {
      return usuario[opcionBusqueda].toLowerCase().includes(busqueda.toLowerCase());
    }
  });

  return (
    <div className="flex">
      <BarraCuenta />
      <main id="MainUsuariosRegistradosAdmin" className="flex flex-col w-5/6">
        <section id="MURACabecera" className="p-4">
          <h2 className="text-xl font-bold">Series</h2>
        </section>
        <section id="MURABuscador" className="p-4 flex items-center justify-between">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-3/4 px-4 py-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:bg-white"
            value={busqueda}
            onChange={handleBusquedaChange}
          />
          <select
            value={opcionBusqueda}
            onChange={handleOpcionBusquedaChange}
            className="w-1/4 px-4 py-2 ml-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:bg-white"
          >
            <option value="id">ID</option>
            <option value="nombre">Nombre</option>
            <option value="desc">Descripción</option>
          </select>
        </section>
        <section id="MURAListado" className="p-3.5 text-sm">
          <article id="MURALCabecera" className="flex bg-gray-300 p-2">
            <p className="flex-none w-12">ID</p>
            <p className="flex-auto w-60">Nombre</p>
            <p className="flex-auto w-60">Descripción</p>
            <p className="flex-auto w-96">Fecha de Creación</p>
            <p className="flex-none w-28">Nro.Productos</p>
            <p className="flex-none w-40">Acciones</p>
          </article>
          {/* Lista actualizable */}
          {usuariosFiltrados.map((usuario) => (
            <article key={usuario.id} className="flex bg-gray-100 p-2">
              <p className="flex-none w-12">{usuario.id}</p>
              <p className="flex-auto w-60">{usuario.nombre}</p>
              <p className="flex-auto w-60">{usuario.desc}</p>
              <p className="flex-auto w-96">{usuario.fecha}</p>
              <p className="flex-none w-28">{usuario.nprod}</p>
              <p className="flex-none w-40">{usuario.accion}</p>
            </article>
          ))}
        </section>
        <section>
          <BarraPaginacion />
        </section>
      </main>
    </div>
  );
}

export default Series;
