import React from 'react';
import { Link } from "react-router-dom";
import ConversionFechaTexto from '../../../ConvetirOAdaptar/ConversionFechaTexto';
import BarraPedidoEstado from '../../../ConvetirOAdaptar/BarraPedidoEstado';
import View_SVG from '../../../../svg/View_SVG';

function OrdenesList({ ordenesEnPagina }) {
  return (
    <section className="p-3.5 text-sm">
      <article className="flex font-bold text-base bg-green-200 p-2 items-center mb-2 px-4">
        <p className="w-[12%]">ID</p>
        <p className="w-[18%]">Usuario</p>
        <p className="w-[14%]">Fecha Orden</p>
        <p className="w-[10%]">Total</p>
        <p className="w-3/12">Correo</p>
        <p className="w-2/12">Estado</p>
        <p className="w-1/12 flex justify-center">Acciones</p>
      </article>
      <div className='grid grid-cols-1 grid-rows-10'>
        {ordenesEnPagina.map(orden => (
          <article key={orden.id} className="flex bg-white py-2 px-4 hover:bg-slate-100 items-center mb-1 rounded-md">
            <p className="w-[12%]">{orden.id}</p>
            <p className="w-[18%]">{orden.nombre}</p>
            <p className="w-[14%]"><ConversionFechaTexto fechaOriginal={orden.fecha} /></p>
            <p className="w-[10%]">S/{orden.total}</p>
            <p className="w-3/12">{orden.correo}</p>
            <p className="w-2/12">{orden.estadoorden}
              <BarraPedidoEstado estado={orden.id_estado} />
            </p>
            <Link
              to={`/Admin/OrdenLog/Detail/${orden.id}`}
              className="w-1/12 flex justify-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <View_SVG width="24px" height="24px" fill="LightGreen" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OrdenesList;
