const inputNombre = document.querySelector("#inputNombre")
const inputEmail = document.querySelector("#inputEmail")
const inputTelefono = document.querySelector("#inputTelefono")
const btnEnviar = document.querySelector("button.button")

const almacenarDatos = ()=> {
    debugger
    if (inputNombre.value.trim() !== "") { localStorage.setItem("Nombre", inputNombre.value) }
    if (inputEmail.value.trim() !== "") { localStorage.setItem("Email", inputEmail.value) }
    if (inputTelefono.value.trim() !== "") { localStorage.setItem("Telefono", inputTelefono.value) }
    if (inputTargeta.value.trim() !== "") { localStorage.setItem("targeta", inputTargeta.value) }
}

const recuperarDatos = ()=> {
    if (localStorage.getItem("Nombre")) { inputNombre.value = localStorage.getItem("Nombre") }
    if (localStorage.getItem("Email")) { inputEmail.value = localStorage.getItem("Email") }
    if (localStorage.getItem("Telefono")) { inputTelefono.value = localStorage.getItem("Telefono") }
    if (localStorage.getItem("Targeta")) { inputTelefono.value = localStorage.getItem("Targeta") }
}

btnEnviar.addEventListener("click", almacenarDatos)

document.addEventListener("DOMContentLoaded", recuperarDatos)


/*
LOCALSTORAGE
const datosFormulario = { nombre: "", email: "", telefono: "" }
localStorage.setItem(clave, valor a almacenar) //permite crear una clave y asignarle un valor

localStorage.getItem(clave)

localStorage.removeItem(clave)

localStorage.clear()

*/