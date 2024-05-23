import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BarraCuenta from '../BarraCuenta';
import Menu_SVG from '../../svg/Menu_SVG'

function BotonMenuPagina() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const refMenu = useRef(null);

    useEffect(() => {
        const cerrarMenu = (event) => {
            if (refMenu.current && !refMenu.current.contains(event.target)) {
                setMenuAbierto(false);
            }
        };
        document.addEventListener("mousedown", cerrarMenu);
        return () => {
            document.removeEventListener("mousedown", cerrarMenu);
        };
    }, []);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };


    return (
        <div className="relative flex justify-center" ref={refMenu}>
            <div>
                <button
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center bg-white  text-gray-900 shadow-md ring-1 ring-gray-300 hover:bg-gray-50"
                >
                    <Menu_SVG width="18px" height="18px" />
                    Menú
                </button>
            </div>
            {menuAbierto && (
                <div
                    className="absolute top-full right-0 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                >
                    <BarraCuenta />
                </div>
            )}
        </div>
    )
}

export default BotonMenuPagina;