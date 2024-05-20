import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BarraBusqueda = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.trim());
    };

    const handleSearch = () => {
        if (searchTerm) {
            navigate('/Busqueda'); 
        }
    };

    return (
        <main id="mainBarraBusqueda" className='mainBarraBusqueda'>
            <div className="flex items-center space-x-2 p-2 bg-white rounded mx-auto" style={{ maxWidth: '800px', marginTop: '40px', marginBottom: '30px', cursor: 'text' }}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mr-6 cursor-text"
                    placeholder="Buscar..."
                />
                <button onClick={handleSearch} disabled={!searchTerm} className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${searchTerm ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                    Buscar
                </button>
            </div>
        </main>
    );
};

export default BarraBusqueda;
