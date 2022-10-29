let productos = []
const carrito = []
const URL = "..bbdd/productos.json"

const container = document.querySelector("div.container")

const activarBotonesAdd = () => { //ASIGNO EL EVENTO CLICK EN TODOS LOS BOTONES DE LAS CARDS
    const botonesAdd = document.querySelectorAll(".button.button-outline.button-add")
          botonesAdd.forEach(btn => btn.addEventListener("click", (e)=> agregarAlCarrito(e)))
}

const cargarMisProductos = async () => {
    let armoHTML = ""
    let activoBotones = true  
       try{
        const response = await fetch(URL)
        productos = await Response.json()
        productos.forEach(producto => armoHTML += retornoCard(producto))
       } catch (error) {
        armoHTML = retornoError ()
        activoBotones = false
       } finally {
        container.innerHTML = armoHTML 
        activoBotones && activarBotonesAdd
       }
    }
const toast = (mensaje) =>{
Toastify({
    text: mensaje,
    duration: 3000,
    close: true,
    gravity: "top", 
    position: "right",
    style:{
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){}
    }).showToast();
}

const agregarAlCarrito = (e)=> {  //AGREGAR UN PRODUCTO AL CARRITO
    let resultado = productos.find(prod => prod.nombre === e.target.id)
        if (resultado !== undefined) {
            carrito.push(resultado)
            guardarCarrito()
            toast(`'${e.target.id}' se agregó al carrito.`)
        }
}

const guardarCarrito = ()=> {
    if (carrito.length > 0) { localStorage.setItem("carrito", JSON.stringify(carrito)) }
}

const recuperarCarrito = ()=> {
    if (localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
            carritoRecuperado.forEach(producto => carrito.push(producto))
    } else {
        console.warn("No se encontró un carrito previamente guardado.")
    }
}

recuperarCarrito() //seguir agregando productos