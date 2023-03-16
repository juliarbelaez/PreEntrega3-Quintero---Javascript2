const botonNosotros = document.querySelector("#botonNosotros");
const containerNosotros = document.querySelector("#containerNosotros");

botonNosotros.addEventListener("click", async () => {
  for (let i = 1; i < 10; i++) {
    const data = await fetch("https://randomuser.me/api/");
    const res = await data.json();
    res.results.forEach((el) => {
      console.log(el);
      container.innerHTML += ` 
    <div id= "card" class="col-sm-3 card">
    <img src="${el.picture.large}" class="card-img-top" alt="">
    <div class="card-text">
    <h2>${el.name.first} ${el.name.last}</h2>
    <p>Celular: ${el.phone}</p>
    <p>Email: ${el.email}</p>
    </div>
    </div>
    </div>
    <br>
    `;
    });
  }
});

Toastify({
  text: "¡Lo artesanal toma tiempo! Nuestros tiempos de entrega son entre 30 a 45 días hábiles",
  duration: 7000,
  destination: "https:www.carmesi.co",
  newWindow: true,
  close: true,
  gravity: "bottom",
  position: "right",
  stopOnFocus: true,
  style: {
    background: "linear-gradient(to right, #9e6f6d, #c6adaf)",
  },
  onClick: function () {}, // Callback after click
}).showToast();

//constructor producto//
class Producto {
  constructor(nombre, peso, precio, imagen, descripcion) {
    this.nombre = nombre;
    this.peso = parseInt(peso);
    this.precio = parseInt(precio);
    this.imagen = imagen;
    this.descripcion = descripcion;
  }
}

//productos//

const producto1 = new Producto(
  "Azucarera Río Protea",
  "350",
  24000,
  "../images/azucareraProtea.jpg",
  "Cuando compramos un productos 100% hecho a mano estamos comprando un artículo que fue pensado, diseñado y ha pasado por horas de prueba para conseguir el producto deseado; estamos comprando productos exclusivos, únicos y quizá irrepetibles, es una pieza en la que cada detalle fue minuciosamente hecho con amor y respeto en el proceso; estás apoyando artesanos que quieren exaltar el arte, su historia y antepasados manteniendo viva la tradicional artesanal."
);
const producto2 = new Producto(
  "Azucarera Río Olivo",
  "350",
  24000,
  "../images/azucareraOlivo.jpg",
  "Cuando compramos un productos 100% hecho a mano estamos comprando un artículo que fue pensado, diseñado y ha pasado por horas de prueba para conseguir el producto deseado; estamos comprando productos exclusivos, únicos y quizá irrepetibles, es una pieza en la que cada detalle fue minuciosamente hecho con amor y respeto en el proceso; estás apoyando artesanos que quieren exaltar el arte, su historia y antepasados manteniendo viva la tradicional artesanal."
);
const producto3 = new Producto(
  "Azucarera Río Ninfa",
  "180",
  24000,
  "../images/azucareraCarmesi.jpg",
  "Hola"
);
const producto4 = new Producto(
  "Dip con tapa bruma",
  "500",
  15000,
  "../images/dipBruma.jpg"
);
const producto5 = new Producto(
  "Dip con tapa nido",
  "650",
  15000,
  "../images/dipNido.jpg",
  "Cuando compramos un productos 100% hecho a mano estamos comprando un artículo que fue pensado, diseñado y ha pasado por horas de prueba para conseguir el producto deseado; estamos comprando productos exclusivos, únicos y quizá irrepetibles, es una pieza en la que cada detalle fue minuciosamente hecho con amor y respeto en el proceso; estás apoyando artesanos que quieren exaltar el arte, su historia y antepasados manteniendo viva la tradicional artesanal."
);
const producto6 = new Producto(
  "Dip con tapa Viboral",
  "650",
  15000,
  "../images/dipViboral.jpg",
  "Cuando compramos un productos 100% hecho a mano estamos comprando un artículo que fue pensado, diseñado y ha pasado por horas de prueba para conseguir el producto deseado; estamos comprando productos exclusivos, únicos y quizá irrepetibles, es una pieza en la que cada detalle fue minuciosamente hecho con amor y respeto en el proceso; estás apoyando artesanos que quieren exaltar el arte, su historia y antepasados manteniendo viva la tradicional artesanal."
);
const producto7 = new Producto(
  "Jarra Inglaterra Ninfa",
  "850",
  70000,
  "../images/jarraNinfa.jpg",
  "Cuando compramos un productos 100% hecho a mano estamos comprando un artículo que fue pensado, diseñado y ha pasado por horas de prueba para conseguir el producto deseado; estamos comprando productos exclusivos, únicos y quizá irrepetibles, es una pieza en la que cada detalle fue minuciosamente hecho con amor y respeto en el proceso; estás apoyando artesanos que quieren exaltar el arte, su historia y antepasados manteniendo viva la tradicional artesanal."
);
const producto8 = new Producto(
  "Jarra Moscu Nido",
  "650",
  56000,
  "../images/jarraFlora.jpg",
  "Cuando compramos un productos 100% hecho a mano estamos comprando un artículo que fue pensado, diseñado y ha pasado por horas de prueba para conseguir el producto deseado; estamos comprando productos exclusivos, únicos y quizá irrepetibles, es una pieza en la que cada detalle fue minuciosamente hecho con amor y respeto en el proceso; estás apoyando artesanos que quieren exaltar el arte, su historia y antepasados manteniendo viva la tradicional artesanal."
);
const producto9 = new Producto(
  "Jarra Moscu Protea",
  "350",
  70000,
  "../images/jarraProtea.jpg",
  "Cuando compramos un productos 100% hecho a mano estamos comprando un artículo que fue pensado, diseñado y ha pasado por horas de prueba para conseguir el producto deseado; estamos comprando productos exclusivos, únicos y quizá irrepetibles, es una pieza en la que cada detalle fue minuciosamente hecho con amor y respeto en el proceso; estás apoyando artesanos que quieren exaltar el arte, su historia y antepasados manteniendo viva la tradicional artesanal."
);

