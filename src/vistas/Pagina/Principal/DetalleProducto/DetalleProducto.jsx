import "./DetalleProducto.css";
import Encabezado from "../../../../componentes/Header/HeaderCompleto.jsx";
import Footer from "../../../../componentes/Footer/Footer.jsx";
import { useState } from "react";

const DetalleProducto = () => {
  const [cantidad, setCantidad] = useState(1);

  const incrementarCantidad = () => setCantidad(cantidad + 1);
  const decrementarCantidad = () =>
    setCantidad(cantidad > 1 ? cantidad - 1 : 1);

  return (
    <div className="ContenedorPrincipal">
      <Encabezado />
      <main className="ContenedorMain">
        <div className="ContenedorProducto">
          <div className="ContenedorTituloSubtitulo">
            <h2 className="TituloProducto">
              Título de Producto: Puede ser bastante largo
            </h2>
            <p className="SubtituloProducto">
              Por: HASBRO - Serie: Avengers Endgame
            </p>
          </div>
          <div className="ImagenProducto"></div>
          <div>
            <div className="InfoProducto">
              <div className="StatusProducto">
                <span className="Disponibilidad">DISPONIBLE</span>
                <span className="Precio">S/88.99</span>
              </div>
              <button className="BotonAñadirAlCarrito">
                AÑADIR AL CARRITO
              </button>
              <div className="ContenedorCantidad">
                <span className="LabelCantidad">Cantidad:</span>
                <div className="ControlesCantidad">
                  <button
                    onClick={decrementarCantidad}
                    className="BotonCantidad"
                  >
                    -
                  </button>
                  <span>{cantidad}</span>
                  <button
                    onClick={incrementarCantidad}
                    className="BotonCantidad"
                  >
                    +
                  </button>
                </div>
              </div>
              <a href="#" className="LinkEnvio">
                Ver métodos de envío disponibles
              </a>
            </div>
          </div>
        </div>
        <div className="SeccionDescripcion">
          <h3 className="TituloSeccion">Descripción</h3>
          <p className="DescripcionSeccion">
            From the Voltron franchise comes a new Mini Action Voltron Vehicle
            Force figure by Action Toys. This figure is highly articulated and
            able to produce various poses from the series, along with being able
            to separate various parts to form vehicles. This Voltron Vehicle
            Force toy figure is sure to be a great addition to any Voltron
            collection!
          </p>
        </div>
        <div className="SeccionCaracteristicas">
          <h3 className="TituloSeccion">Características del Producto:</h3>
          <ul className="ListaCaracteristicas">
            <li>Mide 18 centímetros</li>
            <li>Hecho de PVC</li>
            <li>De la Serie Voltron</li>
            <li>Articulado</li>
            <li>15 piezas distintas</li>
            <li>Combinable con otras figuras</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetalleProducto;
