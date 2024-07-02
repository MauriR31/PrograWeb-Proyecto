import React from 'react';

function OrdenDetallesHeader({ orden }) {
  return (
    <section className="p-3 bg-lime-500 text-center rounded-lg mx-3 mb-4">
      <h1 className="text-2xl font-bold">Detalles de Orden Nro {orden.id}</h1>
    </section>
  );
}

export default OrdenDetallesHeader;
