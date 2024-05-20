import "./AgregarProducto.css";
import Encabezado from "../../../../componentes/Header/HeaderParcial.jsx";
import Footer from "../../../../componentes/Footer/Footer.jsx";

const Agregar = () => {
  return (
    <div className="min-h-screen">
      <Encabezado />
      <main className="EstiloMain flex">
        <div className="BarraAdministrador">
          <ol>
            <li className="Supertexto">Admin</li>
            <li className="MoverDerecha">Dashboard</li>
            <li className="MoverDerecha">Usuarios Registrados</li>
            <li className="MoverDerecha">Productos</li>
            <li className="MoverDerecha">Órdenes</li>
            <li className="MoverDerecha">Productos más vendidos</li>
            <li className="MoverDerecha">Series</li>
          </ol>
        </div>
        <div className="PanelAgregarProducto">
          <header className="BarraCabecera">
            <h1>Agregar Producto</h1>
          </header>
          <main className="Centro">
            <div className="Contenedor">
              <div className="EstiloGrid md:grid-cols-2">
                <div>
                  <div className="ImagenPlaceholder">
                    <span className="ImagenPlaceholderSpan">Agregar Imagen</span>
                  </div>
                  <button className="AñadirImagen">Agregar Imagen</button>
                </div>
                <div>
                  <div className="GrupoInput">
                    <labe>Nombre</labe>
                    <input type="text" className="input" />
                  </div>
                  <div className="GrupoInput">
                    <label>Descripción</label>
                    <textarea className="AreaTexto"/>
                  </div>
                  <div className="GrupoInput">
                    <label>Características</label>
                    <textarea className="AreaTexto"/>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="GrupoInput">
                      <label>Marca</label>
                      <input type="text" className="input"/>
                    </div>
                    <div className="GrupoInput">
                      <label>Serie</label>
                      <input type="text" className="input"/>
                    </div>
                    <div className="GrupoInput">
                      <label>Precio</label>
                      <input type="text" className="input"/>
                    </div>
                    <div className="GrupoInput">
                      <label>Tipo</label>
                      <input type="text" className="input"/>
                    </div>
                    <div className="GrupoInput">
                      <label>Stock</label>
                      <input type="text" className="input"/>
                    </div>
                  </div>
                  <button className="BotonGuardar">Guardar</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agregar;
