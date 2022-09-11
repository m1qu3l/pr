import {Nav_all} from "./1C_nav_all.js"
import {Header} from "./1C_header.js"
import { Footer } from "./1C_footer.js"
import { Form, Inputs, Select, Options } from "./1C_inputs.js"
import { A_home } from "./1C_A_home.js"


export const Clien = ()=> {
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
                    ${Form({
                        contenido : ()=>{
                            return `
                                
                                <h2>Ingreso de Cliente</h2>
                                <div class="row justify-content-center">
                                    <div class="col-6">${Inputs({type : "number", name : "cedula", pla : "Cedula"})}</div>
                                    <div class="col-6">${Inputs({type : "text", name : "nombre", pla : "Nombre"})}</div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-6">${Inputs({type : "email", name : "correo", pla : "Correo"})}</div>
                                    <div class="col-6">${Inputs({type : "number", name : "cel", pla : "Celular"})}</div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-6">${Select({options : `
                                        ${Options({text : "Hombre"})}
                                        ${Options({text : "Mujer"})}
                                        ${Options({text : "Otres"})}
                                    `})}</div>
                                </div>
                            `
                        },
                        url : "#/produ/vist",
                        textBtn : "Agregar"
                    })}
                    </div>
            </div>
        </div>
        ${Footer()}
    `
}