//array productos//

const Productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
];

//variables//

let total = 0;

let opcion;

//local storage//

let carritoDeCompras =
  JSON.parse(localStorage.getItem("carritoDeCompras")) || [];
//DOM//

const botonProductos = document.querySelector("#botonProductos");
const botonCarrito = document.querySelector("#botonCarrito");
const container = document.querySelector(".container");

//productos carrito//

botonProductos.addEventListener("click", () => {
  container.innerHTML = "";
  Productos.forEach((e, index) => {
    container.innerHTML += ` 
    <div id= "card" class="col-sm-3 card">
    <img src="${e.imagen}" class="card-img-top" alt="">
    <div class="card-text">
    <h2>${e.nombre}</h2>
    <p>Precio: $${e.precio}</p>
    <p>Descripción:${e.descripcion}</p>
    <div class="card-button">
    <button class="agregarCarrito" role="button">Agregar al carrito</button> 
    </div>
    </div>
    </div>
    <br>
    `;
  });

  //agregar al carrito//

  const botonAgregar = document.querySelectorAll(".agregarCarrito");

  botonAgregar.forEach((boton, index) => {
    boton.addEventListener("click", () => {
      let productoElegido = index;
      carritoDeCompras.push(Productos[productoElegido]);

      localStorage.setItem(
        "carritoDeCompras",
        JSON.stringify(carritoDeCompras)
      );
      total += Productos[productoElegido].precio;
      total = parseInt(total);
      console.log("Total es " + total);
      localStorage.setItem("total", JSON.stringify(total));
      Swal.fire({
        text:
          "El artículo agregado al carrito de compras fue:" +
          " " +
          Productos[productoElegido].nombre,
        icon: "success",
      });
      console.log("mensaje");
    });
  });
});

//eliminar del carrito//

botonCarrito.addEventListener("click", () => {
  container.innerHTML = ``;
  carritoDeCompras.forEach((e, index) => {
    container.innerHTML += ` 
    <div id= "card" class="col-sm-4 card">
    <img src="${e.imagen}" class="card-img-top" alt="azucarera">
    <div class="card-body">
    <h2>${e.nombre}</h2>
    <p>Precio: $${e.precio}</p>
    <p>Descripción:${e.descripcion}</p>
    <div class="card-button">
    <button class="eliminarCarrito" role="button">Eliminar del carrito</button> 
    </div>
    </div>
    </div>
    `;
  });
});

/*const botonEliminar = document.querySelectorAll(".eliminarCarrito");
botonEliminar.addEventListener("onload", () => {
  console.log("holi");
});*/

//total resultado//

const botontotal = document.querySelector("#container2");

botonCarrito.addEventListener("click", () => {
  container2.innerHTML = ``;
  total = JSON.parse(localStorage.getItem("total")) || [];
  container2.innerHTML += `<h2>Total: ${total}</h2>`;
});
/*
let vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", respuestaClick);
function respuestaClick() {
  carritoDeCompras = [];
  container.innerHTML = ``;
  container2.innerHTML = ``;
  total = 0;
  localStorage.clear();
}
*/
