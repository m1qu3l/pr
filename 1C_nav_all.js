import {A_home} from "./1C_A_home.js"
export const Nav_all = ({ClassName}) => {
    return `
    <link rel="stylesheet" href="2nav_all.css">
    <div class="Nav_all">
        ${A_home({url_img : "Servicios.svg", texto : "Servicios", url : "#/servi"})}
        ${A_home({url_img : "Clientes.svg", texto : "Clientes", url : "#/clien"})}
        ${A_home({url_img : "Productos.svg", texto : "Productos", url : "#/produ"})}
        ${A_home({url_img : "Ventas.svg", texto : "Ventas", url : "#/vent"})}
        ${A_home({url_img: "user.svg", texto : "salir", url : "#/"})}
    </div>
    `
}