import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { images } from '../Principal/BD_Productos';
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

        // Buscar el producto correspondiente en el arreglo images
        const foundProduct = images.flat().find(image => image.idProducto === productId);
        
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
