import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import PaginaError from "../../../componentes/PaginaError";
import HVacio from '../../../componentes/Header/HVacio';
import Footer from '../../../componentes/Footer';
import AODetalleAPI from "../../../api/Administrador/Ordenes/detalle.js";  // API
import OrdenDetallesHeader from '../../../componentes/Admin/Orden/Detalle/DetallesHeader.jsx';
import OrdenDatosCompra from '../../../componentes/Admin/Orden/Detalle/DatosCompra.jsx';
import OrdenDireccionPago from '../../../componentes/Admin/Orden/Detalle/DireccionPago.jsx';
import OrdenMetodoEnvio from '../../../componentes/Admin/Orden/Detalle/MetodoEnvio.jsx';
import OrdenItemsPedido from '../../../componentes/Admin/Orden/Detalle/ItemsPedido.jsx';
import OrdenResumen from '../../../componentes/Admin/Orden/Detalle/Resumen.jsx';

function Detalle() {
  const { id } = useParams();
  const [orden, setOrden] = useState(null);
  const [detalle, setDetalle] = useState([]);
  const [direccion, setDireccion] = useState('');
  const [envio, setEnvio] = useState('');
  const [estado, setEstado] = useState('');
  const [pago, setPago] = useState('');
  const [message, setMessage] = useState('');

  const handleOnLoad = async () => {
    const ordenesData = await AODetalleAPI.findOne(id);
    setOrden(ordenesData.orden);
    setDireccion(ordenesData.direccion);
    setEstado(ordenesData.estado);
    setEnvio(ordenesData.envio);
    setPago(ordenesData.pago);
    setDetalle(ordenesData.detalle);
    setMessage(ordenesData.message);
  };

  useEffect(() => {
    handleOnLoad();
  }, [id]);

  if (orden === null) {
    return <p>Cargando...</p>;
  }

  if (message === `No se encontró una orden con el id ${id}`) {
    return <PaginaError />;
  }

  const handleEliminarOrden = async () => {
    await AODetalleAPI.remove(orden.id);
    handleOnLoad();
  };

  return (
    <>
      <header>
        <HVacio />
      </header>
      <div className="flex justify-center py-4">
        <main className="flex flex-col max-w-6xl w-full">
          <OrdenDetallesHeader orden={orden} />
          <OrdenDatosCompra />
          <OrdenDireccionPago direccion={direccion} pago={pago} />
          <OrdenMetodoEnvio envio={envio} />
          <section className="p-3 grid grid-cols-2 gap-4 mb-3">
            <OrdenItemsPedido detalle={detalle} orden={orden} />
            <OrdenResumen orden={orden} envio={envio} handleEliminarOrden={handleEliminarOrden} />
          </section>
          
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Detalle;
