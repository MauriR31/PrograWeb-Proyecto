import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import Footer from '../../../componentes/Footer.jsx';
import HVacio from '../../../componentes/Header/HVacio.jsx';


const Checkout = () => {
  const [metodoPago, setMetodoPago] = useState(null);
  const [metodoEnvio, setMetodoEnvio] = useState(null);
  const [precioEnvio, setPrecioEnvio] = useState(0);

  const handleRadioChange = (e) => {
    setMetodoPago(e.target.value);
  };

  const handleEnvioChange = (e) => {
    const metodo = e.target.value;
    setMetodoEnvio(metodo);
    if(metodo == 'economico') {
      setPrecioEnvio(10);
    }
    else if (metodo === 'prioritario') {
      setPrecioEnvio(17);
    }
  };

  return (
    <>
      <header>
      <HVacio />
      </header>
      <main className="p-4 bg-gray-50">
        {/* Seccion de la parte superior */}
        <section className="mb-4">
          <h1 className="text-2xl font-bold">¡Casi Listo! Tu orden no estará completa hasta que revises y presiones el botón "completar orden" al final de la página.</h1>
        </section>
         
        {/* Seccion de la parte de los datos de compra */}
        <section className="bg-gray-800 p-2 mb-4 rounded-md pl-8 border-gray-500 text-white">
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
            <div className="list-disc pl-5">
              <input className="" id="radio1" type="radio" name="metodoPago" value="qr" checked={metodoPago === 'qr'} onChange={handleRadioChange} />
              <label className="hover:cursor-pointer" htmlFor="radio1">Pago con código QR</label>
            </div>
            <div className="list-disc pl-5">
              <input className="" id="radio2" type="radio" name='metodoPago' value="tarjeta" checked={metodoPago === "tarjeta"} onChange={handleRadioChange} />
              <label className="hover:cursor-pointer" htmlFor="radio2">Pago con tarjeta de crédito</label> 
            </div>
            {metodoPago === "qr" && (
              <div className='mt-4'>
                <img src="\src\assets\qr.png" alt="codQR" className='w-20 h-20 mx-auto' />
              </div>
            )}
            {metodoPago === 'tarjeta' &&(
            <div className='flex flex-col mr-20' mt-4>
              <input type="text" placeholder='Número de Tarjeta' className="border-2 border-black rounded mb-3 w-full"/>
              <input type="text" placeholder='Titular de Tarjeta' className="border-2 border-black rounded mb-3 w-full"/>
              <div className='flex flex-row gap-3'>
                <input type="text" placeholder='Vencimiento' className="border-2 border-black rounded mb-3 flex-1"/>
                <input type="text" placeholder='CCV' className="border-2 border-black rounded mb-3 flex-1 mr-2"/>
              </div>
            </div>
            )}
            
          </article>
        </section>
        
        <section className="bg-gray-800 p-2 mb-4 rounded-md pl-8 border-gray-500 text-white">
          <p className="text-lg font-semibold">Método de Envío</p>
        </section>
        
        <section className="mb-6">
          <article className="flex-1 py-4 pl-7 border rounded-md bg-white">
            <div className="list-disc pl-5">
              <input className="" id="envioEconomico" type="radio" name="metodoEnvio" value="economico" checked={metodoEnvio === 'economico'} onChange={handleEnvioChange} />
              <label className="hover:cursor-pointer" htmlFor="envioEconomico">Económico Aéreo - S/10.00</label>
            </div>
            <div className="list-disc pl-5">
              <input className="" id="envioPrioritario" type="radio" name='metodoEnvio' value="prioritario" checked={metodoEnvio === "prioritario"} onChange={handleEnvioChange} />
              <label className="hover:cursor-pointer" htmlFor="envioPrioritario">Envío prioritario (5 a 10 días) - S/17.00</label>
            </div>
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
                  <td className="py-2">{`S/${precioEnvio.toFixed(2)}`}</td>
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
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
                <Link to="/carrito/PedidoCompleto">Completar Orden</Link>
                </button>
            </div>
          </article>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Checkout;
