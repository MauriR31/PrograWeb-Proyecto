import { Link } from 'react-router-dom';
import React from "react";
import Footer from '../../../componentes/Footer.jsx';
import HVacio from '../../../componentes/Header/HVacio.jsx';

const PedidoCompleto = () => {
    return (
        <>
        <HVacio />
        <div className="w-full min-h-screen bg-gray-100">
            <h1 className="text-center mb-12 pt-10 text-2xl">¡Muchas gracias por tu pedido!</h1>
            <h2 className="text-center mb-12 text-xl">Puedes ver el detalle y estado de tu pedido ingresando a <a href="" className="underline">tu cuenta</a>.</h2>

            <section className="mb-10">
                <p className="text-2xl mb-4 ml-5">También te podría interesar...</p>
            </section>
            <section className="flex flex-wrap gap-4 ml-5 flex justify-center">
                <div className="flex flex-col items-center mr-10">
                    <img src='src/assets/imgn.png' alt="img2" className=" h-20 mb-4"/>
                    <h3 className="text-xl mb-4">Item 1</h3>
                    <h4 className="text-sm">Learn More</h4>
                </div>
                <div className="flex flex-col items-center mr-10">
                    <img src='src/assets/imgn.png' alt="img2" className="h-20 mb-4"/>
                    <h3 className="text-xl mb-4">Item 1</h3>
                    <h4 className="text-sm">Learn More</h4>
                </div>
                <div className="flex flex-col items-center mr-10">
                    <img src='src/assets/imgn.png' alt="img2" className="h-20 mb-4"/>
                    <h3 className="text-xl mb-4">Item 1</h3>
                    <h4 className="text-sm">Learn More</h4>
                </div>
                <div className="flex flex-col items-center mr-10">
                    <img src='src/assets/imgn.png' alt="img2" className="h-20 mb-4"/>
                    <h3 className="text-xl mb-4">Item 1</h3>
                    <h4 className="text-sm">Learn More</h4>
                </div>
                <div className="flex flex-col items-center mr-10">
                    <img src='src/assets/imgn.png' alt="img2" className="h-20 mb-4"/>
                    <h3 className="text-xl mb-4">Item 1</h3>
                    <h4 className="text-sm">Learn More</h4>
                </div>
            </section>
        </div>
        <Footer />
        </>
    )
}

export default PedidoCompleto;
