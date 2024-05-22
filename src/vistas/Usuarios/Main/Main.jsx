import Menu from "../../../componentes/Usuario/Menu.jsx"
import TablaOrdenes from "../../../componentes/Usuario/Tabla/TablaOrdenes.jsx"
import PaginacionUI from "../../../componentes/PaginacionUI.jsx"
import Footer from "../../../componentes/Footer.jsx"

function Main() {  
  return(
    <>
      <div className="flex h-[35rem] bg-slate-100">
        <Menu />
        <div className="flex flex-col flex-grow mt-8 mr-2 rounded-md h-[26.875rem] bg-slate-300">
          <TablaOrdenes /> 
          <PaginacionUI />   
        </div>                 
      </div>  
      <Footer />
    </>
  )
}
export default Main