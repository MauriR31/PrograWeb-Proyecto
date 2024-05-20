import Footer from "../../../componentes/Footer/Footer";
import Header from "../../../componentes/Header/Header";
import PaginacionAlternativa from "../../../componentes/PaginacionAlternativa";
import ListadoOrdenes from "../../../componentes/Usuario/ListadoOrdenes";
import Menu from "../../../componentes/Usuario/Menu";
import "./MainUsuario.css"

function MainUsuario() {  
  return(
    <>
      <Header />      
      <div id="user">
        <Menu />
        <div id="ordenesUser">
          <ListadoOrdenes /> 
          <PaginacionAlternativa />   
        </div>                 
      </div>     
        
      <Footer />
    </>
  )
}
export default MainUsuario