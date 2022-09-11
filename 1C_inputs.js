export const Inputs = ({type, pla, name})=>{
    return `<input class="form-control" type=${type} placeholder=${pla} name=${name}>`
}

export const Options = ({text})=>{
    return `<option value=${text}>${text}</option>`
}

export const Select = ({options})=>{
    return `<select class="form-control">
        ${options}
    </select>`
}
//<>
export const Form = ({contenido, url, textBtn})=>{
    return `
    <link rel="stylesheet" href="2login.css">
    <div class="login" style="min-height: auto !important;">
        <form>
            ${contenido()}     
            <button class="btn btn-outline-dark"><a href="${url}">${textBtn}</a></button>
        <form>
    </div>
    `
} 