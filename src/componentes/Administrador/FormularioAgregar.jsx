import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CrearProdAPI from "../../api/Alumno05/CrearProd";
import ListProdAPI from "../../api/Alumno05/ListProd";

const FormularioAgregar = () => {
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    precio: "",
    marca: "",
    descripcion: "",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-EjmAyDUWS7zYg3Qi422rqbVepq4uHYA-Q&s",
    caracteristicas: "",
    stock: "",
    fecha_registro: "",
    id_serie: "",
    id_coleccion: "",
    id_categoria: "",
    id_estado: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [tempUrl, setTempUrl] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isValid = Object.entries(formData).every(([key, value]) => {
      if (key === "id") {
        return true;
      }
      return value !== "";
    });
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCaracteristicasChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      caracteristicas: value,
    }));
  };

  const handleGuardar = async () => {
    try {
      const productos = await ListProdAPI.findAll();
      const ultimoId = productos.reduce((max, prod) => (prod.id > max ? prod.id : max), 0);
      const nuevoId = ultimoId + 1;

      const data = {
        ...formData,
        id: nuevoId,
        caracteristicas: formData.caracteristicas,
        fecha_registro: `${formData.fecha_registro}`
      };

      const nuevoProducto = await CrearProdAPI.create(data);
      if (nuevoProducto) {
        setShowConfirmModal(true);
      } else {
        console.error("Error al crear producto");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Error al guardar producto");
      console.error("Error al guardar producto:", error);
    }
  };

  const handleAgregarImagen = () => {
    setFormData((prevData) => ({
      ...prevData,
      url: tempUrl,
    }));
    setShowModal(false);
  };

  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
    navigate(`/Productos/AgregarProductos/DetalleProductos`, {
      state: { producto: formData },
    });
  };

  return (
    <div>
      <main className="space-y-4 flex">
        <div className="w-1/3 p-4 flex flex-col items-center">
          <div className="w-full h-48 border-blue-500 border-4 border-dashed rounded-md flex items-center justify-center mb-4">
            {formData.url ? (
              <img
                src={formData.url}
                alt="Imagen del producto"
                className="h-full w-full object-contain rounded-md"
              />
            ) : (
              <span className="text-gray-500">Sin imagen</span>
            )}
          </div>
          <button
            className="py-2 px-4 bg-gray-200 border rounded-md"
            onClick={() => setShowModal(true)}
          >
            Agregar Imagen
          </button>
        </div>
        <div className="w-2/3 space-y-4">
          {error && (
            <div className="bg-red-200 text-red-700 p-2 rounded">
              {error}
            </div>
          )}
          <form className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Nombre</label>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Precio</label>
              <input
                type="text"
                name="precio"
                placeholder="Precio"
                value={formData.precio}
                onChange={handleChange}
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Marca</label>
              <input
                type="text"
                name="marca"
                placeholder="Marca"
                value={formData.marca}
                onChange={handleChange}
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Descripción</label>
              <textarea
                name="descripcion"
                placeholder="Descripción"
                value={formData.descripcion}
                onChange={handleChange}
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Características</label>
              <textarea
                name="caracteristicas"
                placeholder="Características (separadas por coma)"
                value={formData.caracteristicas}
                onChange={handleCaracteristicasChange}
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label className="font-semibold">Stock</label>
                <input
                  type="text"
                  name="stock"
                  placeholder="Stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="p-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-semibold">Fecha de Registro</label>
                <input
                  type="date"
                  name="fecha_registro"
                  placeholder="Fecha de Registro"
                  value={formData.fecha_registro}
                  onChange={handleChange}
                  className="p-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-semibold">Serie</label>
                <input
                  type="text"
                  name="id_serie"
                  placeholder="ID Serie"
                  value={formData.id_serie}
                  onChange={handleChange}
                  className="p-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-semibold">Colección</label>
                <input
                  type="text"
                  name="id_coleccion"
                  placeholder="ID Colección"
                  value={formData.id_coleccion}
                  onChange={handleChange}
                  className="p-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-semibold">Categoría</label>
                <input
                  type="text"
                  name="id_categoria"
                  placeholder="ID Categoría"
                  value={formData.id_categoria}
                  onChange={handleChange}
                  className="p-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-semibold">Estado</label>
                <input
                  type="text"
                  name="id_estado"
                  placeholder="ID Estado"
                  value={formData.id_estado}
                  onChange={handleChange}
                  className="p-2 border rounded-md"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </main>
      <footer className="mt-4">
        <button
          onClick={handleGuardar}
          className={`w-full font-bold py-2 rounded-lg ${
            isFormValid ? "bg-black text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isFormValid}
        >
          Guardar
        </button>
      </footer>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Agregar URL de la Imagen</h2>
            <input
              type="text"
              placeholder="Ingrese URL de la imagen"
              value={tempUrl}
              onChange={(e) => setTempUrl(e.target.value)}
              className="p-2 border rounded-md w-full mb-4"
            />
            <div className="flex justify-end">
              <button
                className="py-2 px-4 bg-gray-200 border rounded-md mr-2"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="py-2 px-4 bg-blue-500 text-white rounded-md"
                onClick={handleAgregarImagen}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Producto Guardado</h2>
            <p className="mb-4">El producto ha sido guardado exitosamente.</p>
            <div className="flex justify-end">
              <button
                className="py-2 px-4 bg-blue-500 text-white rounded-md"
                onClick={handleCloseConfirmModal}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormularioAgregar;
