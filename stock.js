
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
    {id: 1, nombre: "Tornillo", categoria: "pieza", cantidad: 1, precio: 6000, img:"./imagenes/logotemp-pagina.gif"},
    {id: 2, nombre: "Tuerca", categoria: "pieza",cantidad: 1, precio: 8000, img:"./imagenes/logotemp-pagina.gif"},
    {id: 3, nombre: "Bateria", categoria: "Electronica", cantidad: 1, precio: 12000, img:"./imagenes/logotemp-pagina.gif"},
    {id: 4, nombre: "Espejo retrovisor", categoria: "Carroceria", cantidad: 1, precio: 16000, img:"./imagenes/logotemp-pagina.gif"},
    {id: 5, nombre: "Moldura", categoria: "Carroceria", cantidad: 1, precio: 18000, img:"./imagenes/logotemp-pagina.gif"},
    {id: 6, nombre: "Etc", categoria: "undefined", cantidad: 1, precio: 7000, img:"./imagenes/logotemp-pagina.gif"},
    {id: 7, nombre: "Unproducto", categoria: "undefined", cantidad: 1, precio: 2000, img:"./imagenes/logotemp-pagina.gif"},
    {id: 8, nombre: "Repuesto8", categoria: "undefined", cantidad: 1, precio: 1500, img:"./imagenes/logotemp-pagina.gif"},
]
