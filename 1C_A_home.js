export const A_home =  ({url_img, texto, url, ClassName = ""}) => {
    return `
        <a href="${url}" class="${ClassName}">
            <img src="${url_img}">
            <p>${texto}</p>
        </a>
    `
}

//<><>