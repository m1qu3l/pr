import { Login } from "./1C_login.js"
import { Nav_home } from "./1C_nav_home.js"
import { Servi } from "./1C_Servi.js"
import { Clien } from "./1C_Clien.js"
import { Produ } from "./1C_Produ.js"
import { Vent } from "./1C_Vent.js"
import { Clien_vist } from "./1C_Clien_vist.js"
import { Produ_vist } from "./1C_Produ_vist.js"
export const codiciones = () => {
    if (location.hash === "") {
        return Login()
    }else if (location.hash === "#/") {
        return Nav_home()
    } else if (location.hash === "#/servi") {
        return Servi()
    } else if (location.hash === "#/clien"){
        return Clien()
    } else if (location.hash === "#/clien/vist"){
        return Clien_vist()
    } else if (location.hash === "#/produ"){
        return Produ()
    } else if (location.hash === "#/produ/vist"){
        return Produ_vist()
    } else if (location.hash === "#/vent"){
        return Vent()
    }
}