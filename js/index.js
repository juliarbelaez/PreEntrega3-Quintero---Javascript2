//constructor producto//
class Producto {
  constructor(nombre, peso, precio, imagen) {
    this.nombre = nombre;
    this.peso = parseInt(peso);
    this.precio = parseInt(precio);
    this.imagen = imagen;
  }
}

//productos//

const producto1 = new Producto(
  "Azucarera Río Protea",
  "350",
  24000,
  "./images/azucareraProtea.jpg"
);
const producto2 = new Producto(
  "Azucarera Río Olivo",
  "350",
  24000,
  "./images/azucareraOlivo.jpg"
);
const producto3 = new Producto(
  "Azucarera Río Ninfa",
  "180",
  24000,
  "./images/azucareraCarmesi.jpg"
);
const producto4 = new Producto(
  "Dip con tapa bruma",
  "500",
  15000,
  "./images/dipBruma.jpg"
);
const producto5 = new Producto(
  "Dip con tapa nido",
  "650",
  15000,
  "./images/dipNido.jpg"
);
const producto6 = new Producto(
  "Dip con tapa Viboral",
  "650",
  15000,
  "./images/dipViboral.jpg"
);
const producto7 = new Producto(
  "Jarra Inglaterra Ninfa",
  "850",
  70000,
  "./images/jarraNinfa.jpg"
);
const producto8 = new Producto(
  "Jarra Moscu Nido",
  "650",
  56000,
  "./images/jarraFlora.jpg"
);
const producto9 = new Producto(
  "Jarra Moscu Protea",
  "350",
  70000,
  "./images/jarraProtea.jpg"
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
    <div class="card">
    <img src="${e.imagen}" class="card-img-top" alt="">
    <div class="card-body">
    <h2>Nombre: ${e.nombre}</h2>
    <p>Precio: $${e.precio}</p>
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
      alert(
        "El artículo agregado al carrito de compras fue:" +
          " " +
          Productos[productoElegido].nombre
      );
      console.log(total);
    });
  });
});

//eliminar del carrito//

botonCarrito.addEventListener("click", () => {
  container.innerHTML = ``;
  carritoDeCompras.forEach((e, index) => {
    container.innerHTML += ` 
    <div class="card">
    <img src="${e.imagen}" class="card-img-top" alt="azucarera">
    <div class="card-body">
    <h2>Nombre: ${e.nombre}</h2>
    <p>Precio: $${e.precio}</p>
    <div class="card-button">
    </div>
    </div>
    </div>
    `;
  });
});

//total resultado//

botonCarrito.addEventListener("click", () => {
  container2.innerHTML = ``;
  total = JSON.parse(localStorage.getItem("total")) || [];
  container2.innerHTML += `<h2>Total: ${total}</h2>`;
});

let vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", respuestaClick);
function respuestaClick() {
  carritoDeCompras = [];
  container.innerHTML = ``;
  container2.innerHTML = ``;
  total = 0;
  localStorage.clear();
}
