import Encabezado from "../../../componentes/Header/HCerrarSesion";
import Footer from "../../../componentes/Footer";
import BotonMenuPagina from "../../../componentes/ConvetirOAdaptar/BotonMenuPagina";
import Formulario from "../../../componentes/Administrador/FormularioAgregar";

const Agregar = () => {
  return (
    <div>
      <Encabezado />
      <main className="flex bg-gray-100">
        <BotonMenuPagina />
        <div className="flex-1 flex flex-col ml-4 mt-4 mr-4">
          <header className="bg-white flex justify-between items-center pl-8 pt-4 pb-4 mb-4 rounded-lg shadow-sm">
            <h1 className="font-extrabold">Agregar Producto</h1>
          </header>
          <main className="flex-1 bg-white p-6 mb-4 rounded-lg shadow-sm">
            <Formulario/>
          </main>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agregar;
