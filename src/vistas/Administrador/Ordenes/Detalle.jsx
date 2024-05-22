import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import PaginaError from "../../../componentes/PaginaError";

function Detalle() {
  const { id } = useParams();
  const [detalleOrden, setDetalleOrdenes] = useState([]);

  const ordenes = [
    { id: 1, direccion: { avenida: "Santa Ana", numero: "456", refer: "asd asd", distrito: "Lince", provincia: "Lima Metropolitana", departamento: "Lima", pais: "Perú" },
       usuario: {id:"104", nombre:"104", tarjeta:123456789}, 
       detalle: [
        {id:0, cantidad:2, nombre:"libro", precio:45.00, total:90.00}, 
        {id:1, cantidad:3, nombre:"cuaderno", precio:34.00, total:102.00}],
       pago: {id:0, nombre:"Pago QR"}, envio: {id:1, nombre:"aero", precio:10.00}, subtotal:192.00, impuesto:0.18, total:226.56
    },
    { id: 2, user: 104, fechaOrden: '2024-05-22', total: 'S/63.26', productos: 2, estado: 'Entregado' },
    { id: 3, user: 103, fechaOrden: '2024-05-09', total: 'S/61.34', productos: 3, estado: 'Pendiente' },
  ]

  useEffect(() => {
    const ordenesData = JSON.parse(localStorage.getItem('ordenes'));
  
    if (ordenesData) {
      const detalle = ordenesData.find(orden => String(orden.numero) === String(id));
      if (detalle) {
        setDetalleOrdenes(detalle);
        console.log(detalle);
      }
    }
  }, [id]);
  


  // Condicionalidad para la existencia del detalle de la orden
  if (detalleOrden.length === 0) {
    return <PaginaError />;
  }

  // useEffect(() => {
  //   const usuariosData = JSON.parse(localStorage.getItem('usuarios'));
  //   const ordenesData = JSON.parse(localStorage.getItem('ordenes'));
  
  //   if (usuariosData && ordenesData) {
  //     // Crear una nueva lista combinando información de personas y usuarios
  //     const nuevaLista = ordenesData.map(usuario => {
  //       // Buscar la persona correspondiente al usuario
  //       const usuario = personasData.find(persona => String(persona.id) === String(usuario.persona_id));
  
  //       // Combinar información de persona y usuario
  //       return {
  //         id: usuario.id,
  //         nombre: persona.nombre,
  //         apellido: persona.apellido,
  //         correo: usuario.correo,
  //         fechaRegistro: usuario.fechaRegistro,
  //         estado: usuario.estado
  //       };
  //     }
  //   ).filter(usuario => usuario !== null); // Filtrar los usuarios nulos
  //     console.log(nuevaLista)
  //     setDetalleOrdenes(nuevaLista);
  //   }
  // }, id);


  return (
    <>
      <header>
        {/* Insertar el header apropiado */}
      </header>
      <main className="p-4 bg-gray-50">
        {/* Seccion de la parte superior */}
        <section className="mb-4">
          <h1 className="text-2xl font-bold">Detalles de Orden Nro {detalleOrden.numero}</h1>
        </section>

        {/* Seccion de la parte de los datos de compra */}
        <section className="bg-gray-200 p-2 mb-4 rounded-md pl-8 border-gray-500">
          <p className="text-lg font-semibold">Datos de compra</p>
        </section>

        {/* Seccion de la parte de direccion y metodo de pago */}
        <section className="mb-6 flex flex-wrap gap-4">
          <article className="flex-1 py-4 pl-7 border rounded-md bg-white">
            <p className="text-lg font-semibold">Dirección de Envío</p>
            <p className="pl-10">{ordenes[0].direccion.avenida}, {ordenes[0].direccion.numero}, {ordenes[0].direccion.refer}</p>
            <p className="pl-10">{ordenes[0].direccion.distrito}, {ordenes[0].direccion.provincia}</p>
            <p className="pl-10">{ordenes[0].direccion.departamento}</p>
            <p className="pl-10">{ordenes[0].direccion.pais}</p>
          </article>
          <article className="flex-1 py-4 pl-7 border rounded-md bg-white">
            <p className="text-lg font-semibold">Pago</p>
            {ordenes[0].pago.id === 0 ? (
              <ul className="list-disc pl-5">
                <li>{ordenes[0].pago.nombre}</li>
              </ul>
            ) : (
              <ul className="list-disc pl-5">
                <li>{ordenes[0].pago.nombre}</li>
                <p>Tarjeta de Crédito que termina en ****8859</p>
              </ul>
            )}
          </article>
        </section>

        <section className="bg-gray-200 p-2 mb-4 rounded-md pl-8 border-gray-500">
          <p className="text-lg font-semibold">Método de Envío</p>
        </section>

        <section className="mb-6">
          <article className="flex-1 py-4 pl-7 border rounded-md bg-white">
            {ordenes[0].envio.id === 0 ? (
              <ul className="list-disc pl-5 grid justify-center">
                <li>Económico Aéreo - S/10.00</li>
              </ul>
            ) : (
              <ul className="list-disc pl-5 grid justify-center">
                <li>Envío prioritario (5 a 10 días) - S/17.00</li>
              </ul>
            )}
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
                  <td className="py-2">{detalleOrden.subtotal}</td>
                </tr>
                <tr className="text-center">
                  <td className="py-2">Envío:</td>
                  <td className="py-2">{ordenes[0].envio.precio}</td>
                </tr>
                <tr className="text-center">
                  <td className="py-2">Impuestos:</td>
                  <td className="py-2">{detalleOrden.impuesto}</td>
                </tr>
                <tr className="text-center">
                  <td className="py-2">Total:</td>
                  <td className="py-2">{detalleOrden.total}</td>
                </tr>
              </table>
            </div>
            <div className='flex justify-center'>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">Cancelar Pedido</button>
            </div>
          </article>
        </section>
      </main>
      <footer>
        {/* Insertar el header apropiado */}
      </footer>
    </>
  )
}

export default Detalle