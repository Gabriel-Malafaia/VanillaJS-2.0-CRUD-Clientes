import { Api } from "./api.js"
const formRegistration = document.querySelector("#form__registration")

formRegistration.addEventListener("submit", async (event) => {
    event.preventDefault()
    const objectResult = await Api.createObjectForm(formRegistration)
    alert("Usuário cadastrado com sucesso!!")
    return Api.cadastrarCliente(JSON.stringify(objectResult))
})
