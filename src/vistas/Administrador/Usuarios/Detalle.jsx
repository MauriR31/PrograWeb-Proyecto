import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PaginaError from "../../../componentes/PaginaError";
import HVacio from "../../../componentes/Header/HVacio";
import Footer from "../../../componentes/Footer";
import AUDetalleAPI from "../../../api/Administrador/Usuarios/detalle.js";  // API
import DetallesUsuario from '../../../componentes/Admin/Usuario/Detalles/DetallesUsuario.jsx';
import ListaOrdenes from '../../../componentes/Admin/Usuario/Detalles/ListaOrdenes.jsx';

function Detalle() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null); // Estado inicial como null
  const [ordenes, setOrdenes] = useState([]);
  const [message, setMessage] = useState(null);

  const handleOnLoad = async () => {
    const usuarioData = await AUDetalleAPI.findOne(id);
    setOrdenes(usuarioData.ordenes);
    setUsuario(usuarioData.cliente);
    setMessage(usuarioData.message);
  };

  useEffect(() => {
    handleOnLoad();
  }, [id]);

  if (usuario === null) {
    return <p>Cargando...</p>;
  }

  if (message === "Error al obtener las ordenes del cliente") {
    return <PaginaError />;
  }

  return (
    <>
      <HVacio />
      <div className="flex justify-center py-4">
        <main className="flex flex-col max-w-6xl w-full">
          {/* Primera seccion */}
          <section className="p-3 bg-white rounded-lg mx-3 mb-2">
            <p className="text-xl font-bold">Detalle de Usuario Registrado</p>
          </section>

          {/* Componente de detalles de usuario */}
          <DetallesUsuario usuario={usuario} />

          {/* Sección de órdenes */}
          <ListaOrdenes ordenes={ordenes} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Detalle;
