import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BarraCuenta from '../../../componentes/BarraCuenta';
import BarraPaginacion from '../../../componentes/BarraPaginacion';
import HVacio from '../../../componentes/Header/HVacio';
import Footer from '../../../componentes/Footer';

function Series() {


  // Función para obtener los valores de localStorage o establecer valores predeterminados
  const obtenerValorLocalStorage = (key, valorInicial) => {
    const valorGuardado = localStorage.getItem(key);
    return valorGuardado ? JSON.parse(valorGuardado) : valorInicial;
  };

  // Estados con valores iniciales obtenidos de localStorage
  const [busqueda, setBusqueda] = useState(() => obtenerValorLocalStorage('busquedaSeries', ''));
  const [opcionBusqueda, setOpcionBusqueda] = useState(() => obtenerValorLocalStorage('opcionBusquedaSeries', 'nombre'));

  // Efecto para guardar el valor de búsqueda en localStorage
  useEffect(() => {
    localStorage.setItem('busquedaSeries', JSON.stringify(busqueda));
  }, [busqueda]);

  // Efecto para guardar la opción de búsqueda en localStorage
  useEffect(() => {
    localStorage.setItem('opcionBusquedaSeries', JSON.stringify(opcionBusqueda));
  }, [opcionBusqueda]);


  
  const usuarios = [
    { id: 1, nombre: 'Historias Épicas de Avalon', desc: 'Colección de historias épicas publicada por Ediciones Fénix', fecha: '15/02/2023', nprod: 7, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 2, nombre: 'Crónicas del Futuro', desc: 'Colección de crónicas publicada por Editorial Estrella', fecha: '28/02/2023', nprod: 12, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 3, nombre: 'Misterios del Pasado', desc: 'Colección de misterios publicada por Mundo Literario', fecha: '10/03/2023', nprod: 9, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 4, nombre: 'Leyendas de la Galaxia', desc: 'Colección de leyendas publicada por Ediciones Cosmos', fecha: '22/03/2023', nprod: 11, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 5, nombre: 'Secretos del Siglo XXI', desc: 'Colección de secretos publicada por Editorial Horizonte', fecha: '05/04/2023', nprod: 8, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 6, nombre: 'Relatos del Reino Perdido', desc: 'Colección de relatos publicada por Ediciones Fénix', fecha: '18/04/2023', nprod: 6, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 7, nombre: 'Enigmas Históricos', desc: 'Colección de enigmas publicada por Mundo Literario', fecha: '30/04/2023', nprod: 5, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 8, nombre: 'Héroes de la Antigüedad', desc: 'Colección de héroes publicada por Editorial Estrella', fecha: '12/05/2023', nprod: 10, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 9, nombre: 'Sombras y Secretos', desc: 'Colección de sombras publicada por Ediciones Cosmos', fecha: '25/05/2023', nprod: 7, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 10, nombre: 'Viajes Imaginarios', desc: 'Colección de viajes publicada por Editorial Horizonte', fecha: '01/06/2023', nprod: 6, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 11, nombre: 'Cuentos de lo Desconocido', desc: 'Colección de cuentos publicada por Mundo Literario', fecha: '10/06/2023', nprod: 8, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 12, nombre: 'Aventuras del Espacio Exterior', desc: 'Colección de aventuras publicada por Ediciones Cosmos', fecha: '20/06/2023', nprod: 9, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 13, nombre: 'Fantasías y Realidades', desc: 'Colección de fantasías publicada por Ediciones Fénix', fecha: '01/07/2023', nprod: 10, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 14, nombre: 'Relatos del Más Allá', desc: 'Colección de relatos publicada por Editorial Estrella', fecha: '12/07/2023', nprod: 7, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 15, nombre: 'Historias de la Edad Media', desc: 'Colección de historias publicada por Mundo Literario', fecha: '22/07/2023', nprod: 11, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 16, nombre: 'Leyendas del Futuro', desc: 'Colección de leyendas publicada por Ediciones Cosmos', fecha: '02/08/2023', nprod: 8, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 17, nombre: 'Crónicas del Espacio-Tiempo', desc: 'Colección de crónicas publicada por Ediciones Fénix', fecha: '12/08/2023', nprod: 10, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 18, nombre: 'Secretos Ocultos', desc: 'Colección de secretos publicada por Editorial Horizonte', fecha: '22/08/2023', nprod: 6, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 19, nombre: 'Aventuras en Tierra Extraña', desc: 'Colección de aventuras publicada por Mundo Literario', fecha: '02/09/2023', nprod: 5, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 20, nombre: 'Relatos de lo Inesperado', desc: 'Colección de relatos publicada por Editorial Estrella', fecha: '12/09/2023', nprod: 7, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 21, nombre: 'Historias del Pasado Perdido', desc: 'Colección de historias publicada por Ediciones Cosmos', fecha: '22/09/2023', nprod: 9, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 22, nombre: 'Cuentos de los Antiguos', desc: 'Colección de cuentos publicada por Ediciones Fénix', fecha: '02/10/2023', nprod: 8, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 23, nombre: 'Crónicas de los Héroes', desc: 'Colección de crónicas publicada por Mundo Literario', fecha: '12/10/2023', nprod: 6, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 24, nombre: 'Leyendas de la Tierra Media', desc: 'Colección de leyendas publicada por Editorial Horizonte', fecha: '22/10/2023', nprod: 10, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 25, nombre: 'Fantasías del Universo', desc: 'Colección de fantasías publicada por Editorial Estrella', fecha: '01/11/2023', nprod: 11, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 26, nombre: 'Historias de lo Imposible', desc: 'Colección de historias publicada por Ediciones Cosmos', fecha: '12/11/2023', nprod: 5, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 27, nombre: 'Relatos de Aventuras Épicas', desc: 'Colección de relatos publicada por Mundo Literario', fecha: '22/11/2023', nprod: 7, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 28, nombre: 'Crónicas del Mundo Perdido', desc: 'Colección de crónicas publicada por Ediciones Fénix', fecha: '02/12/2023', nprod: 8, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 29, nombre: 'Leyendas de los Tiempos Antiguos', desc: 'Colección de leyendas publicada por Editorial Horizonte', fecha: '12/12/2023', nprod: 9, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 30, nombre: 'Secretos de los Magos', desc: 'Colección de secretos publicada por Editorial Estrella', fecha: '22/12/2023', nprod: 10, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 31, nombre: 'Fantasías de la Edad Media', desc: 'Colección de fantasías publicada por Mundo Literario', fecha: '01/01/2024', nprod: 6, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 32, nombre: 'Cuentos de Hadas y Magos', desc: 'Colección de cuentos publicada por Ediciones Cosmos', fecha: '12/01/2024', nprod: 5, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 33, nombre: 'Relatos de Guerreros Legendarios', desc: 'Colección de relatos publicada por Ediciones Fénix', fecha: '22/01/2024', nprod: 7, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 34, nombre: 'Crónicas de los Exploradores', desc: 'Colección de crónicas publicada por Editorial Horizonte', fecha: '02/02/2024', nprod: 8, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 35, nombre: 'Historias de la Ciencia Ficción', desc: 'Colección de historias publicada por Editorial Estrella', fecha: '12/02/2024', nprod: 9, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 36, nombre: 'Leyendas de los Dioses Antiguos', desc: 'Colección de leyendas publicada por Ediciones Cosmos', fecha: '22/02/2024', nprod: 10, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 37, nombre: 'Secretos del Universo', desc: 'Colección de secretos publicada por Ediciones Fénix', fecha: '01/03/2024', nprod: 11, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 38, nombre: 'Relatos de los Tiempos Perdidos', desc: 'Colección de relatos publicada por Mundo Literario', fecha: '12/03/2024', nprod: 6, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 39, nombre: 'Crónicas del Espacio Infinito', desc: 'Colección de crónicas publicada por Editorial Horizonte', fecha: '22/03/2024', nprod: 7, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 40, nombre: 'Historias de la Magia Antigua', desc: 'Colección de historias publicada por Editorial Estrella', fecha: '02/04/2024', nprod: 8, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 41, nombre: 'Fantasías del Futuro Cercano', desc: 'Colección de fantasías publicada por Ediciones Cosmos', fecha: '12/04/2024', nprod: 9, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 42, nombre: 'Relatos de los Sabios', desc: 'Colección de relatos publicada por Ediciones Fénix', fecha: '22/04/2024', nprod: 10, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 43, nombre: 'Crónicas de los Reyes', desc: 'Colección de crónicas publicada por Mundo Literario', fecha: '02/05/2024', nprod: 11, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 44, nombre: 'Leyendas de los Guerreros', desc: 'Colección de leyendas publicada por Editorial Horizonte', fecha: '12/05/2024', nprod: 5, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 45, nombre: 'Historias de lo Desconocido', desc: 'Colección de historias publicada por Editorial Estrella', fecha: '22/05/2024', nprod: 7, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 46, nombre: 'Fantasías de los Mares', desc: 'Colección de fantasías publicada por Ediciones Cosmos', fecha: '02/06/2024', nprod: 6, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 47, nombre: 'Relatos de los Antiguos Dioses', desc: 'Colección de relatos publicada por Ediciones Fénix', fecha: '12/06/2024', nprod: 8, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 48, nombre: 'Crónicas de los Tiempos Modernos', desc: 'Colección de crónicas publicada por Mundo Literario', fecha: '22/06/2024', nprod: 7, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 49, nombre: 'Leyendas de los Héroes Modernos', desc: 'Colección de leyendas publicada por Editorial Horizonte', fecha: '02/07/2024', nprod: 9, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 50, nombre: 'Historias de los Tiempos Inmortales', desc: 'Colección de historias publicada por Editorial Estrella', fecha: '12/07/2024', nprod: 10, accion: <Link to="/series/AgregarSeries">Ver</Link> },
];


  // Establecimiento de la separación de los usuarios en base a una cantidad y la obtención de parámetros de paginación
  // Estado para el índice de la página actual
  const [paginaActual, setPaginaActual] = useState(1);
  // Cantidad de usuarios a mostrar por página
  const usuariosPorPagina = 10;

  // Información necesaria para el listado de los usuarios registrados
  // Índice del primer usuario en la página actual
  const indiceInicio = (paginaActual - 1) * usuariosPorPagina;
  // Índice del último usuario en la página actual
  const indiceFin = paginaActual * usuariosPorPagina;
  // Usuarios a mostrar en la página actual, con o sin búsqueda
  const filteredUsers = usuarios.filter(usuario => {
    if (opcionBusqueda === 'id') {
      return usuario.id.toString().includes(busqueda.toLowerCase());
    } else {
      return usuario[opcionBusqueda].toLowerCase().includes(busqueda.toLowerCase());
    }
  });
  const usuariosEnPagina = filteredUsers.slice(indiceInicio, indiceFin);

  // Información necesaria para la barra de navegación
  // Cantidad total de páginas, con o sin búsqueda
  const totalPaginas = Math.ceil(filteredUsers.length / usuariosPorPagina);
  // Función para cambiar a una página específica
  const irAPagina = (pagina) => {
    setPaginaActual(pagina);
  };

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleOpcionBusquedaChange = (e) => {
    setOpcionBusqueda(e.target.value);
  };
  

  return (
    <>
    <HVacio/>
    <div className="flex justify-center py-4" style={{ backgroundColor:'#EEEEEE' }}>
      <BarraCuenta />
      <main id="MainUsuariosRegistradosAdmin" className="flex flex-col max-w-6xl w-full">
        <section id="MURACabecera" className="p-3 bg-white rounded-lg mx-3">
          <h2 className="text-xl font-bold">Series</h2>
        </section>
        <section id="MURABuscador" className="p-4 flex items-center justify-between">
          <input
            type="text"
            placeholder="Buscar..."
            className="max-w-3xl w-full px-4 py-2 rounded-3xl border-slate-950 border-2 bg-white text-gray-800 focus:outline-none"
            value={busqueda}
            onChange={handleBusquedaChange}
          />
          <select
            value={opcionBusqueda}
            onChange={handleOpcionBusquedaChange}
            className="max-w-3xl w-full px-4 py-2 pl-10 rounded-3xl border-slate-950 border-1 bg-gray-100 text-gray-800 focus:outline-none"
          >
            <option value="id">ID</option>
            <option value="nombre">Nombre</option>
            <option value="desc">Descripción</option>
          </select>
        </section>
        <section id="MURAListado" className="p-3.5 text-sm">
          <article id="MURALCabecera" className="flex bg-green-200 p-2 items-center mb-2 px-4">
            <p className="flex-none w-12">ID</p>
            <p className="flex-auto w-60">Nombre</p>
            <p className="flex-auto w-60">Descripción</p>
            <p className="flex-auto w-96">Fecha de Creación</p>
            <p className="flex-none w-28">Nro.Productos</p>
            <p className="flex-none w-40">Acciones</p>
          </article>
          {usuariosEnPagina.map((usuario) => (
            /**/<article key={usuario.id} className="flex bg-white py-2 px-4 hover:bg-slate-100 items-center mb-1 rounded-md">
              <p className="flex-none w-12">{usuario.id}</p>
              <p className="flex-auto w-60">{usuario.nombre}</p>
              <p className="flex-auto w-60">{usuario.desc}</p>
              <p className="flex-auto w-96">{usuario.fecha}</p>
              <p className="flex-none w-28">{usuario.nprod}</p>
              <p className="flex-none w-40">{usuario.accion}</p>
            </article>
          ))}
        </section>
        {/* Barra de paginación */}
        <section id="MURABarraPaginacion">
          <BarraPaginacion
            paginaActual={paginaActual}
            totalPaginas={totalPaginas}
            onChangePagina={irAPagina}
          />
        </section>
      </main>
    </div>
    <Footer/>
    </>
  );
}

export default Series;
