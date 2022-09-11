import {Nav_all} from "./1C_nav_all.js"
import {Header} from "./1C_header.js"
import { Footer } from "./1C_footer.js"
import { A_home } from "./1C_A_home.js"
import { Tabla, tr, td } from "./1C_tablas.js"


export const Clien_vist = ()=> {
    return `
        ${Header({texto: "Cliente"})}
        ${Nav_all({ClassName : "Nav_a_activo", num : 0})}
        <div class="container">
        <nav class="sub_nav">
            ${A_home({url_img : "login.svg", texto : "Ingreso de cliente", url : "#/clien"})}
            ${A_home({url_img : "Clientes.svg", texto : "Ingreso de cliente", url : "#/clien/vist"})}
        </nav>
            <div class="row">
                <div class="col">
                    <h2 class="text-center mb-3">Vista de Cliente</h2>
                        ${Tabla({
                            t_head : ()=> `
                                <td scope="col">Cedula</td>
                                <td scope="col">Nombre</td>
                                <td scope="col">Correo</td>
                                <td scope="col">Celular</td>
                                <td scope="col">Genero</td>
                                <td scope="col">Actualizar</td>
                                <td scope="col">Eliminar</td>
                            `
                            , t_body : ()=>`
                                ${tr({regist : ()=>` 
                                    ${td({texto : "12345"})}
                                    ${td({texto : "Miquel"})}
                                    ${td({texto : "jdsgv@gmail.com"})}
                                    ${td({texto : "12345"})}
                                    ${td({texto : "Hombre"})}
                                    ${td({texto : "<img src='update.svg'>"})}
                                    ${td({texto : "<img src='delete.svg'>"})}
                                    
                                `})}
                                ${tr({regist : ()=>` 
                                    ${td({texto : "67890"})}
                                    ${td({texto : "Leopoldo"})}
                                    ${td({texto : "jdhfpi@gmail.com"})}
                                    ${td({texto : "67890"})}
                                    ${td({texto : "Hombre"})}
                                    ${td({texto : "<img src='update.svg'>"})}
                                    ${td({texto : "<img src='delete.svg'>"})}
                                `})}
                                ${tr({regist : ()=>` 
                                    ${td({texto : "2468"})}
                                    ${td({texto : "Luisa"})}
                                    ${td({texto : "dfgd@gmail.com"})}
                                    ${td({texto : "2468"})}
                                    ${td({texto : "Mujer"})}
                                    ${td({texto : "<img src='update.svg'>"})}
                                    ${td({texto : "<img src='delete.svg'>"})}
                                `})}
                                ${tr({regist : ()=>` 
                                    ${td({texto : "97531"})}
                                    ${td({texto : "Valeria"})}
                                    ${td({texto : "fghhj@gmail.com"})}
                                    ${td({texto : "97531"})}
                                    ${td({texto : "Mujer"})}
                                    ${td({texto : "<img src='update.svg'>"})}
                                    ${td({texto : "<img src='delete.svg'>"})}
                                `})}
                            `
                        })}
                    </div>
            </div>
        </div>
        ${Footer()}
    `
}

