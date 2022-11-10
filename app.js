// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "TEST-5335305914345865-110821-2c5a742715602e68c2fa2e1faf6f8c80-15010165",
});

let preference = {
    items: [],
    "back_urls": {
        "success": "https://www.tu-sitio/success",
        "failure": "http://www.tu-sitio/failure",
        "pending": "http://www.tu-sitio/pending"
    },
  };
  
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
    })
    .catch(function (error) {
      console.log(error);
    });
  
    function realizarCompra() {
        ids.forEach((producto) => {
            const producto = carrito.find((producto) => producto.id === id);
            preference.items.push({
                title: producto.nombre,
                unit_price: producto.precio,
                quantity: producto.cantidad,
            })
        })
    }
    
    
    
    
