import React from 'react';
import HCompleto from '../../../componentes/Header/HCompleto.jsx';
import Footer from '../../../componentes/Footer.jsx';
import SeccionPrincipal from './SeccionPrincipal.jsx';
import BloqueDetalleProducto from './BloqueDetalleProducto.jsx'; // Importa BloqueDetalleProducto

function DetalleProducto({ images }) {
  // Verifica si images está definido y tiene al menos un elemento
  const selectedProduct = images && images.length > 0 ? images[0] : null; // Corrige la asignación de selectedProduct

  return (
    <>
      <HCompleto />
      {/* Corrige el nombre del prop a selectedProductId */}
      <BloqueDetalleProducto selectedProductId={selectedProduct ? selectedProduct.id : null} images={images} />

      <Footer />
    </>
  );
}

export default DetalleProducto;
