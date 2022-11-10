let body = document.querySelector("body")
let header_app = document.querySelector(".header_app")
let main_app = document.querySelector(".main_app")
let footer_app = document.querySelector(".footer_app")

export async function renderHeader(type) {

    if ( type == 'first' ) {

        let h1_title = document.createElement("h1")
        h1_title.classList.add("h1_title")
        h1_title.innerText = "Modules for developers."
        header_app.appendChild(h1_title)

    } 

}

renderHeader('first')