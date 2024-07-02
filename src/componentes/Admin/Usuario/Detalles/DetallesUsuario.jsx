import React from 'react';
import BotonMenuPagina from '../../../ConvetirOAdaptar/BotonMenuPagina';
import ConversionFechaTexto from '../../../ConvetirOAdaptar/ConversionFechaTexto';

function DetallesUsuario({ usuario }) {
  return (
    <section className="p-3.5 flex place-items-center justify-evenly bg-lime-200 mx-3 mb-2 rounded-lg">
      <button className='block'>
        <BotonMenuPagina />
      </button>
      <ul className="flex justify-around bg-green-800 p-2 text-white items-center font-bold max-w-4xl w-full px-4 py-2 rounded-xl">
        <p>ID: {usuario.id}</p>
        <p>Nombre: {usuario.nombre}</p>
        <p>Correo: {usuario.correo}</p>
        <p>Fecha Registro: <ConversionFechaTexto
          fechaOriginal={usuario.fecha_registro}
        /></p>
      </ul>
    </section>
  );
}

export default DetallesUsuario;
