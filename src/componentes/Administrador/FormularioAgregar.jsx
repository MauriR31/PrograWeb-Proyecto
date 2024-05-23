import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormularioAgregar = () => {
  const [formData, setFormData] = useState({
    title: "",
    marca: "",
    serie: "",
    descripcion: "",
    caracteristicas: [],
    cantidad: "",
    precio: "",
    estado: "Activo",
    tipo: "",
    imagen: "",
  });

  const navigate = useNavigate();

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
      caracteristicas: value.split(","),
    }));
  };

  const handleGuardar = () => {
    navigate("/Productos/AgregarProductos/DetalleProductos", {
      state: { producto: formData },
    });
  };

  return (
    <div>
      <main className="space-y-4 flex">
        <div className="w-1/3 p-4 flex flex-col items-center">
          <div className="w-full h-48 border-blue-500 border-4 border-dashed rounded-md flex items-center justify-center mb-4">
            {formData.imagen ? (
              <img
                src={formData.imagen}
                alt="Imagen del producto"
                className="object-cover h-full w-full rounded-md"
              />
            ) : (
              <span className="text-gray-500">Sin imagen</span>
            )}
          </div>
          <button
            className="py-2 px-4 bg-gray-200 border rounded-md"
            onClick={() => {
              /* Acción para agregar imagen */
            }}
          >
            Agregar Imagen
          </button>
        </div>
        <div className="w-2/3 space-y-4">
          <form className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Nombre</label>
              <input
                type="text"
                name="title"
                placeholder="Nombre"
                value={formData.title}
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
                value={formData.caracteristicas.join(",")}
                onChange={handleCaracteristicasChange}
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
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
                <label className="font-semibold">Serie</label>
                <input
                  type="text"
                  name="serie"
                  placeholder="Serie"
                  value={formData.serie}
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
                <label className="font-semibold">Stock</label>
                <input
                  type="text"
                  name="cantidad"
                  placeholder="Cantidad"
                  value={formData.cantidad}
                  onChange={handleChange}
                  className="p-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-semibold">Tipo</label>
                <input
                  type="text"
                  name="tipo"
                  placeholder="Tipo"
                  value={formData.tipo}
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
          className="w-full bg-black text-white font-bold py-2 rounded-lg"
        >
          Guardar
        </button>
      </footer>
    </div>
  );
};

export default FormularioAgregar;
