import {Nav_all} from "./1C_nav_all.js"
import {Header} from "./1C_header.js"
import { Footer } from "./1C_footer.js"
import { Form, Inputs, Select, Options } from "./1C_inputs.js"
import { A_home } from "./1C_A_home.js"

export const Produ = ()=> {
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
                    ${Form({
                        contenido : ()=>{
                            return `
                                
                                <h2>Ingreso de Cliente</h2>
                                <div class="row justify-content-center">
                                    <div class="col-6">${Inputs({type : "number", name : "codigo", pla : "Codigo-Del-Producto"})}</div>
                                    <div class="col-6">${Inputs({type : "file", name : "img", pla : "Imagen"})}</div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-6">${Inputs({type : "text", name : "name", pla : "Nombre"})}</div>
                                    <div class="col-6">${Inputs({type : "number", name : "cantidad", pla : "Cantidad"})}</div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-6">${Inputs({type : "number", name : "precio", pla : "Precio"})}</div>
                                </div>
                            `
                        },
                        url : "#/clien/vist",
                        textBtn : "Agregar"
                    })}
                    </div>
            </div>
        </div>
        ${Footer()}
    `
}