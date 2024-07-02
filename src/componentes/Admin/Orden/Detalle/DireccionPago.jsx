import React from 'react';

function OrdenDireccionPago({ direccion, pago }) {
  return (
    <section className="p-3 flex flex-wrap gap-4 mb-2">
      <article className="flex-1 py-4 pl-7 border rounded-md bg-white">
        <p className="text-lg font-semibold">Dirección de Envío</p>
        <p className="pl-10">{direccion.avenida}, {direccion.numero}, {direccion.referencia}</p>
        <p className="pl-10">{direccion.distrito}, {direccion.provincia}</p>
        <p className="pl-10">{direccion.departamento}</p>
        <p className="pl-10">{direccion.pais}</p>
      </article>
      <article className="flex-1 py-4 pl-7 border rounded-md bg-white">
        <p className="text-lg font-semibold">Pago</p>
        <ul className="list-disc pl-5">
          {pago.id_pago === 1 || pago.id_pago === 4 ? (
            <li>{pago.nombre_pago}</li>
          ) : (
            <>
              <li>{pago.nombre_pago}</li>
              <p>{pago.nombre_pago} que termina en ****{pago.numero ? pago.numero.slice(-4) : ''}</p>
            </>
          )}
        </ul>
      </article>
    </section>
  );
}

export default OrdenDireccionPago;
