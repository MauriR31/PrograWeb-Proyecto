import React from 'react';

const Checkout = () => {
  return (
    <>
      <header>
        {/* Insertar el header apropiado */}
      </header>
      <main className="p-4 bg-gray-50">
        {/* Seccion de la parte superior */}
        <section className="mb-4">
          <h1 className="text-2xl font-bold">¡Casi Listo! Tu orden no estará completa hasta que revises y presiones el botón "completar orden" al final de la página.</h1>
        </section>
         
        {/* Seccion de la parte de los datos de compra */}
        <section className="bg-gray-200 p-2 mb-4 rounded-md pl-8 border-gray-500">
          <p className="text-lg font-semibold">Datos de compra</p>
        </section>

        {/* Seccion de la parte de direccion y metodo de pago */}
        <section className="mb-6 flex flex-wrap gap-4">
          <article className="flex-1 py-4 pl-7 border rounded-md bg-white">
            <p className="text-lg font-semibold">Dirección de Envío</p>
            <div className='flex flex-col mr-20'>
              <input type="text" placeholder='Linea 1' className="border-2 border-black rounded mb-3"/> 
              <input type="text" placeholder='Linea 2' className="border-2 border-black rounded mb-3"/> 
              <input type="text" placeholder='Distrito' className="border-2 border-black rounded mb-3"/> 
              <input type="text" placeholder='Ciudad' className="border-2 border-black rounded mb-3"/> 
              <input type="text" placeholder='País' className="border-2 border-black rounded mb-3"/>
            </div>
          </article>
          <article className="flex-1 py-4 pl-7 border rounded-md bg-white">
            <p className="text-lg font-semibold">Pago</p>
            <ul className="list-disc pl-5">
              <li>Pago con código QR</li>
              <li>Pago con tarjeta de crédito</li>
            </ul>
            <div className='flex flex-col mr-20'>
              <input type="text" placeholder='Número de Tarjeta' className="border-2 border-black rounded mb-3 w-full"/>
              <input type="text" placeholder='Titular de Tarjeta' className="border-2 border-black rounded mb-3 w-full"/>
            </div>
            <div className='flex flex-row gap-3'>
              <input type="text" placeholder='Vencimiento' className="border-2 border-black rounded mb-3 flex-1"/>
              <input type="text" placeholder='CCV' className="border-2 border-black rounded mb-3 flex-1 mr-2"/>
            </div>
          </article>
        </section>
        
        <section className="bg-gray-200 p-2 mb-4 rounded-md pl-8 border-gray-500">
          <p className="text-lg font-semibold">Método de Envío</p>
        </section>
        
        <section className="mb-6">
          <article className="flex-1 py-4 pl-7 border rounded-md bg-white">
            <ul className="list-disc pl-5 grid justify-center">
              <li>Económico Aéreo - S/10.00</li>
              <li>Envío prioritario (5 a 10 días) - S/17.00</li>
            </ul>
          </article>
        </section>
        
        <section className="flex flex-wrap gap-4">
          <article className="flex-1 py-4 pl-7 border rounded-md">
            <p className="text-lg font-semibold">Items en Pedido:</p>
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-2">(cantidad)x (Nombre de producto)</td>
                  <td className="py-2">(precio)</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article className="flex-1 p-4 border rounded-md">
            <p className="text-lg font-semibold">Resumen de Orden</p>
            <div className="flex justify-center">
              <table className="w-96 divide-y divide-gray-200">
                <tr className="text-center">
                  <td className="py-2">Subtotal:</td>
                  <td className="py-2">(valor de producto)</td>
                </tr>
                <tr className="text-center">
                  <td className="py-2">Envío:</td>
                  <td className="py-2">(Precio envío)</td>
                </tr>
                <tr className="text-center">
                  <td className="py-2">Impuestos:</td>
                  <td className="py-2">(del 18%)</td>
                </tr>
                <tr className="text-center">
                  <td className="py-2">Total:</td>
                  <td className="py-2">(Precio venta)</td>
                </tr>
              </table>
            </div>
            <div className='flex justify-center'>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">Completar Orden</button>
            </div>
          </article>
        </section>
      </main>
      <footer>
        {/* Insertar el footer apropiado */}
      </footer>
    </>
  );
};

export default Checkout;
