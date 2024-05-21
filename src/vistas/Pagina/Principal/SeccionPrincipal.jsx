import React, { useState } from 'react';
import { colecciones, images } from '../Principal/BD_Productos'; // Importa colecciones e images desde BD_Productos


const SeccionPrincipal = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelection = (product) => {
   
    const selectedRow = images.find((row) => row.some((image) => image.id === product.id));
    setSelectedProduct(selectedRow);
  };
  

  const ProductTable = () => {
    return (
      <div className="flex justify-center">
        <section className="mx-8 lg:mx-20">
          <table className="table-auto">
            <tbody>
              <tr>
                {colecciones.map((coleccion, index) => (
                  <td key={index} className="px-20 py-8 text-center" style={{ maxHeight: '250px' }}>
                    <a href="#" onClick={() => handleProductSelection(coleccion)}>
                      <img src={coleccion.imageUrl} alt={coleccion.altText} className="w-72 h-auto transition duration-300 transform hover:scale-110" />
                    </a>
                    <h3 className="mt-4 text-lg font-semibold" style={{ width: '300px' }}>{coleccion.title}</h3>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  };

  const ImageTable = () => {
    return (
      <div className="flex justify-center mt-8" style={{ margin: '75px' }}>
        <section className="mx-8 lg:mx-20">
          <table className="table-auto">
            <tbody>
              {images.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((image, cellIndex) => (
                    <td key={cellIndex} className="px-20 py-50 text-center">
                      <a href="DetalleProducto" onClick={() => handleProductSelection(image)}>
                        <img
                          src={image.imageUrl}
                          alt={image.altText}
                          className="transition duration-400 transform hover:scale-110"
                          style={{ width: '290px', height: '140px', alignContent: 'center', marginTop: '30px' }}
                        />
                      </a>
                      <div className="mt-4">
                        <h3 className="text-base font-semibold">
                          {image.title}
                        </h3>
                        <h4 className="text-base font-semibold text-gray-400 text-sm mb-15 px-10 py-5">
                          {image.marca}
                        </h4>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  };

  // Exportar el producto seleccionado a otro componente JSX
  return (
    <>
      <ProductTable />
      <ImageTable />
    </>
  );
};

export default SeccionPrincipal;
