import  {codiciones}  from "./1Router.js"

document.querySelector("#root").innerHTML = codiciones()

window.addEventListener("hashchange", e=>{
    document.querySelector("#root").innerHTML = codiciones()
})
