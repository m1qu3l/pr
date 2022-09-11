import {Nav_all} from "./1C_nav_all.js"
import {Header} from "./1C_header.js"
import { Footer } from "./1C_footer.js"
import { A_home } from "./1C_A_home.js"
import { Tabla, tr, td } from "./1C_tablas.js"


export const Produ_vist = ()=> {
    return `
        ${Header({texto: "Productos"})}
        ${Nav_all({ClassName : "Nav_a_activo", num : 0})}
        <div class="container">
        <nav class="sub_nav">
            ${A_home({url_img : "login.svg", texto : "Ingreso de producto", url : "#/produ"})}
            ${A_home({url_img : "Clientes.svg", texto : "Consulta de producto", url : "#/produ/vist"})}
        </nav>
        <div class="row">
        <div class="col">
            <h2 class="text-center mb-3">Vista de Cliente</h2>
                ${Tabla({
                    t_head : ()=> `
                        <td scope="col">Codigo-Del-Producto</td>
                        <td scope="col">Imagen</td>
                        <td scope="col">Nombre</td>
                        <td scope="col">Cantidad</td>
                        <td scope="col">Precio</td>
                        <td scope="col">Actualizar</td>
                        <td scope="col">Eliminar</td>
                        <td scope="col">Informe</td>
                    `
                    , t_body : ()=>`
                        ${tr({regist : ()=>` 
                            ${td({texto : "12345"})}
                            ${td({texto : "<img src='bicycle.svg'"})}
                            ${td({texto : "bicicletas de montaña"})}
                            ${td({texto : "1"})}
                            ${td({texto : "20"})}
                            ${td({texto : "<img src='update.svg'>"})}
                            ${td({texto : "<img src='delete.svg'>"})}
                            ${td({texto : "<img class='print' src='print.svg'>"})}
                            
                        `})}
                        ${tr({regist : ()=>` 
                            ${td({texto : "67890"})}
                            ${td({texto : "<img src='bicycle.svg'"})}
                            ${td({texto : "bicicleta electrica"})}
                            ${td({texto : "3"})}
                            ${td({texto : "30"})}
                            ${td({texto : "<img src='update.svg'>"})}
                            ${td({texto : "<img src='delete.svg'>"})}
                            ${td({texto : "<img class='print' src='print.svg'>"})}
                        `})}
                        ${tr({regist : ()=>` 
                            ${td({texto : "2468"})}
                            ${td({texto : "<img src='bicycle.svg'"})}
                            ${td({texto : "bicicleta standard"})}
                            ${td({texto : "5"})}
                            ${td({texto : "40"})}
                            ${td({texto : "<img src='update.svg'>"})}
                            ${td({texto : "<img src='delete.svg'>"})}
                            ${td({texto : "<img class='print' src='print.svg'>"})}
                        `})}
                    `
                })}
            </div>
        </div>
        </div>
        ${Footer()}
    `
}