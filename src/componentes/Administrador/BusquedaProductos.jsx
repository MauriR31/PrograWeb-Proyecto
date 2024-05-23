const BusquedaProductos = ({ buscarProducto, handleSearchChange }) => {
  return (
    <section className="py-2">
      <input
        type="text"
        name="BuscarProducto"
        id="BuscarProducto"
        placeholder="Buscar por nombre..."
        className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:bg-white"
        value={buscarProducto}
        onChange={handleSearchChange}
      />
    </section>
  );
};

export default BusquedaProductos;
