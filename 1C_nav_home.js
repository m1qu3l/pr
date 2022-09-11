import {A_home} from "./1C_A_home.js"
import {Header} from "./1C_header.js"
import {Footer} from "./1C_footer.js"

export const Nav_home = ()=>{
    return `
    <link rel="stylesheet" href="2nav_home.css">
        ${Header({texto: "Elige La funcion"})}
        <div class="container mb-5 anienco">
            <div class="conte_nav">
                ${A_home({url_img : "Servicios.svg", texto : "Servicios", url : "#/servi"})}
                ${A_home({url_img : "Clientes.svg", texto : "Clientes", url : "#/clien"})}
            </div>
            <div class="conte_nav">
                ${A_home({url_img : "Productos.svg", texto : "Productos", url : "#/produ"})}
                ${A_home({url_img : "Ventas.svg", texto : "Ventas", url : "#/vent"})}
            </div>
            <div class="conte_nav">
                ${A_home({url_img : "user.svg", texto : "Salir", url : ""})}
            </div>
        </div>
        ${Footer()}
    `
}