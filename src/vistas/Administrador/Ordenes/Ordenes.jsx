import React, { useState, useEffect } from 'react';
import HVacio from '../../../componentes/Header/HVacio';
import Footer from '../../../componentes/Footer';
import AOOrdenesAPI from "../../../api/Administrador/Ordenes/ordenes.js";  // API
import OrdenesHeader from '../../../componentes/Admin/Orden/Orden/OrdenesHeader.jsx';
import OrdenesSearch from '../../../componentes/Admin/Orden/Orden/OrdenesSearch.jsx';
import OrdenesList from '../../../componentes/Admin/Orden/Orden/OrdenesList.jsx';
import OrdenesPagination from '../../../componentes/Admin/Orden/Orden/OrdenesPagination.jsx';

/** @type {import('tailwindcss').Config} */

function Ordenes() {
  const ordenesPorPagina = 10;
  const [ordenes, setOrdenes] = useState([]);
  const [buscarOrden, setBuscarOrden] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);

  const handleOnLoad = async () => {
    const ordenesData = await AOOrdenesAPI.findAll();
    setOrdenes(ordenesData);
  };

  useEffect(() => {
    handleOnLoad();
  }, []);

  const handleSearchChange = (e) => {
    setBuscarOrden(e.target.value);
    setPaginaActual(1); // Cuando se realiza una nueva búsqueda, volvemos a la primera página
  };

  const filtrarOrdenes = ordenes.filter((orden) => {
    const idMatch = orden.id.toString().includes(buscarOrden);
    const nameMatch = orden.nombre.toLowerCase().includes(buscarOrden.toLowerCase());
    return idMatch || nameMatch;
  });

  const indiceInicio = (paginaActual - 1) * ordenesPorPagina;
  const indiceFin = paginaActual * ordenesPorPagina;
  const ordenesEnPagina = filtrarOrdenes.slice(indiceInicio, indiceFin);
  const totalPaginas = Math.ceil(filtrarOrdenes.length / ordenesPorPagina);

  const irAPagina = (pagina) => {
    setPaginaActual(pagina);
  };

  return (
    <>
      <HVacio />
      <div className="flex justify-center py-4">
        <main className="flex flex-col max-w-6xl w-full">
          <OrdenesHeader />
          <OrdenesSearch buscarOrden={buscarOrden} handleSearchChange={handleSearchChange} />
          <OrdenesList ordenesEnPagina={ordenesEnPagina} />
          <OrdenesPagination paginaActual={paginaActual} totalPaginas={totalPaginas} irAPagina={irAPagina} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Ordenes;
