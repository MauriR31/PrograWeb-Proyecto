import React from 'react';
import { Link } from 'react-router-dom';
import ConversionFechaTexto from '../../../ConvetirOAdaptar/ConversionFechaTexto.jsx';
import OrdenComponent from './ProductoComponent.jsx';
import BarraPedidoEstado from '../../../ConvetirOAdaptar/BarraPedidoEstado.jsx';
import View_SVG from '../../../../svg/View_SVG.jsx';

function ListaOrdenes({ ordenes }) {
  return (
    <section className="px-3 text-sm">
      {/* Cabecera de la lista de usuarios registrados */}
      <article className="flex font-bold text-base bg-green-200 p-2 items-center mb-2 px-4">
        <p className="w-[13%]">ID</p>
        <p className="w-[16%]">Fecha Orden</p>
        <p className="w-[12%]">Total</p>
        <p className="w-5/12">Productos</p>
        <p className="w-[19%]">Estado</p>
        <p className="w-1/12">Acciones</p>
      </article>
      {/* Cuerpo de la lista de usuarios registrados */}
      <div className='grid grid-cols-1 grid-rows-10'>
        {ordenes.map((orden) => (
          <article key={orden.id} className="flex bg-white py-2 px-4 hover:bg-slate-100 items-center mb-1 rounded-md">
            <p className="w-[13%]">{orden.id}</p>
            <p className="w-[16%]"><ConversionFechaTexto
              fechaOriginal={orden.fecha}
            /></p>
            <p className="w-[12%]">S/{orden.total}</p>
            <p className="w-5/12"><OrdenComponent orden={orden} />
            </p>
            <p className="w-[19%] px-1">{orden.estadoorden.nombre}
              <BarraPedidoEstado estado={orden.id_estado} />
            </p>
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
  );
}

export default ListaOrdenes;
