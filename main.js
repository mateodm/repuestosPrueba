
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

const filtroPrecio = stock.filter(producto => producto.precio > 8000);


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
    console.log(stock)
}
function mayorSort() {
    stock.sort((a,b) => b.precio - a.precio);
    console.log(stock)
}
