import {Api} from "./api.js"

const editClients = document.getElementById("select-user")
const submitEdit = document.getElementById("form-edit")
const submitSelect = document.getElementById("form-select")

Api.ClientList(editClients)
submitSelect.addEventListener("submit", async (event) => {
    const idClient = editClients.value
    event.preventDefault()
    const Client   = await Api.listarClientes(idClient)
    const {nome,email,idade,cpf,sexo} = Client
    const {cep,rua,numero,bairro,cidade,estado} = Client.endereco
    
    submitEdit['nome'].value   = nome
    submitEdit['email'].value  = email
    submitEdit['idade'].value  = idade
    submitEdit['cpf'].value    = cpf
    submitEdit['sexo'].value   = sexo
    submitEdit['cep'].value    = cep
    submitEdit['rua'].value    = rua
    submitEdit['numero'].value = numero
    submitEdit['bairro'].value = bairro
    submitEdit['cidade'].value = cidade
    submitEdit['estado'].value = estado
})


submitEdit.addEventListener("submit", async (event) => {
    event.preventDefault()
    const idCliente = editClients.value
    const listarObj = await Api.createObjectForm(submitEdit)
    await Api.editarCliente(idCliente, JSON.stringify(listarObj))
    alert("Cliente editado com sucesso!!")
    window.location.reload()
})


