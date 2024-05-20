import React, { useState, useEffect } from 'react';
import { images } from './BD_Productos';
import { useNavigate } from 'react-router-dom'; 

const SeccionBusqueda = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate(); // Agrega useNavigate aquí

  useEffect(() => {
    const filteredImages = images.filter(image =>
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.marca.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filteredImages);
  }, [searchTerm]);

  return (
    <div>
      <BarraBusqueda /> {/* Agregado BarraBusqueda aquí */}
      <div className="flex flex-wrap justify-center">
        {filteredResults.length > 0 ? (
          filteredResults.map((image, index) => ( // Cambiado el nombre de la variable de images a image
            <div key={index} className="flex items-center m-4">
              <img src={image.imageUrl} alt={image.title} className="w-72 h-auto transition duration-300 transform hover:scale-110" />
              <div className="ml-8">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-2">{descripcion}</p>
                <div className="flex items-center mb-2">
                  <span className="font-semibold">Marca:</span>
                  <span className="ml-1">{marca}</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="font-semibold">Precio:</span>
                  <span className="ml-1">{precio}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
};

export default SeccionBusqueda;
