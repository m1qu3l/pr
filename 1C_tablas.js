export const Tabla = ({t_head, t_body})=>{
    return `
    <link rel="stylesheet" href="2table.css">
    <table class="table">
        <thead class="table-dark">
            <tr>
                ${t_head()}
            </tr>
        </thead>
        <tbody>
            ${t_body()}
        </tbody>
        
    </table>`
}

export const tr = ({regist})=>{
    return `
        <tr>
            ${regist()}
        </tr>
    `
}

export const td = ({texto})=>{
    return `
        <td>
            ${texto}
        </td>
    `
}