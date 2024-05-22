import { useNavigate } from "react-router-dom"
// Menu en la parte izquierda de la pagina main del usuario
function Menu() {
  //UseNavigate para manejar entre direcciones
  const navigate = useNavigate()
  function handleClickRecently () {
    navigate('/usuarios/main')
  }
  function handleClickRegister () {
    navigate('/Usuario/DatosRegistro')
  }
  function handleClickChangePassword () {
    navigate('/Usuario/CambiarPassword')
  }
  return(
    <>
      <aside className=" bg-slate-400 rounded my-8 mx-2 w-52">
        <h5 className="font-bold ml-4 mt-6 m-4 text-2xl">Mi Cuenta</h5>
        <ol className="flex flex-col items-center">
          <li onClick={handleClickRecently}
           className=" mb-2 text-lg hover:text-white"><button>Ordenes Recientes</button></li>
          <li onClick={handleClickRegister}
          className=" mb-2 text-lg hover:text-white"><button>Datos de Registro</button></li>
          <li onClick={handleClickChangePassword}
          className="text-lg  hover:text-white"><button>Cambiar Password</button></li>
        </ol>
      </aside>
    </>
  )
}
export default Menu