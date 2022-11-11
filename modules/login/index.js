let body = document.querySelector("body")
let header_app = document.querySelector(".header_app")
let main_app = document.querySelector(".main_app")
let footer_app = document.querySelector(".footer_app")

export async function renderHeader(type) {

    if ( type == 'login' ) {

        let h1_title = document.createElement("h1")
        h1_title.classList.add("h1_title")
        h1_title.innerText = "Login - module"
        header_app.appendChild(h1_title)

    } 

}

export async function renderMain(type) {

    if ( type == 'login' ) {

        let div_login = document.createElement("div")

            let input_username = document.createElement("input")
            let input_password = document.createElement("input")
            let button_submit = document.createElement("button")
            let button_register = document.createElement("button")

            input_username.classList.add("input_username")
            input_password.classList.add("input_password")
            button_submit.classList.add("button_submit")
            button_register.classList.add("button_register")

            input_username.placeholder = "your username here"
            input_password.placeholder = "your password here"
            button_submit.innerText = "Submit"
            button_register.innerText = "Register"
            
            input_password.type = "password"

            button_submit.addEventListener("click", async () => {

                let inserted_data = {
                    username: input_username.value,
                    password: input_password.value
                }

                let try_login = await div_login(inserted_data)

                if (try_login == 'success') {
                    renderLoggedInPage('login_fail')
                } else {
                    renderModal('login_fail')
                }

            })





    }

}

export async function renderModal(type) {



}

renderHeader('login')
renderMain('login')