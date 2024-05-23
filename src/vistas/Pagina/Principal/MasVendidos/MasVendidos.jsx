
import React from 'react';
import HCompleto from '../../../../componentes/Header/HCompleto.jsx';
import Footer from '../../../../componentes/Footer.jsx';
import SeccionMasVendidos from '../MasVendidos/SeccionMasVendidos.jsx'

function MasVendidos() {
  return (
   <>
    <HCompleto />
    < SeccionMasVendidos/>
    <Footer />
    </>
  );
}

export default MasVendidos;
