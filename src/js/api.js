class Api {
    static baseUrl = `https://atividade-api-clientes.herokuapp.com/clientes`

    static headers = {
        "Content-Type": "application/json"
    }

    static async listarClientes(url) {
        let newUrl = ''
        url ? newUrl = `${this.baseUrl}/${url}` : newUrl = this.baseUrl
        const data = await fetch(newUrl)
        const dataResult = data.json()
        return await dataResult
    }

    static async cadastrarCliente(data) {
        const options = {
            method: "POST",
            headers: this.headers,
            body: data
        }
        return await fetch(this.baseUrl, options)
    }

    static async editarCliente(id, data) {
        const urlEdit = `${this.baseUrl}/${id}`
        const options = {
            method: "PATCH",
            headers: this.headers,
            body: data
        }
        return await fetch(urlEdit, options)
    }

    static async deletarCliente(id) {
        const urlDelete = `${this.baseUrl}/${id}`
        const options = {
            method: "DELETE",
            headers: this.headers
        }
        return await fetch(urlDelete, options)
    }

    static async ClientList(place) {
        const data = await Api.listarClientes()
        data.forEach(client => {
            const {id,nome} = client
            const option = document.createElement("option")
            option.value = id
            option.innerText = `${nome}`
            place.appendChild(option)
        })
    }

    static async createObjectForm(place) {
        let dados = {}
        let endereco = {}
        for (let i = 0; i < place.length - 1; i++) {
            let client = place[i]
            if (client.className == "endereco") {
                endereco[`${client.name}`] = client.value
            } else {
                dados[`${client.name}`] = client.value
            }
        }
        return {...dados,endereco}
    }
}

export {Api}