import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { images } from './BD_Productos';
import HCompleto from '../../../componentes/Header/HCompleto';
import Footer from '../../../componentes/Footer';
import FuncionDetalles from './DetalleProducto';
import BarraPaginacion from '../../../componentes/BarraPaginacion';

const Busqueda = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { searchTerm } = location.state || { searchTerm: '' };

    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [productosMostrados, setProductosMostrados] = useState([]); // Estado para los productos mostrados
    const [orden, setOrden] = useState('precio');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [paginaActual, setPaginaActual] = useState(1); // Estado para la página actual
    const productosPorPagina = 5; // Ajuste para mostrar 5 productos por página

    useEffect(() => {
        const productosFiltrados = images.flat().filter(image =>
            image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            image.marca.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const productosOrdenados = ordenarProductos(productosFiltrados, orden);
        setProductosFiltrados(productosOrdenados);
    }, [searchTerm, orden]);

    useEffect(() => {
  
        const productosMostrados = productosFiltrados.slice((paginaActual - 1) * productosPorPagina, paginaActual * productosPorPagina);
        // Actualiza el estado de los productos mostrados
        setProductosMostrados(productosMostrados);
    }, [productosFiltrados, paginaActual]);

    const handleOrdenChange = (event) => {
        setOrden(event.target.value);
    };

    const ordenarProductos = (productos, tipoOrden) => {
        switch (tipoOrden) {
            case 'precio':
                return productos.sort((a, b) => a.precio - b.precio);
            case 'marca':
                return productos.sort((a, b) => (a.marca > b.marca) ? 1 : -1);
            case 'relevancia':
            default:
                return productos;
        }
    };

    const handleProductClick = (productId) => {
        console.log('ID del producto:', productId);
        const foundProduct = images.flat().find(image => image.idProducto === productId);
        console.log('Producto encontrado:', foundProduct);
        setSelectedProduct(foundProduct);
        // Enviar ID del producto
        navigate('/DetalleProducto', { state: { productId: productId } });
    };
    

    return (
        <>
            <HCompleto />
            <section className="Ordenar mt-0 text-right flex justify-end items-center mr-6 mb-6" style={{ marginTop: '30px' }}>
                <ol className="Orden inline mr-8 list-none">
                    <li className="mr-2">Ordenar Por :</li>
                </ol>

                <select
                    className="BotonOrden h-10 w-32 bg-gray-200 text-gray-700 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-gray-500"
                    onChange={handleOrdenChange}
                    value={orden}
                >
                    <option value="precio">Precio</option>
                    <option value="marca">Marca</option>
                    <option value="relevancia">Más relevantes</option>
                </select>
            </section>
            <section className="Resul pt-2 pb-2 mt-0 pl-4 pr-4 flex ml-6 bg-green-300" style={{ width: '1480px' }}>
                <ol className="ResulList inline mr-5 list-none">
                    <li className="mr-2 text-lg font-bold text-black">Resultados de Búsqueda</li>
                </ol>
            </section>

            <div className="container mx-1 py-14 max-w-screen-xl" style={{ marginLeft: '60px', padding: '50px' }}>
    <section className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-3 gap-8" style={{ marginLeft: '0', padding: '0' }}>
        {productosMostrados.map((image, index) => (
            <div key={index} className="flex flex-row items-center p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300" onClick={() => handleProductClick(image.idProducto)}>
                <img src={image.imageUrl} alt={image.title} className="w-48 h-auto rounded-lg mr-4" />
                <div className="ml-4">
                    <h2 className="text-xl font-bold mb-1">{image.title}</h2>
                    <h3 className="text-gray-600 mb-1">{image.descripcion}</h3>
                    <div className="flex items-center mb-1">
                        <span className="font-semibold">Marca:</span>
                        <span className="ml-1">{image.marca}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold">Precio:</span>
                        <span className="ml-1">{image.precio}</span>
                    </div>
                </div>
            </div>
        ))}
    </section>
</div>
            <BarraPaginacion
                paginaActual={paginaActual}
                totalPaginas={Math.ceil(productosFiltrados.length / productosPorPagina)}
                onChangePagina={setPaginaActual}
            />

            {selectedProduct && <FuncionDetalles productDetails={selectedProduct} />}

            <Footer />
        </>
    );
};

export default Busqueda;
