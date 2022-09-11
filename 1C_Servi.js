import {Nav_all} from "./1C_nav_all.js"
import {Header} from "./1C_header.js"
import { Footer } from "./1C_footer.js"

export const Servi = ()=> {
    return `
        ${Header({texto: "Servicios"})}
        ${Nav_all({ClassName : "Nav_a_activo", num : 0})}
        <div class="container">
            <div class="row">
                <div class="col">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur nulla similique rerum necessitatibus beatae delectus nostrum maxime dicta eum ullam ipsa, ducimus fugiat porro iste maiores expedita reiciendis quisquam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut iure repellendus eligendi quod! Harum ab atque mollitia rerum eum aliquid nulla deleniti, aut magni repellendus laborum ipsum neque omnis.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis consequuntur maiores itaque tempora obcaecati laborum ea nam odio dolore, iste voluptates, ab voluptatem temporibus nobis unde harum assumenda, ipsa adipisci.
                    </p>
                </div>
            </div>
        </div>
        ${Footer()}
    `
}