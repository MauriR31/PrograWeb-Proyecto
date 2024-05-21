import { useNavigate } from "react-router-dom"
// Menu en la parte izquierda de la pagina main del usuario
function Menu() {
  const navigate = useNavigate()
  function handleClickRecently () {
    navigate('/')
  }
  function handleClickRegister () {
    navigate('/')
  }
  function handleClickChangePassword () {
    navigate('/')
  }
  return(
    <>
      <aside className=" bg-slate-400 rounded my-8 mx-2 w-52">
        <h5 className="font-bold ml-4 mt-6 m-4 text-2xl">Mi Cuenta</h5>
        <ol className="flex flex-col items-center">
          <li onClick={handleClickRecently}
           className=" mb-2 text-lg hover:underline hover:text-stone-500">Ordenes Recientes</li>
          <li onClick={handleClickRegister}
          className=" mb-2 text-lg hover:underline hover:text-stone-500">Datos de Registro</li>
          <li onClick={handleClickChangePassword}
          className="text-lg hover:underline  hover:text-stone-500">Cambiar Password</li>
        </ol>
      </aside>
    </>
  )
}
export default Menu