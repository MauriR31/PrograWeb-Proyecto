import React from 'react';
import HCompleto from '../../../componentes/Header/HCompleto.jsx';
import Footer from '../../../componentes/Footer.jsx';

import SeccionPrincipal from './SeccionPrincipal.jsx';

function Principal() {
  return (
   <>
    <HCompleto />
    <SeccionPrincipal/>
    <Footer />
    </>
  );
}

export default Principal;
