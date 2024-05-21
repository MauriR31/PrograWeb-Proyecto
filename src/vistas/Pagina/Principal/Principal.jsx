import React from 'react';
import HCompleto from '../../../componentes/Header/HCompleto.jsx';
import Footer from '../../../componentes/Footer.jsx';

import SeccionPrincipal from './SeccionPrincipal.jsx';
import BarraBusqueda from '../../../componentes/BarraBusqueda.jsx';






function Principal() {
  return (
   <>
    <HCompleto />
    <BarraBusqueda/>
    < SeccionPrincipal/>
    <Footer />
    </>
  );
}

export default Principal;
