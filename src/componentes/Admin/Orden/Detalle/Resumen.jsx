import React from 'react';

function OrdenResumen({ orden, envio, handleEliminarOrden }) {
  return (
    <section className='grid place-items-center border rounded-md bg-white p-4'>
        <article className="flex-1">
        <p className="text-lg text-center font-semibold my-1">Resumen de Orden</p>
        <div className="flex justify-center">
            <table className="w-96 divide-y divide-gray-200">
            <tr className="text-center">
                <td className="py-2">Subtotal:</td>
                <td className="py-2">S/{orden.sub_total}</td>
            </tr>
            <tr className="text-center">
                <td className="py-2">Envío:</td>
                <td className="py-2">S/{envio.precio}</td>
            </tr>
            <tr className="text-center">
                <td className="py-2">Impuestos:</td>
                <td className="py-2">S/{orden.impuesto}</td>
            </tr>
            <tr className="text-center">
                <td className="py-2">Total:</td>
                <td className="py-2">S/{orden.total}</td>
            </tr>
            </table>
        </div>
        <div className='flex justify-center'>
            <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={handleEliminarOrden}
            >
            Cancelar Pedido
            </button>
        </div>
        </article>
    </section>
  );
}

export default OrdenResumen;
