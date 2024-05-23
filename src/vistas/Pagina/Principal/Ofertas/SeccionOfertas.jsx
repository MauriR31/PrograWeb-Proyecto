import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa Link y useNavigate desde react-router-dom
import { images } from '../BD_Productos';

const SeccionCategoria = () => {
  const navigate = useNavigate(); // Obtiene la función navigate

  const handleProductSelection = (productId) => {
    console.log('ID del producto:', productId);
    const foundProduct = images.flat().find(image => image.idProducto === productId);
    console.log('Producto encontrado:', foundProduct);
    // Establecer el producto seleccionado en el estado, si es necesario
    // setSelectedProduct(foundProduct);
    // Enviar el ID del producto como parte del estado al navegar a la página de detalles
    navigate('/DetalleProducto', { state: { productId: productId } });
  };

  // Filtrar las imágenes según la categoría "Ofertas"
  const imagenesFiltradas = images.flat().filter(imagen => imagen.categoria === 'Ofertas');

  return (
    <>
      <div className="flex" style={{ marginTop: '90px', marginLeft: '7px' }}>
        <article className="mx-10 lg:mx-80 my-40" style={{ marginLeft: '130px' }}>
          <Link to="/ruta">
            <img src="https://img.freepik.com/vector-gratis/conjunto-ilustracion-dibujos-animados-accesorios-telefono-movil-gafas-vr-modelo-3d-funda-telefonos-moviles-cargador-bateria-auriculares-reloj-inteligente-tarjeta-memoria-selfie-stick-tecnologia-concepto-telefono-inteligente_74855-23119.jpg?w=1060&t=st=1716358899~exp=1716359499~hmac=df29089f81b2463bed98b172ab893df2826974a0b3243e15169ecbd0158b44ee" alt="Magic The Gathering" className="w-250 h-auto transition duration-300 transform hover:scale-110" style={{ width: '400px', height: 'auto' }} />
            <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300" style={{ marginTop: '40px', maxWidth: '360px', fontFamily: 'Arial, sans-serif' }}>Accesorios para tu celular</h2>
          </Link>
        </article>

        <div className="flex flex-col" style={{ marginBottom: '90px', marginLeft: '17px' }}>
          <article className="mb-4">
            <Link to="/ruta">
              <img src="https://www.asus.com/media/odin/websites/MX/News/execcy9rnquexicu/2x.jpg" className="w-250 h-auto transition duration-300 transform hover:scale-110" style={{ width: '400px', height: 'auto' }} />
              <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300" style={{ marginTop: '40px', maxWidth: '360px', fontFamily: 'Arial, sans-serif' }}>Monitores de alta resolucion</h2>
            </Link>
          </article>

          <article className="mb-4" style={{ marginTop: '110px', marginLeft: '17px' }}>
            <Link to="/ruta">
              <img src="https://images.ecestaticos.com/Kc2UgsvQ-IPr267jCQRLj9ucnvc=/125x0:2143x1511/600x450/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F300%2Fb1a%2Fabe%2F300b1aabe44666eb23d5a83848594fc1.jpg" style={{ width: '400px', height: 'auto' }} />
              <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300" style={{ marginTop: '40px', maxWidth: '360px', fontFamily: 'Arial, sans-serif' }}>Ropa Temporada invierno</h2>
            </Link>
          </article>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <table className="table-auto">
          <tbody>
            <tr>
              {imagenesFiltradas.map((imagen, index) => (
                <td key={index} className="px-20 py-8 text-center">
                  <button onClick={() => handleProductSelection(imagen.idProducto)}>
                    <img 
                      src={imagen.imageUrl}
                      alt={`Imagen ${index}`} 
                      className="w-56 h-auto transition duration-300 transform hover:scale-110" 
                    />
                  </button>
                  <h3 className="mt-4 text-base font-semibold">{imagen.title}</h3>
                  <h3 className="mt-4 text-base font-semibold">{imagen.marca}</h3>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SeccionCategoria;
