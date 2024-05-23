import Menu from "../../../componentes/Usuario/Menu.jsx"
import TablaOrdenes from "../../../componentes/Usuario/Tabla/TablaOrdenes.jsx"
import PaginacionUI from "../../../componentes/PaginacionUI.jsx"
import Footer from "../../../componentes/Footer.jsx"
import HCerrarSesion from "../../../componentes/Header/HCerrarSesion.jsx"

function Main() {  
  return(
    <>
      <HCerrarSesion/>
      <div className="flex h-[41.125rem] bg-slate-100">
        <Menu />
        <div className="flex flex-col flex-grow mt-8 mb-20 mx-2 rounded-md bg-slate-300">
          <TablaOrdenes /> 
          <PaginacionUI />   
        </div>                 
      </div>  
      <Footer />
    </>
  )
}
export default Main