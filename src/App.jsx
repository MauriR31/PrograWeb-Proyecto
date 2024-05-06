import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import BarraNavegacion from "./componentes/BarraNavegacion";
import PaginaError from "./paginas/Basicos/PaginaError"
import UsuariosRegistrados from "./paginas/Administrador/UsuariosRegistrados";
import Ordenes from "./paginas/Administrador/Ordenes";
import Principal from "./paginas/Principal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />
  },
  {
    path: "/Administrador/UsuariosRegistrados",
    element: <UsuariosRegistrados />,
  },
  {
    path: "/Administrador/Ordenes",
    element: <Ordenes />,
  },
  {
    path: "*",
    element: <PaginaError />,
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
