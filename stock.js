
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
    {id: 1, nombre: "Tornillo", categoria: "Pieza", cantidad: 1, precio: 100, img:"./imagenes/tornillo.png"},
    {id: 2, nombre: "Tuerca", categoria: "Pieza",cantidad: 1, precio: 120, img:"./imagenes/tuerca.png"},
    {id: 3, nombre: "Bateria", categoria: "Electronica", cantidad: 1, precio: 8000, img:"./imagenes/bateria.png"},
    {id: 4, nombre: "Espejo retrovisor", categoria: "Carroceria", cantidad: 1, precio: 16000, img:"./imagenes/espejoretrovisor.png"},
    {id: 5, nombre: "Moldura", categoria: "Carroceria", cantidad: 1, precio: 18000, img:"./imagenes/moldura.png"},
    {id: 6, nombre: "Parachoques delantero", categoria: "Carroceria", cantidad: 1, precio: 15900, img:"./imagenes/parachoques.png"},
    {id: 7, nombre: "Tasa", categoria: "Neumaticos", cantidad: 1, precio: 12500, img:"./imagenes/png-clipart-alloy-wheel-holden-special-vehicles-tire-car-car-car-vehicle.png"},
    {id: 8, nombre: "Neumatico", categoria: "Neumaticos", cantidad: 1, precio: 12500, img:"./imagenes/Car-Tire-Alloy-Wheel-PNG.png"},
    {id: 9, nombre: "Espejo", categoria: "Carroceria", cantidad: 1, precio: 5500, img:"./imagenes/espejo-doobackii-1-7733e1212916f5913716644001130051-1024-1024.jpg"},
    {id: 10, nombre: "Faro delantero", categoria: "Electronica", cantidad: 1, precio: 7500, img:"./imagenes/50820_picture.jpg"},
    {id: 11, nombre: "Parrilla BMW", categoria: "Carroceria", cantidad: 1, precio: 20500, img:"./imagenes/Rejilla-de-list-n-negro-brillante-para-BMW-parrilla-de-coche-con-marco-cromado-X5-X6.jpg"},
    {id: 12, nombre: "Insignia BMW", categoria: "Carroceria", cantidad: 1, precio: 13200, img:"./imagenes/insignia.jpg"},
    
]

const ubicacionProductos = document.getElementById("cardsProductos")

let copiaArray = stock.slice()
function restock() {
  stock = copiaArray;
}


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
              <div class="count-input">
          <div class="row">
              <button onclick="agregarAlCarrito(${producto.id})" class="d-block botonesproductos" value="save" type="submit">Agregar al carrito</button>
              </div>
          </div>
          </div>
          </div>
          </div>
  `
  ubicacionProductos.appendChild(div)
})
}
creadorProductos()