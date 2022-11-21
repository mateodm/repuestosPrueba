/* BUSCADOR PRODUCTOS Y OPERADORES TERNARIOS */
document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        document.querySelectorAll(".producto").forEach(productoFiltrado => {
            productoFiltrado.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? productoFiltrado.classList.remove("filtro")
                : productoFiltrado.classList.add("filtro")
        })
    }
})

/* Busqueda por código */
const textoBuscador = document.getElementById("buscadorCodigo")
function busquedaCodigo() {
    restock();
    const contenidoCodigo = textoBuscador.value.toLowerCase()
    stock = stock.filter((producto) => producto.codigo.toLowerCase() === contenidoCodigo.toString());
    ubicacionProductos.innerHTML = '';
    creadorProductos()
}
/* Filtro categorias y marcas */
function filtroCategoria(categoria) {
    restock();
    stock = stock.filter((producto) => producto.categoria.toLowerCase() === categoria);
    ubicacionProductos.innerHTML = '';
    let chequearCategoria = stock.length
    if (chequearCategoria >= 1) {
        creadorProductos();
    }
    else if (chequearCategoria = 0){
        Toastify({
            text: "Actualmente no hay ningún producto de esta categoria",
            duration: 2000,
            gravity: "bottom",
            position: "right",
        }).showToast();
    }
}
function filtroMarca(marca) {
    restock();
    stock = stock.filter((producto) => producto.marca.toLowerCase() === marca);
    ubicacionProductos.innerHTML = '';
    let chequearMarca = stock.length
    if (chequearMarca >= 1) {
    creadorProductos()
    }
    else {
        Toastify({
            text: "Actualmente no hay ningún producto de esta marca",
            duration: 2000,
            gravity: "bottom",
            position: "right",
        }).showToast();
    }
}
/* SORT MAYOR A MENOR - MENOR A MAYOR */
function menorSort() {
    stock.sort((a, b) => a.precio - b.precio);
    ubicacionProductos.innerHTML = ""
    creadorProductos()
    return;
}
function mayorSort() {
    stock.sort((a, b) => b.precio - a.precio);
    ubicacionProductos.innerHTML = ""
    creadorProductos()
    return;
}