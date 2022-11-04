
class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre; 
        this.precio = precio;
        this.img = img;
        this.nDeProductos = 1; 
    }
}

let stock = [
    {id: 1, nombre: "Tornillo", categoria: "pieza", cantidad: 1, precio: 100, img:"./imagenes/tornillo.png"},
    {id: 2, nombre: "Tuerca", categoria: "pieza",cantidad: 1, precio: 120, img:"./imagenes/tuerca.png"},
    {id: 3, nombre: "Bateria", categoria: "Electronica", cantidad: 1, precio: 12000, img:"./imagenes/bateria.png"},
    {id: 4, nombre: "Espejo retrovisor", categoria: "Carroceria", cantidad: 1, precio: 16000, img:"./imagenes/espejoretrovisor.png"},
    {id: 5, nombre: "Moldura", categoria: "Carroceria", cantidad: 1, precio: 18000, img:"./imagenes/moldura.png"},
    {id: 6, nombre: "Rueda", categoria: "undefined", cantidad: 1, precio: 15900, img:"./imagenes/logotemp-pagina.gif"},
    {id: 7, nombre: "Unproducto", categoria: "undefined", cantidad: 1, precio: 2000, img:"./imagenes/logotemp-pagina.gif"},
    {id: 8, nombre: "Repuesto8", categoria: "undefined", cantidad: 1, precio: 1500, img:"./imagenes/logotemp-pagina.gif"},
    
]

const ubicacionProductos = document.getElementById("cardsProductos")

let copiaArray = stock.slice()
function restock() {
  stock = copiaArray;
  return stock;
}
/*
function creadorProductos(sort) {
    stock.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("producto")
      div.innerHTML = `
          <div class="card col-md-12 mb-4">
              <img id="imagen" src=${producto.img} class="card-imagen card-img-top my-3" alt="Panel Led Indoor 100w"/>
          <div class="card-body">
              <h5 id="nombre" class="card-title"> ${producto.nombre}</h5>
              <h5 style="display: none;"> ${producto.categoria} </h5>
              <p id="precio" class="card-text card-precio"> $${producto.precio} ars</p>
              <button onclick="agregarAlCarrito(${producto.id})" class="btn d-block btn-primary botones_productos">Agregar al carrito</button>
          </div>
          </div>
  `
      switch (sort) {
        case 'mayor':
          ubicacionProductos.appendChild(div.mayorSort);
          break;
  
        case 'menor':
          ubicacionProductos.appendChild(div.menorSort);
          break;
  
        default:
          ubicacionProductos.appendChild(div);
          break;
      }
  
    })
  }
  */

  function creadorProductos(){ 
    stock.map((producto) => {
      const div = document.createElement("div")
      div.classList.add("producto")
      div.innerHTML = `
          <div class="card col-md-12 mb-4">
              <img id="imagen" src=${producto.img} class="card-imagen card-img-top my-3" alt="Panel Led Indoor 100w"/>
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
}
creadorProductos()