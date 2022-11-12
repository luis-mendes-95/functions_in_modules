let body = document.querySelector("body")
let header_app = document.querySelector(".header_app")
let main_app = document.querySelector(".main_app")
let footer_app = document.querySelector(".footer_app")

export async function renderHeader(type) {

    if ( type == 'login' ) {

        let button_back = document.createElement("button")
        button_back.classList.add("button_back")
        button_back.innerText = "Voltar"
        button_back.addEventListener("click", () => {
            window.location.assign("/index.html")
        })
        
        header_app.appendChild(button_back)

        let h1_title = document.createElement("h1")
        h1_title.classList.add("h1_title")
        h1_title.innerText = "Login - module"
        header_app.appendChild(h1_title)

        let div_login = document.createElement("div")
    
            let input_username = document.createElement("input")
            let input_password = document.createElement("input")
            let button_submit = document.createElement("button")
            let button_register = document.createElement("button")

        div_login.classList.add("div_login")
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

                if (input_username.value == "" ||
                    input_password.value == "") {
                        renderModal('Fill all fields to login!')
                    } else {

                        let inserted_data = {
                            username: input_username.value,
                            password: input_password.value
                        }
        
                        let try_login = await api('login', inserted_data)
        
                        if (try_login == 'success') {
                            renderModal('Login successful! You will be redirected in a few seconds.')
                        } else {
                            renderModal('Something went wrong! Login failed!')
                        }

                    }

            })
            
            button_register.addEventListener("click", async () => {
                renderMain('register')
            })

            header_app.appendChild(div_login)
                div_login.append(input_username,input_password,button_submit,button_register)

    }

}

export async function renderMain(type) {

    if ( type == 'register' ) {

        main_app.innerHTML = ""

        let div_register = document.createElement("div")
    
            let input_first_name = document.createElement("input")
            let input_last_name = document.createElement("input")
            let input_email = document.createElement("input")
            let input_username = document.createElement("input")
            let input_password = document.createElement("input")
            let input_password_again = document.createElement("input")
            let button_submit = document.createElement("button")
            let button_close = document.createElement("button")

        div_register.classList.add("div_register")
            input_first_name.classList.add("input_first_name")
            input_last_name.classList.add("input_last_name")
            input_email.classList.add("input_email")
            input_username.classList.add("input_username")
            input_password.classList.add("input_password")
            input_password_again.classList.add("input_password_again")
            button_submit.classList.add("button_submit")
            button_close.classList.add("button_close")

            input_first_name.placeholder = "insert your first name"
            input_last_name.placeholder = "insert your last name"
            input_email.placeholder = "insert your e-mail here"
            input_username.placeholder = "your username here"
            input_password.placeholder = "your password here"
            input_password_again.placeholder = "insert your password again"
            button_submit.innerText = "Submit"
            button_close.innerText = "Close"
            
            input_password.type = "password"
            input_password_again.type = "password"

            button_submit.addEventListener("click", async () => {

                if (input_first_name.value == "" ||
                    input_last_name.value == "" ||
                    input_email.value == "" ||
                    input_username.value == "" ||
                    input_password.value == "") {

                        renderModal("All fields are mandatory!")

                    } else {

                        if ( input_password.value != input_password_again.value) {

                            renderModal("Password fields do not match!")

                        } else {

                            let inserted_data = {
                                //create a function that returns a new ID
                                first_name: input_first_name.value,
                                last_name: input_last_name.value,
                                email: input_email.value,
                                username: input_username.value,
                                password: input_password.value
                            }
            
                            let try_register = await api('register', inserted_data)
            
                            if (try_register == 'success') {
                                renderModal('Register successful')
                            } else {
                                renderModal('Something went wrong! Register failed!')
                            }

                        }

                    }

            })

            button_close.addEventListener("click", async () => {

                main_app.innerHTML = ""

            })

            main_app.appendChild(div_register)
                div_register.append(input_first_name,input_last_name,input_email,input_username,input_password,input_password_again,button_submit,button_close)

    }

}

export async function renderModal(content) {

        let div_background_modal = document.createElement("div")
            let div_modal_info = document.createElement("div")
                let p_modal_content = document.createElement("p")
                let button_close = document.createElement("button")

        div_background_modal.classList.add("div_background_modal")
            div_modal_info.classList.add("div_modal_info")
                p_modal_content.classList.add("p_modal_content")
                button_close.classList.add("button_close")

                p_modal_content.innerText = content
                button_close.innerText = "close"

        body.appendChild(div_background_modal)
            div_background_modal.appendChild(div_modal_info)
                div_modal_info.append(p_modal_content,button_close)

                button_close.addEventListener("click", () => {
                    body.removeChild(div_background_modal)
                })

}

export async function api(type, content) {

    let api_key = '538df6f0-9e75-49b8-b0dd-85651389832a'

    if ( type == 'login') {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
                
        let requestOptions = {
          method: 'GET',
          headers: headers,
        }
    
        let data_from_api = await fetch(`https://getpantry.cloud/apiv1/pantry/${api_key}/basket/users`,
         requestOptions
         ).then((res) => {
            return res.json()
         }).then((res) => {
            return res
         }).catch((err) => {
            return err
         })

         let situation = ""

         data_from_api.users.forEach((user) => {

          if (user.username == content.username && user.password == content.password) {
            situation = "success"
          } 

        })

        return situation

    }

    if ( type == 'register') {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
                
        let requestOptions = {
          method: 'GET',
          headers: headers,
        }
    
        let data_from_api = await fetch(`https://getpantry.cloud/apiv1/pantry/${api_key}/basket/users`,
         requestOptions
         ).then((res) => {
            return res.json()
         }).then((res) => {
            return res
         }).catch((err) => {
            return err
         })

         let situation = ""

         data_from_api.users.forEach((user) => {

          if (user.username == content.username && user.password == content.password) {
            situation = "success"
          } 

        })

        return situation

    }

}

export async function renderFooter(type) {

    if (type == 'first') {

        let span_footer = document.createElement("span")
        span_footer.classList.add("span_footer")
        span_footer.innerText = "This module communicates with an API to register and validate login"

        footer_app.appendChild(span_footer)

    }

}

renderHeader('login')
renderMain('login')
renderFooter('first')