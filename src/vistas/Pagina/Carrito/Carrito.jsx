import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HCompleto from '../../../componentes/Header/HCompleto.jsx';
import Footer from '../../../componentes/Footer.jsx';
import { images } from '../Principal/BD_Productos.jsx';
import { actualizarCantidadP, eliminarImages, guardarParaDespues } from "../../../api/carrito.js";

const Carrito = () => {
  const [productos, setProductos] = useState(images);
  const [guardadoParaDespues, setGuardadoParaDespues] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [filteredImages, setFilteredImages] = useState(productos);

  const { state } = useLocation();
  const navigate = useNavigate();

  const actualizarCantidadTotal = (productos) => {
    const totalItems = productos.reduce((acc, product) => acc + (product.cantidad || 0), 0);
    setCantidadTotal(totalItems);
  };

  useEffect(() => {
    actualizarCantidadTotal(filteredImages);
  }, [filteredImages]);

  const cambiarCantidad = async (idProducto, nuevaCantidad) => {
    const result = await actualizarCantidadP(idProducto, nuevaCantidad);
    if (result) {
      const nuevosProductos = productos.map(product =>
        product.idProducto === idProducto ? { ...product, cantidad: nuevaCantidad } : product
      );
      setProductos(nuevosProductos);
      setFilteredImages(nuevosProductos);
    }
  };

  const eliminarProducto = async (idProducto) => {
    const success = await eliminarImages(idProducto);
    if (success) {
      const nuevosProductos = productos.filter(product => product.idProducto !== idProducto);
      setProductos(nuevosProductos);
      setFilteredImages(nuevosProductos);
    }
  };

  const guardarParaDespuesHandler = async (idProducto) => {
    const result = await guardarParaDespues(idProducto);
    if (result) {
      const nuevosProductos = productos.filter(product => product.idProducto !== idProducto);
      setGuardadoParaDespues([...guardadoParaDespues, result]);
      setProductos(nuevosProductos);
      setFilteredImages(nuevosProductos);
    }
  };

  const moverAlCarrito = (idProducto) => {
    const productAMover = guardadoParaDespues.find(product => product.idProducto === idProducto);
    const nuevosProductos = [...productos, productAMover];
    setProductos(nuevosProductos);
    setFilteredImages(nuevosProductos);
    setGuardadoParaDespues(guardadoParaDespues.filter(product => product.idProducto !== idProducto));
  };

  const total = filteredImages.reduce((acc, product) => acc + (product.precio * product.cantidad), 0);

  const filtrarPorId = (idProducto) => {
    const filtered = productos.filter(product => product.idProducto === idProducto);
    setFilteredImages(filtered);
  };

  useEffect(() => {
    if (state && state.idProducto) {
      filtrarPorId(state.idProducto);
    } else {
      setFilteredImages(productos);
    }
  }, [state, productos]);

  return (
    <>
      <HCompleto />
      <div className="bg-gray-100 ml-5">
        <h1 className="text-xl font-normal mb-2">{cantidadTotal} Items en tu Carrito de Compras</h1>
        <h2 className="text-base font-bold bg-gray-800 border-2 mb-2 p-1 pl-2 rounded-lg text-white">Items Disponibles para Envío</h2>
        {filteredImages.map((product) => (
          <section key={product.idProducto} className="flex bg-white p-5 border-b-3 border-l-2 mb-2 border-gray-800 hover:bg-gray-100 rounded-lg">
            <article className="flex">
              <img src={product.imageUrl} className="h-24 w-28 border-2 rounded mr-12" alt={product.nombre} />
              <div className="mr-8">
                <h3 className="text-base font-bold mb-7 w-112">{product.title}</h3>
                <nav className="flex">
                  <h4 className="underline mr-5 text-gray-500 cursor-pointer" onClick={() => eliminarProducto(product.idProducto)}>Eliminar</h4>
                  <h4 className="underline mr-5 text-gray-500">|</h4>
                  <h4 className="underline mr-5 text-gray-500 cursor-pointer" onClick={() => guardarParaDespuesHandler(product.idProducto)}>Guardar para después</h4>
                </nav>
              </div>
            </article>
            <article className="flex">
              <select
                className="w-24 h-8 font-bold border-2 pl-2"
                value={product.cantidad}
                onChange={(e) => cambiarCantidad(product.idProducto, parseInt(e.target.value))}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
                <option value="3">5</option>
              </select>
            </article>
            <article className="flex ml-auto">
              <div className="mr-8">
                <h5 className="font-bold text-xs text-right">Precio</h5>
                <h6 className="text-xs text-right">S/ {product.precio}</h6>
              </div>
              <div className="mr-8">
                <h5 className="font-bold text-xs text-right">Subtotal</h5>
                <h6 className="text-xs text-right">S/ {(product.precio * product.cantidad)}</h6>
              </div>
            </article>
          </section>
        ))}
        <br />
        <div className="mr-8 ml-auto block text-right">
          <p className="font-bold">Total: S/ {total.toFixed(2)}</p>
          <br />
          <button className="bg-blue-800 text-white text-base font-light p-4 rounded w-40 ml-auto block">
            <Link to="/carrito/checkout">Checkout</Link>
          </button>
        </div>
        <br /><br />
        <h2 className="text-base font-bold bg-gray-800 border-2 mb-2 p-1 pl-2 rounded-lg text-white">Guardado para después</h2>
        {guardadoParaDespues.map((product) => (
          <section key={product.idProducto} className="flex bg-white p-5 border-b-3 border-l-2 mb-2 border-gray-800 hover:bg-gray-100 rounded-lg">
            <article className="flex">
              <img src={product.imageUrl} className="h-24 w-28 border-2 rounded mr-12" alt={product.nombre} />
              <div className="mr-8">
                <h3 className="text-base font-bold mb-7 w-112">{product.title}</h3>
                <nav className="flex">
                  <h4 className="underline mr-5 text-gray-500 cursor-pointer" onClick={() => eliminarProducto(product.idProducto, 'guardadoParaDespues')}>Eliminar</h4>
                  <h4 className="underline mr-5 text-gray-500">|</h4>
                  <h4 className="underline mr-5 text-gray-500 cursor-pointer" onClick={() => moverAlCarrito(product.idProducto)}>Mover al carrito</h4>
                </nav>
              </div>
            </article>
            <article className="flex">
              <h6 className="text-gray-500">Cantidad: {product.cantidad}</h6>
            </article>
            <article className="flex ml-auto">
              <div className="mr-8">
                <h5 className="font-bold text-xs text-right">Precio</h5>
                <h6 className="text-xs text-right">S/ {product.precio}</h6>
              </div>
              <div className="mr-8">
                <h5 className="font-bold text-xs text-right">Subtotal</h5>
                <h6 className="text-xs text-right">S/ {(product.precio * product.cantidad).toFixed(2)}</h6>
              </div>
            </article>
          </section>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Carrito;
