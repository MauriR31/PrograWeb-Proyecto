import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import BarraCuenta from "../../../componentes/BarraCuenta";
import PaginaError from "../../../componentes/PaginaError";

function Detalle() {
    const { id } = useParams();
    const [usuario, setUsuario] = useState(null);

    const ordenes = [
        { id: 6, user: 104, fechaOrden: '2024-05-16', total: 'S/104.10', productos: 1, estado: 'Pendiente' },
        { id: 9,user: 104, fechaOrden: '2024-05-22', total: 'S/63.26', productos: 2, estado: 'Entregado' }, 
        { id: 2, user: 103, fechaOrden: '2024-05-09', total: 'S/61.34', productos: 3, estado: 'Pendiente' }, 
        { id: 16, user: 2, fechaOrden: '2024-05-15', total: 'S/139.01', productos: 4, estado: 'Pendiente' }, 
        { id: 18, user: 2, fechaOrden: '2024-05-21', total: 'S/172.71', productos: 5, estado: 'Por Enviar' }, 
        { id: 5, user: 2, fechaOrden: '2024-05-18', total: 'S/145.45', productos: 6, estado: 'Entregado' }, 
        { id: 20, user: 103, fechaOrden: '2024-05-10', total: 'S/158.22', productos: 7, estado: 'Entregado' }, 
        { id: 4, user: 2, fechaOrden: '2024-05-08', total: 'S/28.76', productos: 8, estado: 'Pendiente' }, 
        { id: 2, user: 104, fechaOrden: '2024-05-17', total: 'S/123.96', productos: 9, estado: 'Por Enviar' }, 
        { id: 10, user: 1, fechaOrden: '2024-05-20', total: 'S/199.64', productos: 10, estado: 'Por Enviar' }, 
        { id: 12, user: 103, fechaOrden: '2024-05-16', total: 'S/47.65', productos: 11, estado: 'Por Enviar' }, 
        { id: 20, user: 2, fechaOrden: '2024-05-15', total: 'S/40.12', productos: 12, estado: 'Por Enviar' }, 
        { id: 7, user: 103, fechaOrden: '2024-05-21', total: 'S/148.99', productos: 13, estado: 'Por Enviar' }, 
        { id: 9, user: 2, fechaOrden: '2024-05-17', total: 'S/80.19', productos: 14, estado: 'Por Enviar' }, 
        { id: 5, user: 103, fechaOrden: '2024-05-16', total: 'S/127.47', productos: 15, estado: 'Entregado' }, 
        { id: 8, user: 2, fechaOrden: '2024-05-09', total: 'S/146.46', productos: 16, estado: 'Pendiente' }, 
        { id: 11, user: 2, fechaOrden: '2024-05-15', total: 'S/29.23', productos: 17, estado: 'Pendiente' }, 
        { id: 17, user: 104, fechaOrden: '2024-05-13', total: 'S/44.11', productos: 18, estado: 'Entregado' }, 
        { id: 11, user: 103, fechaOrden: '2024-05-21', total: 'S/162.99', productos: 19, estado: 'Por Enviar' }, 
        { id: 11, user: 104, fechaOrden: '2024-05-22', total: 'S/57.38', productos: 20, estado: 'Entregado' }, 
        { id: 10, user: 104, fechaOrden: '2024-05-18', total: 'S/160.18', productos: 21, estado: 'Entregado' }, 
        { id: 15, user: 103, fechaOrden: '2024-05-14', total: 'S/71.31', productos: 22, estado: 'Pendiente' }, 
        { id: 5, user: 2, fechaOrden: '2024-05-18', total: 'S/173.87', productos: 23, estado: 'Por Enviar' }, 
        { id: 8, user: 2, fechaOrden: '2024-05-17', total: 'S/33.66', productos: 24, estado: 'Pendiente' }, 
        { id: 12, user: 1, fechaOrden: '2024-05-14', total: 'S/13.30', productos: 25, estado: 'Entregado' }, 
        { id: 16, user: 104, fechaOrden: '2024-05-13', total: 'S/131.93', productos: 26, estado: 'Por Enviar' }, 
        { id: 3, user: 1, fechaOrden: '2024-05-21', total: 'S/173.30', productos: 27, estado: 'Pendiente' }, 
        { id: 6, user: 2, fechaOrden: '2024-05-09', total: 'S/146.17', productos: 28, estado: 'Por Enviar' }, 
        { id: 16, user: 2, fechaOrden: '2024-05-15', total: 'S/151.13', productos: 29, estado: 'Por Enviar' }, 
        { id: 13, user: 2, fechaOrden: '2024-05-13', total: 'S/62.77', productos: 30, estado: 'Por Enviar' }, 
        { id: 6, user: 104, fechaOrden: '2024-05-14', total: 'S/35.63', productos: 31, estado: 'Pendiente' }, 
        { id: 17, user: 1, fechaOrden: '2024-05-14', total: 'S/130.41', productos: 32, estado: 'Por Enviar' }, 
        { id: 9, user: 1, fechaOrden: '2024-05-14', total: 'S/184.52', productos: 33, estado: 'Por Enviar' }, 
        { id: 20, user: 2, fechaOrden: '2024-05-22', total: 'S/85.52', productos: 34, estado: 'Pendiente' }, 
        { id: 1, user: 2, fechaOrden: '2024-05-13', total: 'S/23.83', productos: 35, estado: 'Entregado' }, 
        { id: 11, user: 2, fechaOrden: '2024-05-20', total: 'S/138.55', productos: 36, estado: 'Entregado' }, 
        { id: 2, user: 2, fechaOrden: '2024-05-20', total: 'S/121.91', productos: 37, estado: 'Pendiente' }, 
        { id: 6, user: 1, fechaOrden: '2024-05-22', total: 'S/34.10', productos: 38, estado: 'Por Enviar' }, 
        { id: 9, user: 104, fechaOrden: '2024-05-15', total: 'S/100.20', productos: 39, estado: 'Por Enviar' }, 
        { id: 8, user: 104, fechaOrden: '2024-05-14', total: 'S/80.63', productos: 40, estado: 'Pendiente' }, 
        { id: 12, user: 1, fechaOrden: '2024-05-17', total: 'S/155.29', productos: 41, estado: 'Pendiente' }, 
        { id: 1, user: 2, fechaOrden: '2024-05-21', total: 'S/50.18', productos: 42, estado: 'Por Enviar' }, 
        { id: 1, user: 103, fechaOrden: '2024-05-22', total: 'S/91.05', productos: 43, estado: 'Entregado' }, 
        { id: 20, user: 1, fechaOrden: '2024-05-18', total: 'S/133.87', productos: 44, estado: 'Pendiente' }, 
        { id: 20, user: 103, fechaOrden: '2024-05-09', total: 'S/34.64', productos: 45, estado: 'Entregado' }, 
        { id: 19, user: 104, fechaOrden: '2024-05-14', total: 'S/112.09', productos: 46, estado: 'Por Enviar' }, 
        { id: 17, user: 2, fechaOrden: '2024-05-19', total: 'S/191.35', productos: 47, estado: 'Por Enviar' }, 
        { id: 13, user: 103, fechaOrden: '2024-05-10', total: 'S/50.60', productos: 48, estado: 'Entregado' }, 
        { id: 15, user: 2, fechaOrden: '2024-05-17', total: 'S/104.78', productos: 49, estado: 'Por Enviar' }, 
        { id: 1, user: 103, fechaOrden: '2024-05-18', total: 'S/79.95', productos: 50, estado: 'Por Enviar' }, 
        { id: 14, user: 104, fechaOrden: '2024-05-19', total: 'S/139.07', productos: 51, estado: 'Por Enviar' }, 
        { id: 18, user: 1, fechaOrden: '2024-05-13', total: 'S/69.63', productos: 52, estado: 'Entregado' }, 
        { id: 5, user: 104, fechaOrden: '2024-05-19', total: 'S/35.58', productos: 53, estado: 'Por Enviar' }, 
        { id: 10, user: 1, fechaOrden: '2024-05-16', total: 'S/100.04', productos: 54, estado: 'Por Enviar' }, 
        { id: 6, user: 104, fechaOrden: '2024-05-12', total: 'S/149.93', productos: 55, estado: 'Pendiente' }, 
        { id: 4, user: 1, fechaOrden: '2024-05-10', total: 'S/57.37', productos: 56, estado: 'Por Enviar' }, 
        { id: 5, user: 1, fechaOrden: '2024-05-11', total: 'S/83.98', productos: 57, estado: 'Entregado' }, 
        { id: 11, user: 103, fechaOrden: '2024-05-17', total: 'S/101.61', productos: 58, estado: 'Pendiente' }, 
        { id: 11, user: 103, fechaOrden: '2024-05-21', total: 'S/190.01', productos: 59, estado: 'Entregado' }, 
        { id: 17, user: 104, fechaOrden: '2024-05-11', total: 'S/162.22', productos: 60, estado: 'Pendiente' }, 
        { id: 16, user: 1, fechaOrden: '2024-05-20', total: 'S/94.45', productos: 61, estado: 'Pendiente' }, 
        { id: 5, user: 1, fechaOrden: '2024-05-20', total: 'S/137.25', productos: 62, estado: 'Pendiente' }, 
        { id: 12, user: 104, fechaOrden: '2024-05-08', total: 'S/193.68', productos: 63, estado: 'Pendiente' }, 
        { id: 19, user: 103, fechaOrden: '2024-05-16', total: 'S/164.63', productos: 64, estado: 'Pendiente' }, 
        { id: 9, user: 103, fechaOrden: '2024-05-10', total: 'S/99.35', productos: 65, estado: 'Por Enviar' }, 
        { id: 8, user: 103, fechaOrden: '2024-05-15', total: 'S/140.53', productos: 66, estado: 'Por Enviar' }, 
        { id: 15, user: 2, fechaOrden: '2024-05-20', total: 'S/159.44', productos: 67, estado: 'Por Enviar' }, 
        { id: 6, user: 104, fechaOrden: '2024-05-20', total: 'S/44.36', productos: 68, estado: 'Entregado' }, 
        { id: 20, user: 104, fechaOrden: '2024-05-17', total: 'S/123.40', productos: 69, estado: 'Pendiente' }, 
        { id: 8, user: 104, fechaOrden: '2024-05-21', total: 'S/172.52', productos: 70, estado: 'Pendiente' }, 
        { id: 4, user: 1, fechaOrden: '2024-05-09', total: 'S/141.29', productos: 71, estado: 'Pendiente' }, 
        { id: 20, user: 104, fechaOrden: '2024-05-20', total: 'S/18.13', productos: 72, estado: 'Pendiente' }, 
        { id: 10, user: 104, fechaOrden: '2024-05-14', total: 'S/28.22', productos: 73, estado: 'Pendiente' }, 
        { id: 2, user: 103, fechaOrden: '2024-05-15', total: 'S/191.67', productos: 74, estado: 'Por Enviar' }, 
        { id: 6, user: 1, fechaOrden: '2024-05-20', total: 'S/85.06', productos: 75, estado: 'Entregado' }, 
        { id: 1, user: 1, fechaOrden: '2024-05-21', total: 'S/19.74', productos: 76, estado: 'Por Enviar' }, 
        { id: 2, user: 1, fechaOrden: '2024-05-09', total: 'S/113.14', productos: 77, estado: 'Pendiente' }, 
        { id: 6, user: 2, fechaOrden: '2024-05-13', total: 'S/129.60', productos: 78, estado: 'Por Enviar' }, 
        { id: 18, user: 1, fechaOrden: '2024-05-14', total: 'S/72.16', productos: 79, estado: 'Por Enviar' }, 
        { id: 14, user: 2, fechaOrden: '2024-05-14', total: 'S/163.39', productos: 80, estado: 'Por Enviar' }, 
        { id: 20, user: 103, fechaOrden: '2024-05-14', total: 'S/145.36', productos: 81, estado: 'Pendiente' }, 
        { id: 1, user: 1, fechaOrden: '2024-05-12', total: 'S/111.55', productos: 82, estado: 'Por Enviar' }, 
        { id: 15, user: 2, fechaOrden: '2024-05-12', total: 'S/34.96', productos: 83, estado: 'Entregado' }, 
        { id: 11, user: 104, fechaOrden: '2024-05-19', total: 'S/138.51', productos: 84, estado: 'Entregado' }, 
        { id: 1, user: 104, fechaOrden: '2024-05-12', total: 'S/26.69', productos: 85, estado: 'Por Enviar' }, 
        { id: 3, user: 2, fechaOrden: '2024-05-17', total: 'S/189.24', productos: 86, estado: 'Pendiente' }, 
        { id: 12, user: 104, fechaOrden: '2024-05-15', total: 'S/117.40', productos: 87, estado: 'Por Enviar' }, 
        { id: 17, user: 104, fechaOrden: '2024-05-14', total: 'S/117.56', productos: 88, estado: 'Pendiente' }, 
        { id: 5, user: 103, fechaOrden: '2024-05-12', total: 'S/172.97', productos: 89, estado: 'Por Enviar' }, 
        { id: 14, user: 2, fechaOrden: '2024-05-08', total: 'S/52.33', productos: 90, estado: 'Por Enviar' }, 
        { id: 9, user: 103, fechaOrden: '2024-05-17', total: 'S/14.79', productos: 91, estado: 'Entregado' }, 
        { id: 13, user: 1, fechaOrden: '2024-05-21', total: 'S/168.72', productos: 92, estado: 'Por Enviar' }, 
        { id: 10, user: 1, fechaOrden: '2024-05-08', total: 'S/103.43', productos: 93, estado: 'Por Enviar' }, 
        { id: 19, user: 104, fechaOrden: '2024-05-10', total: 'S/170.12', productos: 94, estado: 'Entregado' }, 
        { id: 2, user: 104, fechaOrden: '2024-05-09', total: 'S/189.28', productos: 95, estado: 'Entregado' }, 
        { id: 18, user: 1, fechaOrden: '2024-05-15', total: 'S/50.88', productos: 96, estado: 'Entregado' }, 
        { id: 15, user: 2, fechaOrden: '2024-05-18', total: 'S/18.51', productos: 97, estado: 'Entregado' }, 
        { id: 20, user: 104, fechaOrden: '2024-05-08', total: 'S/199.40', productos: 98, estado: 'Por Enviar' }, 
        { id: 12, user: 1, fechaOrden: '2024-05-09', total: 'S/78.19', productos: 99, estado: 'Entregado' }, 
        {id: 2, user: 104, fechaOrden: '2024-05-09', total: 'S/134.67', productos: 100, estado: 'Entregado'}
    ];

    const usuarios = [
        { id: 1, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 2, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 3, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 4, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 5, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 6, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 7, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 8, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 9, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 10, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 11, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 12, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 13, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 14, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 15, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 16, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 17, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 18, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 19, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 20, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 21, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 22, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 23, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 24, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 25, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 26, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 27, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 28, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 29, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 30, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 31, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 32, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 33, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 34, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 35, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 36, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 37, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 38, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 39, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 40, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 41, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 42, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 43, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 44, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 45, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 46, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 47, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 48, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 49, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 50, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 51, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 52, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 53, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 54, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 55, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 56, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 57, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 58, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 59, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 60, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 61, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 62, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 63, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 64, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 65, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 66, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 67, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 68, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 69, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 70, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 71, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 72, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 73, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 74, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 75, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 76, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 77, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 78, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 79, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 80, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 81, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 82, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 83, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 84, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 85, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 86, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 87, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 88, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 89, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 90, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 91, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 92, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 93, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 94, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 95, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 96, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 97, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 98, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 99, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 100, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
        { id: 101, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 102, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 103, nombre: 'Diego Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        { id: 104, nombre: 'Juan Eustaquio', apellido: 'Rivero Guerrero', correo: 'juan@gmail.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
        // Agrega más usuarios aquí
    ];

    // Esta función podría ser una llamada a una API, una consulta a una base de datos, etc.
    const buscarUsuarioPorId = (id) => {
        // En este caso como trabajamos con datos estaticos tenemos una lista de usuarios
        const usuarioEncontrado = usuarios.find(usuario => usuario.id === parseInt(id));
        return usuarioEncontrado;
    }

    useEffect(() => {
        // Buscar y establecer el usuario basado en el ID de la URL
        const usuarioEncontrado = buscarUsuarioPorId(id);
        setUsuario(usuarioEncontrado);
    }, [id]);

    // Condicionalidad para la existencia del usuario 
    if (!usuario) {
        return <PaginaError />;
    }

    // Filtrar las órdenes del usuario específico
    const ordenesUsuario = ordenes.filter(orden => orden.user === usuario.id);
    
    // Ordenar las órdenes por fecha en orden descendente
    const ordenesOrdenadas = ordenesUsuario.sort((a, b) => new Date(b.fechaOrden) - new Date(a.fechaOrden));
    
    // Tomar las primeras 10 órdenes
    const ultimas10Ordenes = ordenesOrdenadas.slice(0, 10);
    

    return (
        <>  
            <div className="flex">
                <BarraCuenta />
                <main className="flex flex-col w-5/6">
                    <section className="p-4">
                        <p className="text-xl font-bold">Detalle de Usuario Registrado</p>
                    </section>
                    <section className="p-4">
                        <ul className="flex bg-gray-300 p-2">
                            <p className="flex-none w-20">ID: {usuario.id}</p>
                            <p className="flex-auto w-56">Nombre: {usuario.nombre +", "+ usuario.apellido}</p>
                            <p className="flex-auto w-72">Correo: {usuario.correo}</p>
                            <p className="flex-none w-64">Fecha Registro: {usuario.fechaRegistro}</p>
                        </ul>
                    </section>
                    <section className="p-4">
                        <p className="text-xl font-bold">Órdenes recientes</p>
                    </section>
                    <section id="MURAListado" className="p-3.5 text-sm">
                        {/* Cabecera de la lista de usuarios registrados */}
                        <article className="flex bg-gray-300 p-2">
                            <p className="flex-none w-28">ID</p>
                            <p className="flex-auto w-56">Fecha Orden</p>
                            <p className="flex-auto w-56">Total</p>
                            <p className="flex-auto w-96">Productos</p>
                            <p className="flex-none w-28">Estado</p>
                            <p className="flex-none w-20">Acciones</p>
                        </article>
                        {/* Cuerpo de la lista de usuarios registrados */}
                        {ultimas10Ordenes.map((orden) => (
                            <article key={orden.id} className="flex bg-white p-2">
                                <p className="flex-none w-28">{orden.id}</p>
                                <p className="flex-auto w-56">{orden.fechaOrden}</p>
                                <p className="flex-auto w-56">{orden.total}</p>
                                <p className="flex-auto w-96">{orden.productos}</p>
                                <p className="flex-none w-28">{orden.estado}</p>
                                <p className="flex-none w-20">
                                    <Link to={`/Admin/OrdenLog/Detail/${orden.id}`} class="px-2 py-1 bg-blue-500 text-white rounded-md mr-2">Ver</Link>
                                </p>
                                
                            </article>
                        ))}
                    </section>
                </main>
            </div>
        </>
    );
}

export default Detalle;
