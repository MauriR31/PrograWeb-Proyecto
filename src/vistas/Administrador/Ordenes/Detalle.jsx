import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import PaginaError from "../../../componentes/PaginaError";
import HVacio from '../../../componentes/Header/HVacio';
import Footer from '../../../componentes/Footer';
import AODetalleAPI from "../../../api/Administrador/Ordenes/detalle.js";  // API

function Detalle() {
  const { id } = useParams();
  const [detalleOrden, setDetalleOrden] = useState(null);

  const handleOnLoad = async () => {
    const ordenesData = await AODetalleAPI.findOne(id);
    console.log(ordenesData)
    setDetalleOrden(ordenesData);
  };

  useEffect(() => {
    handleOnLoad();
  }, [id]);

  if (detalleOrden === null) {
    return <p>Cargando...</p>;
  }

  if (detalleOrden.message === "No encontrado.") {
    return <PaginaError />;
  }

  const handleEliminarOrden = () => {
    const ordenesData = JSON.parse(localStorage.getItem('ordenes'));

    if (ordenesData) {
      // Filtrar las órdenes para eliminar la orden actual
      const ordenesActualizadas = ordenesData.filter(orden => orden.numero !== id);

      // Actualizar el localStorage con las órdenes actualizadas
      localStorage.setItem('ordenes', JSON.stringify(ordenesActualizadas));

      // Actualizar el estado de las órdenes
      setDetalleOrdenes([]);
    }
  };

  return (
    <>
      <header>
        <HVacio />
      </header>
      <div className="flex justify-center py-4">
        <main className="flex flex-col max-w-6xl w-full">
          {/* Seccion de la parte superior */}
          <section className="p-3 bg-lime-500 text-center rounded-lg mx-3 mb-4">
            <h1 className="text-2xl font-bold">Detalles de Orden Nro {detalleOrden.numero}</h1>
          </section>

          {/* Seccion de la parte de los datos de compra */}
          <section className="p-3 bg-white rounded-lg mx-3 mb-1">
            <p className="text-lg font-semibold">Datos de compra</p>
          </section>

          {/* Seccion de la parte de direccion y metodo de pago */}
          <section className="p-3 flex flex-wrap gap-4 mb-3">
            <article className="flex-1 py-4 pl-7 border rounded-md bg-white">
              <p className="text-lg font-semibold">Dirección de Envío</p>
              <p className="pl-10">{direccionEnvio.avenida}, {direccionEnvio.numero}, {direccionEnvio.refer}</p>
              <p className="pl-10">{direccionEnvio.distrito}, {direccionEnvio.provincia}</p>
              <p className="pl-10">{direccionEnvio.departamento}</p>
              <p className="pl-10">{direccionEnvio.pais}</p>
            </article>
            <article className="flex-1 py-4 pl-7 border rounded-md bg-white">
              <p className="text-lg font-semibold">Pago</p>
              <ul className="list-disc pl-5">
                {pago.id === 1 || pago.id === 4 ? (
                  <li>{pago.name}</li>
                ) : (
                  <>
                    <li>{pago.name}</li>
                    <p>{pago.name} que termina en ****{pago.numero ? pago.numero.slice(-4) : ''}</p>
                  </>
                )}
              </ul>
            </article>
          </section>

          <section className="p-3 bg-white rounded-lg mx-3 mb-1">
            <p className="text-lg font-semibold">Método de Envío</p>
          </section>

          <section className="p-3 flex flex-wrap gap-4 mb-3">
            <article className="flex-1 py-4 pl-7 border rounded-md bg-white">
              <ul className="list-disc pl-5 grid justify-center">
                <li>{envio.name} - S/{envio.precio}</li>
              </ul>
            </article>
          </section>

          <section className="p-3 flex flex-wrap gap-4 mb-3">
            <article className="flex-1 p-4 pl-7 border rounded-md bg-white">
              <h2 className="text-lg font-semibold mb-4">Items en Pedido:</h2>
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="py-2">Producto</th>
                    <th className="py-2">Precio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {productos.map((producto, index) => (
                    <tr key={index}>
                      <td className="py-2">{producto.cantidad}x {producto.title}</td>
                      <td className="py-2">S/{producto.precioTotal.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="py-2 font-semibold">Total:</td>
                    <td className="py-2 font-semibold">S/{detalleOrden.subtotal.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
            </article>
            <article className="flex-1 p-4 border rounded-md bg-white">
              <p className="text-lg font-semibold">Resumen de Orden</p>
              <div className="flex justify-center">
                <table className="w-96 divide-y divide-gray-200">
                  <tr className="text-center">
                    <td className="py-2">Subtotal:</td>
                    <td className="py-2">S/{detalleOrden.subtotal.toFixed(2)}</td>
                  </tr>
                  <tr className="text-center">
                    <td className="py-2">Envío:</td>
                    <td className="py-2">S/{envio.precio}</td>
                  </tr>
                  <tr className="text-center">
                    <td className="py-2">Impuestos:</td>
                    <td className="py-2">S/{detalleOrden.impuesto.toFixed(2)}</td>
                  </tr>
                  <tr className="text-center">
                    <td className="py-2">Total:</td>
                    <td className="py-2">S/{detalleOrden.total.toFixed(2)}</td>
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
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Detalle