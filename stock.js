const ubicacionPaginas = document.getElementById("paginasBoton");
let cantidadPorPagina = 16
let indice = 0


class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.marca = marca;
        this.codigo = codigo;
    }
}

let stock = [
    { id: 1, nombre: "Tornillo", marca: "Generica", categoria: "Pieza", cantidad: 1, codigo: "asd", precio: 100, img: "./imagenes/tornillo.png" },
    { id: 2, nombre: "Tuerca", marca: "Generica", categoria: "Pieza", cantidad: 1, codigo: "DEF12", precio: 120, img: "./imagenes/tuerca.png" },
    { id: 3, nombre: "Bateria", marca: "Generica", categoria: "Electronica", codigo: "alv", cantidad: 1, precio: 8000, img: "./imagenes/bateria.png" },
    { id: 4, nombre: "Espejo retrovisor", marca: "Ford", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 16000, img: "./imagenes/espejoretrovisor.png" },
    { id: 5, nombre: "Moldura", marca: "Nissan", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 18000, img: "./imagenes/moldura.png" },
    { id: 6, nombre: "Parachoques delantero", marca: "Chevrolet", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 15900, img: "./imagenes/parachoques.png" },
    { id: 7, nombre: "Tasa", marca: "Generica", categoria: "Neumaticos", codigo: "N/A", cantidad: 1, precio: 12500, img: "./imagenes/png-clipart-alloy-wheel-holden-special-vehicles-tire-car-car-car-vehicle.png" },
    { id: 8, nombre: "Neumatico", marca: "Generica", categoria: "Neumaticos", codigo: "N/A", cantidad: 1, precio: 12500, img: "./imagenes/Car-Tire-Alloy-Wheel-PNG.png" },
    { id: 9, nombre: "Espejo", marca: "Generica", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 5500, img: "./imagenes/espejo-doobackii-1-7733e1212916f5913716644001130051-1024-1024.jpg" },
    { id: 10, nombre: "Faro delantero", marca: "Generica", categoria: "Electronica", codigo: "N/A", cantidad: 1, precio: 7500, img: "./imagenes/50820_picture.jpg" },
    { id: 11, nombre: "Parrilla BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 20500, img: "./imagenes/Rejilla-de-list-n-negro-brillante-para-BMW-parrilla-de-coche-con-marco-cromado-X5-X6.jpg" },
    { id: 12, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 13, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 14, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 15, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 16, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 17, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 18, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 19, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 20, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 21, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 22, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 23, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 24, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 25, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 26, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 27, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 28, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 29, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 30, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 31, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 32, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 33, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 34, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 35, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },
    { id: 36, nombre: "Insignia BMW", marca: "BMW", categoria: "Carroceria", codigo: "N/A", cantidad: 1, precio: 13200, img: "./imagenes/insignia.jpg" },


]

const ubicacionProductos = document.getElementById("cardsProductos")

let copiaArray = stock.slice()
function restock() {
    stock = copiaArray;
}


function creadorProductos(array) {
    array = array.slice(indice, cantidadPorPagina)
    ubicacionProductos.innerHTML = ""
    array.map((producto) => {
        const div = document.createElement("div")
        div.classList.add("producto", "col-xl-3", "col-lg-4", "col-md-6", "col-sm-12")
        div.innerHTML = `
          <div class="card col-md-12 col-sm-12 mb-4 ml-5 card-producto">
              <img id="imagen" src=${producto.img} class="card-imagen card-img-top my-3" alt="Panel Led Indoor 100w"/>
          <div class="card-body">
              <h5 id="nombre" class="card-title"> ${producto.nombre}</h5>
              <h5 style="display: none;"> ${producto.categoria} </h5>
              <p id="precio" class="card-text card-precio"> $${producto.precio} ars</p>
              <div class="count-input">
          <div class="row">
              <button onclick="agregarAlCarrito(${producto.id})" class="d-block botonesproductos" value="save" type="submit">Agregar al carrito</button>
              </div>
          </div>
  `
        ubicacionProductos.appendChild(div)
    })
}
let Pages = [];
const ArrayPaginador = (array, cantidad) => {
    while (array.length) {
        const Product = array.slice(0, cantidad);
        array = array.slice(cantidad);

        Pages.push(Product);
    }

    let obj = {};
  
    Pages.map((_, i) => obj[`Página_${i+1}`] = Pages[i]);
    return obj;
};



function paginador() {
    ubicacionPaginas.innerHTML = ""
    let paginaInicial = 0
    Pages.map(() => {
        paginaInicial++
        const li = document.createElement("li")
        li.classList.add("page-link")
        li.innerHTML = 
        `
        <h5 onclick="stringPagina(${paginaInicial})">${paginaInicial}</h5>
        `
        ubicacionPaginas.appendChild(li)  
    }
    )
    }
    function stringPagina(id) {
        if (id === 1) {
            cantidadPorPagina = 16
            indice = 0
            ubicacionProductos.innerHTML= ""
            creadorProductos(stock)
        }
        else if (id > 1) {
            cantidadPorPagina = id * 16
            indice = cantidadPorPagina/2
            ubicacionProductos.innerHTML= ""
            creadorProductos(stock)
        }
    }
    function filtrosPaginador(array, cantidad) {
        Pages = []
        console.log(Pages)
        creadorProductos(array)
        ArrayPaginador(array, cantidad)
        paginador()
    }

ArrayPaginador(stock, 16)
paginador()
creadorProductos(stock)