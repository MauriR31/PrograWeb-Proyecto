/** @type {import('tailwindcss').Config} */

function BarraCuenta() {
  return (
    <div className="flex flex-col w-1/6 pt-12 bg-gray-800 text-white shadow-emerald-500">
      <div className="p-4">
        <p className="text-xl font-bold">Admin</p>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="flex flex-col p-4">
          <li className="py-2 pl-2">
            <a href="Admin/dashboard" className="text-white hover:text-gray-300">Dashboard</a>
          </li>
          <li className="py-2 pl-2">
            <a href="/Admin/UsersLog" className="text-white hover:text-gray-300">Usuarios registrados</a>
          </li>
          <li className="py-2 pl-2">
            <a href="Admin/productos" className="text-white hover:text-gray-300">Productos</a>
          </li>
          <li className="py-2 pl-2">
            <a href="/Admin/OrdenLog" className="text-white hover:text-gray-300">Órdenes</a>
          </li>
          <li className="py-2 pl-2">
            <a href="Admin/productos-vendidos" className="text-white hover:text-gray-300">Productos más vendidos</a>
          </li>
          <li className="py-2 pl-2">
            <a href="/Admin/series" className="text-white hover:text-gray-300">Series</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BarraCuenta