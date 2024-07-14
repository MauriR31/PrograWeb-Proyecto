
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const ProductDetails = ({ productDetails }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log('ID_Producto_Sel:', productDetails.id , 'Cantidad: ' , quantity);
    navigate("/carrito", { state: { id: productDetails.id, quantity } });
  };

  return productDetails ? (
    <div className="container mx-auto mt-20 max-w-screen-xl">
      <div className="flex justify-between">
        {/* Detalles del producto */}
        <section className="product-info" style={{ width: '500px', marginLeft: '10px', marginTop: '10px', padding: '0' }}>
          <div className="title" style={{ marginTop: '2rem', fontSize: '1.5rem', fontWeight: 'bold' }}>{productDetails.nombre}</div>
          <div className="details" style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'row' }}>
            <div className="manufacturer" style={{ fontSize: '1.125rem', marginLeft: '10px' }}>Por: {productDetails.marca}</div>
            <div className="series" style={{ fontSize: '1.125rem', marginLeft: '10px' }}>Serie: {productDetails.nombre_serie}</div>
          </div>
          <div className="mr-10" style={{ marginTop: '110px', marginRight: '0px', padding: '0' }}>
            <img src={productDetails.url} alt={productDetails.title} className="w-400 h-auto transition duration-300 transform hover:scale-110" style={{ width: '400px', height: 'auto' }} />
          </div>
        </section>

        {/* Bloque verde y Disponible */}
        <aside className="Resul pt-4 pb-4 pl-6 pr-6 relative bg-green-300" style={{ width: '300px', height: '400px', marginTop: '100px', marginLeft: '10px', marginRight: '10px' }}>
          {/* Disponibilidad del producto */}
          <aside className="Dispon w-96 h-40 border-3 border-solid border-gray-300 bg-gray-200 shadow-md flex items-center justify-center" style={{ width: '300px', height: '60px', marginTop: '-80px', marginLeft: '-25px' }}>
            <h1 className="text-lg font-semibold">{quantity > productDetails.cantidad ? 'Agotado' : (productDetails.cantidad >= 1 ? 'Disponible' : 'Agotado')}</h1>
          </aside>

          <div className="receipt-header absolute top-0 right-0 w-32 h-8" style={{ marginRight: '55px', marginTop: '36px' }}>
            <h1 className="text-lg font-semibold" style={{ fontSize: '28px' }}>Precio: ${productDetails.precio}</h1>
          </div>

          <div className="quantity-container mt-4 flex items-center justify-center" style={{ marginLeft: '10px', marginTop: '100px' }}>
            <button onClick={handleDecrement} className="quantity-button w-10 h-10 mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300">-</button>
            <input type="number" id="quantity" value={quantity} className="quantity-input w-16 h-10 text-center bg-gray-100 text-gray-800 font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition duration-300" readOnly />
            <button onClick={handleIncrement} className="quantity-button w-10 h-10 ml-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300">+</button>
          </div>

          <button onClick={handleAddToCart} className="add-to-cart w-40 h-10 bg-green-500 text-white rounded-md border-none uppercase font-bold my-10 mx-12 transition duration-300 hover:bg-green-600" style={{ width: '200px', height: '40px', marginLeft: '32px', marginTop: '50px' }}>
            AÑADIR AL CARRITO
          </button>

          <div className="MetodosEnvio mt-8" style={{ marginLeft: '10px', marginTop: '20px' }}>
            <Link to="#" className="text-lg font-semibold text-black hover:bg-gray-300 rounded-md px-6 py-3 transition duration-300 inline-block">Ver métodos de envío disponibles</Link>
          </div>
        </aside>
      </div>

      {/* Descripción del producto */}
      <article className="Descrip bg-white shadow-md rounded-lg p-8 mt-8 mx-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Descripción</h2>
        <p className="text-base text-gray-800 leading-relaxed">{productDetails.descripcion}</p>
      </article>

      {/* Características del producto */}
      <article className="Carac bg-white shadow-md rounded-lg p-8 mt-8 mx-4" style={{ marginTop: '30px', marginBottom: '30px' }}>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Características del Producto</h2>
        <ul className="list-disc list-inside">
          <li className="text-base mb-4 text-gray-800"><span className="font-semibold">Material:</span> {productDetails.caracteristicas}</li>
          <li className="text-base mb-4 text-gray-800"><span className="font-semibold">Serie:</span> {productDetails.nombre_serie}</li>
        </ul>
      </article>
    </div>
  ) : (
    <div>No se ha encontrado el producto.</div>
  );
};

export default ProductDetails;
