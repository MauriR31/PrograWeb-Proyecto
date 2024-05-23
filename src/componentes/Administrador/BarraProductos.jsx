import { useNavigate } from 'react-router-dom';

const BarraProductos = () => {
  const navigate = useNavigate();

  const handleAgregarProducto = () => {
    navigate('/Productos/AgregarProductos');
  };

  return (
    <div className="bg-white flex justify-between items-center pl-8 pt-4 pb-4 mb-4 rounded-lg shadow-sm">
      <h3 className="font-extrabold">Productos</h3>
      <button 
        onClick={handleAgregarProducto}
        className="pr-8 pl-8 py-1 ml-auto mr-8 bg-black text-white font-bold rounded-lg">
        + Agregar Producto
      </button>
    </div>
  );
};

export default BarraProductos;
