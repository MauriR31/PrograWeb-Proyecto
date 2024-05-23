import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import BarraPaginacion from '../../../componentes/BarraPaginacion';
import HVacio from '../../../componentes/Header/HVacio';
import Footer from '../../../componentes/Footer';
import View_SVG from '../../../svg/View_SVG'
import BarraPedidoEstado from '../../../componentes/ConvetirOAdaptar/BarraPedidoEstado';
import ConversionFechaTexto from '../../../componentes/ConvetirOAdaptar/ConversionFechaTexto';
import BotonMenuPagina from '../../../componentes/ConvetirOAdaptar/BotonMenuPagina';

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
      <HVacio />
      <div className="flex justify-center py-4">
        <main className="flex flex-col max-w-6xl w-full">
          {/* Primera seccion */}
          <section className="p-3 bg-white rounded-lg mx-3">
            <p className="text-xl font-bold">Órdenes</p>
          </section>

          {/* Segunda seccion */}
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

          {/* Tercera seccion */}
          <section className="p-3.5 text-sm">
            {/* Cabecera de la lista de ordenes */}
            <article className="flex font-bold text-base bg-green-200 p-2 items-center mb-2 px-4">
              <p className="w-[12%]">ID</p>
              <p className="w-[18%]">Usuario</p>
              <p className="w-[14%]">Fecha Orden</p>
              <p className="w-[10%]">Total</p>
              <p className="w-3/12">Correo</p>
              <p className="w-2/12">Estado</p>
              <p className="w-1/12 flex justify-center">Acciones</p>
            </article>
            {/* Cuerpo de la lista de ordenes */}
            <div className='grid grid-cols-1 grid-rows-10'>
              {ordenesEnPagina.map(orden => (
                <article key={orden.id} className="flex bg-white py-2 px-4 hover:bg-slate-100 items-center mb-1 rounded-md">
                  <p className="w-[12%]">{orden.id}</p>
                  <p className="w-[18%]">{orden.usuario}</p>
                  <p className="w-[14%]"><ConversionFechaTexto fechaOriginal={orden.fechaOrden} /></p>
                  <p className="w-[10%]">S/{orden.total.toFixed(2)}</p>
                  <p className="w-3/12">{orden.correo}</p>
                  <p className="w-2/12">{orden.estado}
                    <BarraPedidoEstado  estado={orden.estado} />
                  </p>
                  {/* Columna de Acciones */}
                  <Link
                    to={`/Admin/OrdenLog/Detail/${orden.id}`}
                    class="w-1/12 flex justify-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <View_SVG width="24px" height="24px" fill="LightGreen" />
                  </Link>
                </article>
              ))}
            </div>
            
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
      <Footer />
    </>
  );
}

export default Ordenes;