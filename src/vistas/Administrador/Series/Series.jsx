import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BarraPaginacion from '../../../componentes/BarraPaginacion';
import HVacio from '../../../componentes/Header/HVacio';
import Footer from '../../../componentes/Footer';
import BotonMenuPagina from "../../../componentes/ConvetirOAdaptar/BotonMenuPagina";

function Series() {
  const obtenerValorLocalStorage = (key, valorInicial) => {
    const valorGuardado = localStorage.getItem(key);
    return valorGuardado ? JSON.parse(valorGuardado) : valorInicial;
  };

  const [busqueda, setBusqueda] = useState(() => obtenerValorLocalStorage('busquedaSeries', ''));
  const [opcionBusqueda, setOpcionBusqueda] = useState(() => obtenerValorLocalStorage('opcionBusquedaSeries', 'nombre'));

  useEffect(() => {
    localStorage.setItem('busquedaSeries', JSON.stringify(busqueda));
  }, [busqueda]);

  useEffect(() => {
    localStorage.setItem('opcionBusquedaSeries', JSON.stringify(opcionBusqueda));
  }, [opcionBusqueda]);


  const series = [
    { id: 1, nombre: 'Gadgets Inteligentes', desc: 'Colección de gadgets inteligentes como relojes y pulseras', fecha: '15/02/2023', nprod: 7, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 2, nombre: 'Audio de Alta Fidelidad', desc: 'Colección de equipos de audio de alta fidelidad', fecha: '28/02/2023', nprod: 12, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 3, nombre: 'Electrodomésticos Modernos', desc: 'Colección de electrodomésticos modernos para el hogar', fecha: '10/03/2023', nprod: 9, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 4, nombre: 'Computadoras y Laptops', desc: 'Colección de computadoras y laptops de última generación', fecha: '22/03/2023', nprod: 11, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 5, nombre: 'Smartphones y Tablets', desc: 'Colección de smartphones y tablets de diversas marcas', fecha: '05/04/2023', nprod: 8, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 6, nombre: 'Cámaras y Fotografía', desc: 'Colección de cámaras fotográficas y accesorios', fecha: '18/04/2023', nprod: 6, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 7, nombre: 'Videojuegos y Consolas', desc: 'Colección de videojuegos y consolas de todas las generaciones', fecha: '30/04/2023', nprod: 5, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 8, nombre: 'Equipos de Red y Conectividad', desc: 'Colección de routers, switches y otros equipos de red', fecha: '12/05/2023', nprod: 10, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 9, nombre: 'TVs y Entretenimiento', desc: 'Colección de televisores y sistemas de entretenimiento en casa', fecha: '25/05/2023', nprod: 7, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 10, nombre: 'Accesorios Electrónicos', desc: 'Colección de accesorios para diversos dispositivos electrónicos', fecha: '01/06/2023', nprod: 6, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 11, nombre: 'Impresoras y Escáneres', desc: 'Colección de impresoras y escáneres multifuncionales', fecha: '10/06/2023', nprod: 8, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 12, nombre: 'Dispositivos de Realidad Virtual', desc: 'Colección de dispositivos y accesorios de realidad virtual', fecha: '20/06/2023', nprod: 9, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 13, nombre: 'Componentes de PC', desc: 'Colección de componentes para ensamblar y mejorar PCs', fecha: '01/07/2023', nprod: 10, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 14, nombre: 'Drones y Robots', desc: 'Colección de drones, robots y accesorios relacionados', fecha: '12/07/2023', nprod: 7, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 15, nombre: 'Equipos de Audio Profesional', desc: 'Colección de equipos de audio profesional para estudios', fecha: '22/07/2023', nprod: 11, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 16, nombre: 'Electrónica de Automóviles', desc: 'Colección de dispositivos electrónicos para automóviles', fecha: '02/08/2023', nprod: 8, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 17, nombre: 'Electrónica para el Hogar', desc: 'Colección de dispositivos electrónicos para el hogar inteligente', fecha: '12/08/2023', nprod: 10, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 18, nombre: 'Wearables', desc: 'Colección de dispositivos wearables como relojes inteligentes', fecha: '22/08/2023', nprod: 6, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 19, nombre: 'Equipos de Iluminación', desc: 'Colección de equipos de iluminación LED y sistemas inteligentes', fecha: '02/09/2023', nprod: 5, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 20, nombre: 'Electrónica de Cocina', desc: 'Colección de electrodomésticos y gadgets para la cocina', fecha: '12/09/2023', nprod: 7, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 21, nombre: 'Monitores y Pantallas', desc: 'Colección de monitores y pantallas de alta resolución', fecha: '22/09/2023', nprod: 9, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 22, nombre: 'Equipos de Seguridad', desc: 'Colección de cámaras de seguridad y sistemas de monitoreo', fecha: '02/10/2023', nprod: 8, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 23, nombre: 'Proyectores y Accesorios', desc: 'Colección de proyectores y accesorios relacionados', fecha: '12/10/2023', nprod: 6, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 24, nombre: 'Sistemas de Energía', desc: 'Colección de sistemas de energía como baterías y paneles solares', fecha: '22/10/2023', nprod: 10, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 25, nombre: 'Electrónica de Oficina', desc: 'Colección de dispositivos electrónicos para oficina', fecha: '01/11/2023', nprod: 11, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 26, nombre: 'Automatización del Hogar', desc: 'Colección de dispositivos para la automatización del hogar', fecha: '12/11/2023', nprod: 5, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 27, nombre: 'Juguetes Electrónicos', desc: 'Colección de juguetes electrónicos y educativos', fecha: '22/11/2023', nprod: 7, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 28, nombre: 'Accesorios para Móviles', desc: 'Colección de accesorios para teléfonos móviles', fecha: '02/12/2023', nprod: 8, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 29, nombre: 'Tecnología Verde', desc: 'Colección de dispositivos tecnológicos amigables con el medio ambiente', fecha: '12/12/2023', nprod: 9, accion: <Link to="/series/AgregarSeries">Ver</Link> },
    { id: 30, nombre: 'Electrónica Personal', desc: 'Colección de dispositivos electrónicos para uso personal', fecha: '22/12/2023', nprod: 10, accion: <Link to="/series/AgregarSeries">Ver</Link> },{ id: 50, nombre: 'Historias de los Tiempos Inmortales', desc: 'Colección de historias publicada por Editorial Estrella', fecha: '12/07/2024', nprod: 10, accion: <Link to="/series/AgregarSeries">Ver</Link> }
  ];
  

  const [paginaActual, setPaginaActual] = useState(1);
  const seriesPorPagina = 10;
  const indiceInicio = (paginaActual - 1) * seriesPorPagina;
  const indiceFin = paginaActual * seriesPorPagina;

  const filteredUsers = series.filter(usuario => {
    if (opcionBusqueda === 'id') {
      return usuario.id.toString().includes(busqueda.toLowerCase());
    } else {
      const propiedad = usuario[opcionBusqueda];
      return propiedad ? propiedad.toLowerCase().includes(busqueda.toLowerCase()) : false;
    }
  });

  const seriesEnPagina = filteredUsers.slice(indiceInicio, indiceFin);
  const totalPaginas = Math.ceil(filteredUsers.length / seriesPorPagina);

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
        <BotonMenuPagina />
        <main id="MainseriesRegistradosAdmin" className="flex flex-col max-w-6xl w-full">
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
            {seriesEnPagina.map((usuario) => (
              <article key={usuario.id} className="flex bg-white py-2 px-4 hover:bg-slate-100 items-center mb-1 rounded-md">
                <p className="flex-none w-12">{usuario.id}</p>
                <p className="flex-auto w-60">{usuario.nombre}</p>
                <p className="flex-auto w-60">{usuario.desc}</p>
                <p className="flex-auto w-96">{usuario.fecha}</p>
                <p className="flex-none w-28">{usuario.nprod}</p>
                <p className="flex-none w-40">{usuario.accion}</p>
              </article>
            ))}
          </section>
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
