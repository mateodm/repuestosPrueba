
const ubicacionProductos = document.getElementById("cardsProductos")
stock.forEach((producto) => {
const div = document.createElement("div")
div.classList.add("producto")
div.innerHTML = `
<div class="card col-md-12 mb-4">
<img id="imagen" src=${producto.img} class="card-img-top" alt="Panel Led Indoor 100w"/>
<div class="card-body">
<h5 id="nombre" class="card-title"> ${producto.nombre}</h5>
<h5 style="display: none;"> ${producto.categoria} </h5>
<p id="precio" class="card-text card-precio"> $${producto.precio} ars</p>
<button onclick="agregarAlCarrito(${producto.id})" class="btn d-block btn-primary botones_productos">Agregar al carrito</button>
</div>
</div>
`
ubicacionProductos.appendChild(div)
})


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
 /* FILTRO POR CATEGORIAS */
 /*
document.addEventListener("click" e => {
    if (e.target.matches("#categoria")) {
        document.querySelectorAll(".botonCategoria").forEach(categoriaFiltrado => {
            categoriaFiltrado.textContent.includes(e.target.value)
            ?categoriaFiltrado.classList.remove("filtro")
            :categoriaFiltrado.classList.add("filtro")

        })
    }
})
 */

/* SORT MAYOR A MENOR - MENOR A MAYOR (POR AHORA SOLO FUNCIONA EN CONSOLA)*/
function menorSort() {
    stock.sort((a,b) => a.precio - b.precio);
    return producto
}
function mayorSort() {
    stock.sort((a,b) => b.precio - a.precio);
    console.log(stock)
}

/* CARRITO */
let carrito = [];
if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"))
}
    function agregarAlCarrito(id) {
    const producto = stock.find((producto) => producto.id === id);
    const productoEnElCarrito = carrito.find((producto) => producto.id === id )
    if(productoEnElCarrito){
        productoEnElCarrito.nDeProductos++;
    }
    else {
        carrito.push(producto);
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }
    }


    const estructuraCarrito = document.getElementById("estructuraCarrito");
    carrito.forEach((producto) => {
        const filaProducto = document.createElement("div")
        filaProducto.classList.add("col-12")
        filaProducto.innerHTML = `
            <div class="col">
                <div class="row text-muted">${producto.categoria}</div>
            <div class="row">${producto.nombre} Cantidad: ${producto.nDeProductos}</div>
            </div>
            <div class="col">
                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
            </div>
            <div class="col"> ${producto.precio} <span class="close">&#10005;</span></div>
            </div>
            `
    estructuraCarrito.appendChild(filaProducto);
    })

