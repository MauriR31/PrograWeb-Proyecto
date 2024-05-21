import React from 'react';

function BloqueDetalleProducto({ selectedProductId, images }) {
    // Verifica si images está definido y tiene un valor antes de utilizarlo
    const filteredProduct = images ? images.find(image => image.id === selectedProductId) : null;

    // Verificar si el producto está definido
    if (!filteredProduct) {
      return <div>No se ha encontrado el producto.</div>;
    }
    
    // Desestructurar los datos del producto filtrado
    const { title, marca, serie, cantidad, precio, descripcion, material, articulaciones, piezas } = filteredProduct;
  
  return (

    <>
      <section className="product-info" style={{ width: '500px' }}>
        <div className="title" style={{ marginTop: '2rem', marginLeft: '2rem', fontSize: '1.5rem', fontWeight: 'bold' }}>{title}</div>
        <div className="details" style={{ marginTop: '1.5rem', marginLeft: '2rem', display: 'flex', flexDirection: 'row' }}>
          <div className="manufacturer" style={{ marginLeft: '1rem', fontSize: '1.125rem' }}>Por: {marca}</div>
          <div className="series" style={{ marginLeft: '1rem', fontSize: '1.125rem' }}>Serie: {serie}</div>
        </div>
      </section>

      <aside className="Dispon w-96 h-40 border-3 border-solid border-gray-300 bg-gray-200 shadow-md flex items-center justify-center" style={{ width: '300px', height: '60px', marginTop: '20px', marginLeft: '1160px' }}>
        <h1 className="text-lg font-semibold" style={{ marginLeft: '10px' }}>
          {cantidad >= 1 ? 'Disponible' : 'Agotado'}
        </h1>
      </aside>

      <aside className="Resul pt-4 pb-4 pl-6 pr-6 relative bg-green-300" style={{ width: '300px', height: '400px', marginLeft: '1160px', marginTop: '2px' }}>
        <div className="receipt-header absolute top-0 right-0 w-32 h-8" style={{ marginRight: '69px', marginTop: '36px' }}>
          <h1 className="text-lg font-semibold" style={{ fontSize: '28px' }}>{precio}</h1>
        </div>

        <button className="add-to-cart w-40 h-10 bg-green-500 text-white rounded-md border-none uppercase font-bold my-10 mx-12 transition duration-300 hover:bg-green-600" style={{ width: '200px', height: '40px', marginLeft: '32px', marginTop: '100px' }}>
          AÑADIR AL CARRITO
        </button>

        <div className="receipt-header absolute left-6 top-20" style={{ marginLeft: '92px', marginTop: '89px' }}>
          <h1 className="text-lg font-semibold" style={{ fontSize: '18px' }}>Cantidad</h1>
        </div>

        <div className="quantity-container mt-4 flex items-center justify-center" style={{ marginLeft: '10px', marginTop: '30px' }}>
          <button className="quantity-button w-10 h-10 mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300">+</button>
          <input type="number" id="quantity" value="1" className="quantity-input w-16 h-10 text-center bg-gray-100 text-gray-800 font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition duration-300" />
          <button className="quantity-button w-10 h-10 ml-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300">-</button>
        </div>

        <div className="MetodosEnvio mt-8" style={{ marginLeft: '10px', marginTop: '20px' }}>
          <a href="#" className="text-lg font-semibold text-black hover:bg-gray-300 rounded-md px-6 py-3 transition duration-300 inline-block">Ver métodos de envío disponibles</a>
        </div>
      </aside>

      <article className="Descrip bg-white shadow-md rounded-lg p-8 mt-8 mx-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Descripción</h2>
        <p className="text-base text-gray-800 leading-relaxed">{descripcion}</p>
      </article>

      <article className="Carac bg-white shadow-md rounded-lg p-8 mt-8 mx-4" style={{ marginTop: '30px', marginBottom: '30px' }}>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Características del Producto</h2>
        <ul className="list-disc list-inside">
          <li className="text-base mb-4 text-gray-800"><span className="font-semibold">Material:</span> {material}</li>
          <li className="text-base mb-4 text-gray-800"><span className="font-semibold">Serie:</span> {serie}</li>
          <li className="text-base mb-4 text-gray-800"><span className="font-semibold">Articulaciones:</span> {articulaciones}</li>
          <li className="text-base text-gray-800"><span className="font-semibold">Piezas:</span> {piezas}</li>
        </ul>
      </article>

    </>
  );
}
export default BloqueDetalleProducto;
