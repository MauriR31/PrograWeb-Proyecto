}import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Banner, images } from '../Principal/BD_Productos';

const SeccionPrincipal = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.trim());
    setShowWarning(false);
  };

  const handleSearch = () => {
    if (searchTerm) {
      navigate('/Busqueda', { state: { searchTerm } });
    } else {
      setShowWarning(true);
    }
  };

  const handleProductSelection = (image) => {
    console.log("ID del producto:", image.idProducto);
    navigate('/DetalleProducto', { state: { productId: image.idProducto } });
  };

  const handleNextBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % Banner.length);
  };

  const handlePreviousBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex - 1 + Banner.length) % Banner.length);
  };

  const ProductTable = ({ category }) => {
    const [startIndex, setStartIndex] = useState(0);
    const filteredImages = images.filter((image) => image.rubro === category);
    const visibleImages = filteredImages.slice(startIndex, startIndex + itemsPerPage);
  
    const handleNext = () => {
      const newStartIndex = startIndex + itemsPerPage;
      if (newStartIndex < filteredImages.length) {
        setStartIndex(newStartIndex);
      } else {
        setStartIndex(0);
      }
    };
  
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 ml-8" style={{marginLeft:'160px'}}>{category}</h2>
        <div className="flex justify-center">
          <section className="mx-8 lg:mx-20">
            <div className="flex items-center mt-4">
              <table className="table-auto" style={{marginBottom:'30px'}}>
                <tbody>
                  <tr>
                    {visibleImages.map((image, index) => (
                      <td key={index} className="px-4 py-4 text-center">
                        <button onClick={() => handleProductSelection(image)}>
                          <img
                            src={image.imageUrl}
                            alt={image.altText}
                            className="transition duration-100 transform hover:scale-110"
                            style={{ width: '230px', height: '160px' }}
                          />
                        </button>
                        <div className="mt-2">
                          <h3 className="text-lg font-semibold">{image.title}</h3>
                          <p className="text-sm text-gray-400">{image.marca}</p>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div className="flex justify-end mt-4 mr-20">
  <button
    onClick={handleNext}
    className="px-4 py-2 bg-transparent text-black rounded-md shadow-lg"
    style={{ width: '45px', height: '70px' , marginTop:'-235px' }}
  >
    &gt;
  </button>
</div>

      </div>
    );
  };

  const currentBanner = Banner[currentBannerIndex];

  return (
    <>
      <main className='mainBarraBusqueda'>
        <div className="flex items-center space-x-2 p-4 rounded-lg mx-auto" style={{ maxWidth: '900px', marginTop: '10px', marginBottom: '0px', cursor: 'text', backgroundColor: 'transparent' }}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-6 cursor-text"
            placeholder="Buscar..."
            style={{ minWidth: '100px', fontSize: '1.2rem' }}
          />
          <button onClick={handleSearch} disabled={!searchTerm} className={`px-6 py-6 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${searchTerm ? 'cursor-pointer bg-cover' : 'cursor-not-allowed'}`} style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/d/1YLTLvPzRiIi81z85AeVf6bkSVA9Q-pUq)', backgroundSize: 'cover' }}>
          </button>
        </div>
        {showWarning && <p style={{ color: 'red' }}>Por favor, ingrese un término de búsqueda.</p>}
      </main>
      <div className="relative flex flex-col items-center py-8">
        <button onClick={() => handleProductSelection(currentBanner)} className="focus:outline-none">
          <img
            src={currentBanner.imageUrl}
            alt={currentBanner.altText}
            style={{ width: '1500px', height: '570px' }}
          />
        </button>
        <button
          onClick={handlePreviousBanner}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-10 bg-transparent text-white rounded-md shadow-lg"
          style={{ marginLeft: '95px', zIndex: 10 }}
        >
          &lt;
        </button>
        <button
          onClick={handleNextBanner}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-10 bg-transparent text-white rounded-md shadow-lg"
          style={{ marginRight: '95px', zIndex: 10 }}
        >
          &gt;
        </button>
      </div>
      <div className="product-category">
        <ProductTable category="Tecnologia" />
      </div>
      <div className="product-category">
        <ProductTable category="Deportes" />
      </div>
      <div className="product-category">
        <ProductTable category="Moda" />
      </div>
    </>
  );
};

export default SeccionPrincipal;
