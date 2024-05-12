/** @type {import('tailwindcss').Config} */

function BarraCuenta() {
  return (
    <aside className="flex flex-col w-1/6 h-full bg-gray-800 text-white shadow-emerald-500">
      <div className="p-4">
        <p className="text-xl font-bold">Admin</p>
      </div>
      <div>
        <ul className="flex flex-col p-4">
          <li className="py-2">
            <a href="/dashboard" className="text-white hover:text-gray-300">Dashboard</a>
          </li>
          <li className="py-2">
            <a href="/Admin/UsersLog" className="text-white hover:text-gray-300">Usuarios registrados</a>
          </li>
          <li className="py-2">
            <a href="/productos" className="text-white hover:text-gray-300">Productos</a>
          </li>
          <li className="py-2">
            <a href="/ordenes" className="text-white hover:text-gray-300">Órdenes</a>
          </li>
          <li className="py-2">
            <a href="/productos-vendidos" className="text-white hover:text-gray-300">Productos más vendidos</a>
          </li>
          <li className="py-2">
            <a href="/series" className="text-white hover:text-gray-300">Series</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default BarraCuenta