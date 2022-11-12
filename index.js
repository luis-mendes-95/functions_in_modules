let body = document.querySelector("body")
let header_app = document.querySelector(".header_app")
let main_app = document.querySelector(".main_app")
let footer_app = document.querySelector(".footer_app")

let modules = [
    "login"
]

export async function renderHeader(type) {

    if ( type == 'first' ) {

        let h1_title = document.createElement("h1")
        h1_title.classList.add("h1_title")
        h1_title.innerText = "Modules for developers."
        header_app.appendChild(h1_title)

    } 

}

export async function renderMain(type) {

    if ( type == 'modules' ) {

        let ul_modules = document.createElement("ul")

            modules.forEach((module) => {

                let li_module = document.createElement("li")

                li_module.classList.add("li_module")

                li_module.innerText = module

                li_module.addEventListener("click", () => {
                    window.location.assign("./modules/login/index.html")
                })
                
                ul_modules.appendChild(li_module)

            })

            main_app.appendChild(ul_modules)

    }

}

export async function renderFooter(type) {

    if (type == 'first') {

        let span_footer = document.createElement("span")
        span_footer.classList.add("span_footer")
        span_footer.innerText = "Modules ready for use. Copy, paste and customize as you need"

        footer_app.appendChild(span_footer)

    }

}

renderHeader('first')
renderMain('modules')
renderFooter('first')