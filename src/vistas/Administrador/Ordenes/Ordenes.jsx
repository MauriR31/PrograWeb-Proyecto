import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import BarraCuenta from '../../../componentes/BarraCuenta'
import BarraPaginacion from '../../../componentes/BarraPaginacion';
/** @type {import('tailwindcss').Config} */

function Ordenes() {
  // Cantidad de usuarios a mostrar por página
  const ordenesPorPagina = 10;

  const [ordenes, setOrdenes] = useState([]);
  const [buscarOrden, setbuscarOrden] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);


  useEffect(() => {
    const usuariosData = JSON.parse(localStorage.getItem('usuarios'));
    const ordenesData = JSON.parse(localStorage.getItem('ordenes'));
    const personasData = JSON.parse(localStorage.getItem('personas'));
  
    if (usuariosData && personasData && ordenesData) {
      // Crear una nueva lista combinando información de personas y usuarios
      const nuevaLista = ordenesData.flatMap(orden => {
        // Buscar el usuario correspondiente a la orden
        const usuario = usuariosData.find(usuario => String(usuario.id) === String(orden.usuario_id));
        
        // Si se encontró el usuario, buscar la persona correspondiente
        if (usuario) {
          const persona = personasData.find(persona => String(persona.id) === String(usuario.persona_id));
  
          // Si se encontró la persona, combinar la información
          if (persona) {
            return {
              id: orden.numero,
              usuario: persona.nombre + ", " + persona.apellido,
              correo: usuario.correo,
              fechaOrden: orden.fecha,
              estado: orden.estado,
              total: orden.total
            };
          }
        } else {
          return null;
        }
      }).filter(usuario => usuario !== null); // Filtrar los usuarios nulos
      console.log(nuevaLista)
      setOrdenes(nuevaLista);
    }
  }, []);

  const handleSearchChange = (e) => {
    setbuscarOrden(e.target.value);
    setPaginaActual(1); // Cuando se realiza una nueva búsqueda, volvemos a la primera página
  };

  // Filtrar ordenes basados en el término de búsqueda
  const filtrarOrdenes = ordenes.filter((orden) => {
    // Verificar la igual de ids
    const idMatch = orden.id === buscarOrden;

    // Verificar si el término de búsqueda está incluido en el nombre o apellido
    const nameMatch = orden.usuario.toLowerCase().includes(buscarOrden.toLowerCase());

    // Retornar verdadero si se cumple alguna de las condiciones
    return idMatch || nameMatch;
  });

  // Informacion necesaria para el listado de los ordenes registrados
  // Índice del primer orden en la página actual
  const indiceInicio = (paginaActual - 1) * ordenesPorPagina;
  // Índice del último orden en la página actual
  const indiceFin = paginaActual * ordenesPorPagina;
  // ordenes a mostrar en la página actual, con o sin busqueda
  const ordenesEnPagina = filtrarOrdenes.slice(indiceInicio, indiceFin);


  // Informacion necesaria para la barra de navegacion
  // Cantidad total de páginas, con o sin busqueda
  const totalPaginas = Math.ceil(filtrarOrdenes.length / ordenesPorPagina);
  // Función para cambiar a una página específica
  const irAPagina = (pagina) => {
    setPaginaActual(pagina);
  };


  return (
    <>
      <div className="flex">
        <BarraCuenta />
        <main className="flex flex-col w-5/6">
          <section className="p-4">
            <p className="text-xl font-bold">Órdenes</p>
          </section>
          <section className="p-4">
            <input
              type="text"
              name="BuscarN-A-NO"
              id="BuscarN-A-NO"
              placeholder="Buscar por nombre o apellido de usuario o nro de orden..."
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:bg-white"
              value={buscarOrden}
              onChange={handleSearchChange}
            />
          </section>
          <section className="p-3.5 text-sm">
            {/* Cabecera de la lista de ordenes */}
            <article className="flex bg-gray-300 p-2">
              <p className="flex-none w-28">ID</p>
              <p className="flex-auto w-96">Usuario</p>
              <p className="flex-none w-24">Fecha Orden</p>
              <p className="flex-none w-20">Total</p>
              <p className="flex-auto w-96">Correo</p>
              <p className="flex-none w-24">Estado</p>
              <p className="flex-none w-20 text-center">Acciones</p>
            </article>
            {/* Cuerpo de la lista de ordenes */}
            {ordenesEnPagina.map(orden => (
              <article key={orden.id} className="flex bg-white p-2">
                <p className="flex-none w-28">{orden.id}</p>
                <p className="flex-auto w-96">{orden.usuario}</p>
                <p className="flex-none w-24">{orden.fechaOrden}</p>
                <p className="flex-none w-20">{orden.total}</p>
                <p className="flex-auto w-96">{orden.correo}</p>
                <p className="flex-none w-24">{orden.estado}</p>
                {/* Columna de Acciones */}
                <p className="flex-none w-20 grid justify-center">
                  <Link to={`/Admin/OrdenLog/Detail/${orden.id}`} className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2">Ver</Link>
                </p>
              </article>
            ))}
          </section>

          {/* Barra de paginación */}
          <section>
            <BarraPaginacion
              paginaActual={paginaActual}
              totalPaginas={totalPaginas}
              onChangePagina={irAPagina}
            />
          </section>
        </main>
      </div>
    </>
  );
}

export default Ordenes;