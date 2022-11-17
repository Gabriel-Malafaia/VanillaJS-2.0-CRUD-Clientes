import { Api } from "./api.js"
const containerClient  = document.querySelector(".container")

async function listClient() {
    const dataClient = await Api.listarClientes()
    
    dataClient.forEach(client => {
        const {nome,email,idade,cpf,sexo} = client
        const {cep,estado,cidade,bairro,rua,numero} = client.endereco

        const liData = document.createElement("li")
        liData.classList.add("card")

        const h2Card  = document.createElement("h2")
        h2Card.innerText = nome

        const divData = document.createElement("div")
        const h3Data  = document.createElement("h3")
        h3Data.innerText = 'Dados Pessoais:'
        const pDataEmail = document.createElement("p")
        pDataEmail.innerText = `Email: ${email}`
        const pDataIdade = document.createElement("p")
        pDataIdade.innerText = `Idade: ${idade}`
        const pDataCpf = document.createElement("p")
        pDataCpf.innerText = `Cpf: ${cpf}`
        const pDataSexo = document.createElement("p")
        pDataSexo.innerText = `Sexo: ${sexo}`
        divData.append(h3Data,pDataEmail,pDataIdade,pDataCpf,pDataSexo)

        const divAdress = document.createElement("div")
        const h3Adress  = document.createElement("h3")
        h3Adress.innerText = 'Endereço:'
        const pAdressCep   = document.createElement("p")
        pAdressCep.innerText = `Cep: ${cep}`
        const pAdressEstado  = document.createElement("p")
        pAdressEstado.innerText = `Estado: ${estado}`
        const pAdressCidade  = document.createElement("p")
        pAdressCidade.innerText = `Cidade: ${cidade}`
        const pAdressBairro  = document.createElement("p")
        pAdressBairro.innerText = `Bairro: ${bairro}`
        const pAdressRua   = document.createElement("p")
        pAdressRua.innerText = `Rua: ${rua}`
        const pAdressNum   = document.createElement("p")
        pAdressNum.innerText = `Numero: ${numero}`

        divAdress.append(h3Adress,pAdressCep,pAdressEstado,pAdressCidade,pAdressBairro,pAdressRua,pAdressNum)

        liData.append(h2Card, divData, divAdress)

        containerClient.append(liData)
    }) 
}

listClient()







 


