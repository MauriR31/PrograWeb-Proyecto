import React from 'react';

function OrdenMetodoEnvio({ envio }) {
  return (
    <>
      <section className="p-3 bg-white rounded-lg mb-2 mx-3 grid place-content-around grid-cols-2">
        <article className="grid justify-center py-1">
            <p className="text-lg font-semibold">Método de Envío</p>
        </article>
        <article className="flex-1 py-1">
          <ul className="list-disc pl-5 grid justify-center">
            <li>{envio.nombre} - S/{envio.precio}</li>
          </ul>
        </article>
      </section>
    </>
  );
}

export default OrdenMetodoEnvio;
