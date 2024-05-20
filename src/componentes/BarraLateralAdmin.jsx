import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex-shrink-0">
      <div className="p-4">
        <h2 className="text-2xl font-bold">TIENDA</h2>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/admin/dashboard"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/usuarios"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Usuarios registrados
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/productos"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/ordenes"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Órdenes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/mas-vendidos"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Productos más vendidos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/series"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Series
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
