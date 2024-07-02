import React from 'react';

function OrdenItemsPedido({ detalle, orden }) {
  return (
    <section className="flex flex-wrap gap-4">
      <article className="flex-1 p-4 pl-7 border rounded-md bg-white">
        <h2 className="text-lg text-center font-semibold mb-4">Items en Pedido</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="py-2">Producto</th>
              <th className="py-2">Precio</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {detalle.map((producto) => (
              <tr key={producto.id}>
                <td className="py-2">{producto.cantidad}x {producto.nombre}</td>
                <td className="py-2">S/{producto.precio_total}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-2 font-semibold">Total:</td>
              <td className="py-2 font-semibold">S/{orden.sub_total}</td>
            </tr>
          </tfoot>
        </table>
      </article>
    </section>
  );
}

export default OrdenItemsPedido;
