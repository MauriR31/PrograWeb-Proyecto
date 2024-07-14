// DetalleProducto.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import productosAPI from '../../../api/ProductoVista';
import HCompleto from '../../../componentes/Header/HCompleto';
import Footer from '../../../componentes/Footer';
import FuncionDetalles from './FuncionDetalles';

const DetalleProducto = () => {
    const location = useLocation();
    const { searchTerm, productId } = location.state || { searchTerm: '', productId: '' };
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        console.warn("Término de búsqueda:", searchTerm);
        console.warn("ID recibido:", productId);

        // Buscar el producto correspondiente en el arreglo productosAPI
        const foundProduct = productosAPI.find(producto => producto.id === productId);
        
        // Establecer los detalles del producto encontrado
        setProductDetails(foundProduct);
    }, [searchTerm, productId]);

    return (
        <>
            <HCompleto />
            <FuncionDetalles productDetails={productDetails} />
            <Footer />
        </>
    );
};

export default DetalleProducto;
