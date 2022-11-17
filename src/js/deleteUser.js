import { Api } from "./api.js"
const listClient   = document.getElementById("client-list")
const submitDelete = document.getElementById("form-delete")

Api.ClientList(listClient)
submitDelete.addEventListener("submit", async (event) => {
    event.preventDefault()
    await Api.deletarCliente(listClient.value)
    alert("Usuário Deletado com sucesso!!")
    window.location.reload()
})

