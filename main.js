
const buscadorProductos = document.querySelector("#buscador");

/* BUSCADOR PRODUCTOS */
document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        document.querySelectorAll(".producto").forEach(productoFiltrado => {
            productoFiltrado.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?productoFiltrado.classList.remove("filtro")
            : productoFiltrado.classList.add("filtro")
        })
    }
})

function filtroCategoria(categoria) {
    restock();
    stock = stock.filter((producto) => producto.categoria.toLowerCase() === categoria);
    ubicacionProductos.innerHTML = '';
    creadorProductos();
}


function productosTotales() {
    restock();
    ubicacionProductos.innerHTML = '';
    creadorProductos();
}

/*
function filtroCategoria(categoria) {

    const ubicacionCategoria = document.getElementById(`categoria_${categoria}`);

    let stockFiltrado = [];

    const filtroProductos = stock.filter(c => c.categoria === categoria);

    stockFiltrado.push(filtroProductos)
    

    ubicacionCategoria.appendChild(stockFiltrado);
    return;
}
*/

/* SORT MAYOR A MENOR - MENOR A MAYOR (POR AHORA SOLO FUNCIONA EN CONSOLA)*/
function menorSort() {
    stock.sort((a,b) => a.precio - b.precio);
    ubicacionProductos.innerHTML = ""
    creadorProductos()
    return;
}
function mayorSort() {
    stock.sort((a,b) => b.precio - a.precio);
    ubicacionProductos.innerHTML = ""
    creadorProductos()
    return;
}

/* CARRITO LOCAL STORAGE(ARRAY) */
let carrito = [];
if (localStorage.getItem("carrito")) carrito = JSON.parse(localStorage.getItem("carrito"));

function agregarAlCarrito(id) {
    const producto = stock.find((producto) => producto.id === id);
    const productoEnElCarrito = carrito.find((producto) => producto.id === id);

    if (!productoEnElCarrito) {
    
        carrito.push(producto);
        localStorage.setItem("carrito",JSON.stringify(carrito));
        
    }

    productoEnElCarrito.nDeProductos++;
    
    window.location.reload();
}

const estructuraCarrito = document.getElementById("estructuraCarrito");


    /* CARRITO FUNCION */
carrito.map((producto) => {
    const filaProducto = document.createElement("div")
    filaProducto.innerHTML = `
    <div class="row">
        <div class="col-md-1"> </div>
        <div class="card col-md-10 mb-4">
        <div class="card-body p-4">
            <div class="row align-items-center">
                <div class="col-md-2">
                    <img class="carrito-imagen img-fluid" src="${producto.img}" alt="${producto.nombre}">
                </div>
            <div class="col-md-2 d-flex justify-content-center">
                <div>
                    <p class="small text-muted mb-4 pb-2">Nombre</p>
                    <p class="lead fw-normal mb-0">${producto.nombre}</p>
                </div>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <div>
                    <p class="small text-muted mb-4 pb-2">Cantidad</p>
                    <p class="lead fw-normal mb-0">${producto.cantidad}</p>
                </div>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <div>
                    <p class="small text-muted mb-4 pb-2">Precio</p>
                    <p class="lead fw-normal mb-0">${producto.precio}</p>
                </div>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <div>
                    <p class="small text-muted mb-4 pb-2">Total</p>
                    <p class="lead fw-normal mb-0"></p>
                </div>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <div>
                    <img id="borrar${producto.id}" class="tacho"style="width: 5vh; margin-top: 2vh;" src="./imagenes/tachobasura.png">
                </div>
            </div>
        </div>
    </div>
</div>
        `
    estructuraCarrito.appendChild(filaProducto);
    
    /* Borrar producto según ID del carrito */
    const borrarCarrito = document.getElementById(`borrar${producto.id}`)
    borrarCarrito.addEventListener("click", () => { eliminarProductoCarrito(producto.id) })



})

/* Función que borra producto del carrito según el ID */
const eliminarProductoCarrito = (id) => {
    const elemento = carrito.find((producto) => producto.id === id);
    const posicion = carrito.indexOf(elemento);

    carrito.splice(posicion, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    window.location.reload()
}