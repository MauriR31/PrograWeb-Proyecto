import React from 'react';
import HCompleto from '../../../componentes/Header/HCompleto.jsx';
import Footer from '../../../componentes/Footer.jsx';
import SeccionBusqueda from './SeccionBusqueda.jsx';

function Busqueda() {
  return (
    <>
      <HCompleto />
      <section className="Ordenar mt-0 text-right flex justify-end items-center mr-6 mb-6" style={{marginTop:'30px'}}>
    <ol className="Orden inline mr-8 list-none">
        <li className="mr-2">Ordenar Por :</li>
    </ol>

    <select className="BotonOrden h-10 w-32 bg-gray-200 text-gray-700 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-gray-500">
        <option value="opcion1">Precio</option>
        <option value="opcion2">Marca</option>
        <option value="opcion3">Más relevantes</option>
    </select>
</section>
<section className="Resul pt-2 pb-2 mt-0 pl-4 pr-4 flex ml-6 bg-green-300" style={{ width: '1480px' }}>
    <ol className="ResulList inline mr-5 list-none">
        <li className="mr-2 text-lg font-bold text-black">Resultados de Búsqueda</li>
    </ol>


</section>


      <Footer />
    </>
  );
}

export default Busqueda;
