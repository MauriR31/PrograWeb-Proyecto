import { Link } from "react-router-dom";
import React, { useState } from "react";

const pedidosIniciales = [
    {
        id: 1,
        nombre: "Voltron Mini Action Voltron Vehicle Force Figure (Standard)",
        precio: 65.99,
        cantidad: 1,
        imagen: 'src/assets/imgb.png',
        subtotal: 65.99,
    },
    {
        id: 2,
        nombre: "Star Wars Collection: Darth Vader White (Special Christmas 2024 Disney Edition)",
        precio: 65.99,
        cantidad: 1,
        imagen: 'src/assets/imgb.png',
        subtotal: 65.99,
    },
    {
        id: 3,
        nombre: "Marvel Legends Series Iron Man Action Figure",
        precio: 75.50,
        cantidad: 1,
        imagen: 'src/assets/imgb.png',
        subtotal: 75.50,
    },
    {
        id: 4,
        nombre: "Transformers Bumblebee Action Figure",
        precio: 89.99,
        cantidad: 1,
        imagen: 'src/assets/imgb.png',
        subtotal: 89.99,
    },
    {
        id: 5,
        nombre: "LEGO Star Wars: The Mandalorian Razor Crest",
        precio: 120.00,
        cantidad: 1,
        imagen: 'src/assets/imgb.png',
        subtotal: 120.00,
    }
];

const Carrito = () => {
    const [pedidos, setPedidos] = useState(pedidosIniciales);
    const [guardadoParaDespues, setGuardadoParaDespues] = useState([]);

    const cambiarCantidadP = (id, nuevaCantidad) => {
        setPedidos(pedidos.map(pedido => {
            if (pedido.id === id) {
                const nuevoSubtotal = pedido.precio * nuevaCantidad;
                return { ...pedido, cantidad: nuevaCantidad, subtotal: nuevoSubtotal };
            }
            return pedido;
        }));
    };

    const eliminarPedido = (id) => {
        setPedidos(pedidos.filter(pedido => pedido.id !== id));
    };

    const guardarParaDespues = (id) => {
        const pedidoGuardado = pedidos.find(pedido => pedido.id === id);
        setGuardadoParaDespues([...guardadoParaDespues, pedidoGuardado]);
        eliminarPedido(id);
    };

    const moverAlCarrito = (id) => {
        const pedidoAMover = guardadoParaDespues.find(pedido => pedido.id === id);
        setPedidos([...pedidos, pedidoAMover]);
        setGuardadoParaDespues(guardadoParaDespues.filter(pedido => pedido.id !== id));
    };

    const total = pedidos.reduce((acc, pedido) => acc + pedido.subtotal, 0);

    return (
        <div className="bg-gray-100 ml-5">
            <h1 className="text-xl font-normal mb-2">{pedidos.length} Items en tu Carrito de Compras</h1>
            <h2 className="text-base font-bold bg-gray-400 border-2 mb-2 p-1 pl-2 rounded-lg ">Items Disponibles para Envío</h2>
            {pedidos.map((pedido) => (
                <section key={pedido.id} className="flex bg-white p-5 border-b-3 border-l-2 mb-2 border-gray-300">
                    <article className="flex">
                        <img src={pedido.imagen} className="h-24 w-28 border-2 rounded mr-12" alt={pedido.nombre} />
                        <div className="mr-8">
                            <h3 className="text-base font-bold mb-7 w-112">{pedido.nombre}</h3>
                            <nav className="flex">
                                <h4 className="underline mr-5 text-gray-500" onClick={() => eliminarPedido(pedido.id)}>Eliminar</h4>
                                <h4 className="underline mr-5 text-gray-500">|</h4>
                                <h4 className="underline mr-5 text-gray-500" onClick={() => guardarParaDespues(pedido.id)}>Guardar para después</h4>
                            </nav>
                        </div>
                    </article>
                    <article className="flex">
                        <select
                            className="w-24 h-8 font-bold border-2 pl-2"
                            value={pedido.cantidad}
                            onChange={(e) => cambiarCantidadP(pedido.id, parseInt(e.target.value))}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </article>
                    <article className="flex ml-auto">
                        <div className="mr-8">
                            <h5 className="font-bold text-xs text-right">Precio</h5>
                            <h6 className="text-xs text-right">S/ {pedido.precio}</h6>
                        </div>
                        <div className="mr-8">
                            <h5 className="font-bold text-xs text-right">Subtotal</h5>
                            <h6 className="text-xs text-right">S/ {pedido.subtotal.toFixed(2)}</h6>
                        </div>
                    </article>
                </section>
            ))}
            <br />
            <div className="mr-8 ml-auto block text-right">
                <p className="font-bold">Total: S/ {total.toFixed(2)}</p>
                <br />
                <button className="bg-black text-white text-base font-light p-4 rounded w-40 ml-auto block">
                    <Link to="/Checkout">Checkout</Link>
                    </button>
            </div>
            <br /><br />
            <h2 className="text-base font-bold bg-gray-400 border-2 mb-2 p-1 pl-2 rounded-lg">Guardado para después</h2>
            {guardadoParaDespues.map((pedido) => (
                <section key={pedido.id} className="flex bg-white p-5 border-b-3 border-l-2 mb-2 border-gray-300">
                    <article className="flex">
                        <img src={pedido.imagen} className="h-24 w-28 border-2 rounded mr-12" alt={pedido.nombre} />
                        <div className="mr-8">
                            <h3 className="text-base font-bold mb-7 w-112">{pedido.nombre}</h3>
                            <nav className="flex">
                                <h4 className="underline mr-5 text-gray-500" onClick={() => eliminarPedido(pedido.id)}>Eliminar</h4>
                                <h4 className="underline mr-5 text-gray-500">|</h4>
                                <h4 className="underline mr-5 text-gray-500" onClick={() => moverAlCarrito(pedido.id)}>Mover al carrito</h4>
                            </nav>
                        </div>
                    </article>
                    <article className="flex">
                        <h6 className="text-gray-500">Cantidad: {pedido.cantidad}</h6>
                    </article>
                    <article className="flex ml-auto">
                        <div className="mr-8">
                            <h5 className="font-bold text-xs text-right">Precio</h5>
                            <h6 className="text-xs text-right">S/ {pedido.precio}</h6>
                        </div>
                        <div className="mr-8">
                            <h5 className="font-bold text-xs text-right">Subtotal</h5>
                            <h6 className="text-xs text-right">S/ {pedido.subtotal.toFixed(2)}</h6>
                        </div>
                    </article>
                </section>
            ))}
        </div>
    );
};

export default Carrito;
