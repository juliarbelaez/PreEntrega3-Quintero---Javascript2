//Librería
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

//Productos//
export const Productos = [
  {
    id: 1,
    nombre: "Azucarera Río Flora",
    precio: 25000,
    imagen: "../images/azucareraFlora.jpg",
    descripcion: "Dimensiones: 12cm alto x 11cm ancho x 8cm diámetro ",
  },
  {
    id: 2,
    nombre: "Tetera Oslo Bruma",
    precio: 56000,
    imagen: "../images/teteraBruma.jpg",
    descripcion: "Dimensiones: 23cm diámetro x 15cm alto",
  },
  {
    id: 3,
    nombre: "Juego de té CN Olivo",
    precio: 28500,
    imagen: "../images/juegoDeTeOlivo.jpg",
    descripcion: "Dimensiones: 7cm x 11cm x 8.5cm ",
  },
  {
    id: 4,
    nombre: "Jarra España Violeta + tapa",
    precio: 58500,
    imagen: "../images/jarraVioleta.jpg",
    descripcion: "Dimensiones:15cm x 14cm x 10cm",
  },
  {
    id: 5,
    nombre: "Jarra España Carmesí",
    precio: 48000,
    imagen: "../images/jarraCarmesi.jpg",
    descripcion: "Dimensiones:15cm x 14cm x 10cm",
  },
  {
    id: 6,
    nombre: "Salero Barichara Azalea",
    precio: 18000,
    imagen: "../images/saleroAzalea.jpg",
    descripcion: "Dimensiones: 7cm alto x 5cm ancho",
  },
  {
    id: 7,
    nombre: "Azucarera Río Protea",
    precio: 24000,
    imagen: "../images/azucareraProtea.jpg",
    descripcion: "Dimensiones: 12cm alto x 11cm ancho x 8cm diámetro ",
  },
  {
    id: 8,
    nombre: "Azucarera Río Olivo",
    precio: 24000,
    imagen: "../images/azucareraOlivo.jpg",
    descripcion: "Dimensiones: 12cm alto x 11cm ancho x 8cm diámetro ",
  },
  {
    id: 9,
    nombre: "Azucarera Río Ninfa",
    precio: 24000,
    imagen: "../images/azucareraCarmesi.jpg",
    descripcion: "Dimensiones: 12cm alto x 11cm ancho x 8cm diámetro ",
  },
  {
    id: 10,
    nombre: "Dip con tapa bruma",
    precio: 15000,
    imagen: "../images/dipBruma.jpg",
    descripcion: "Dimensiones: 7.5cm x 10cm x 9cm",
  },
  {
    id: 11,
    nombre: "Dip con tapa nido",
    precio: 15000,
    imagen: "../images/dipNido.jpg",
    descripcion: "Dimensiones: 7.5cm x 10cm x 9cm",
  },
  {
    id: 12,
    nombre: "Dip con tapa Viboral",
    precio: 15000,
    imagen: "../images/dipViboral.jpg",
    descripcion: "Dimensiones: 7.5cm x 10cm x 9cm",
  },
  {
    id: 13,
    nombre: "Jarra Inglaterra Ninfa",
    precio: 70000,
    imagen: "../images/jarraNinfa.jpg",
    descripcion: "Dimensiones: 23cm x 26cm x 12cm",
  },
  {
    id: 14,
    nombre: "Jarra Moscu Nido",
    precio: 56000,
    imagen: "../images/jarraFlora.jpg",
    descripcion: "Dimensiones:20cm x 15cm x 12cm",
  },
  {
    id: 15,
    nombre: "Jarra Moscu Protea",
    precio: 70000,
    imagen: "../images/jarraProtea.jpg",
    descripcion: "Dimensiones:20cm x 15cm x 12cm",
  },
];

//variables//
let carrito = [];
const items = document.querySelector("#items");
const carritoDeCompras = document.querySelector("#carrito");
const mostrarTotal = document.querySelector("#total");
const botonVaciar = document.querySelector("#boton-vaciar");

// Funciones
function mostrarProductos() {
  Productos.forEach((info) => {
    const misItems = document.createElement("div");
    misItems.classList.add("card", "col-sm-3");
    const cardItems = document.createElement("div");
    cardItems.classList.add("card-body");
    const tituloItems = document.createElement("h5");
    tituloItems.classList.add("card-title");
    tituloItems.textContent = info.nombre;
    const imagenItems = document.createElement("img");
    imagenItems.classList.add("card-img-top");
    imagenItems.setAttribute("src", info.imagen);
    const precioItems = document.createElement("p");
    precioItems.classList.add("card-text");
    precioItems.textContent = `$${info.precio}`;
    const descripcionItems = document.createElement("p");
    descripcionItems.classList.add("card-text");
    descripcionItems.textContent = info.descripcion;
    const botonItems = document.createElement("button");
    botonItems.classList.add("btn", "btn-outline-secondary");
    botonItems.textContent = "Agregar al carrito";
    botonItems.setAttribute("marcador", info.id);
    botonItems.addEventListener("click", agregarProductoAlCarrito);

    cardItems.appendChild(imagenItems);
    cardItems.appendChild(tituloItems);
    cardItems.appendChild(precioItems);
    cardItems.appendChild(descripcionItems);
    cardItems.appendChild(botonItems);
    misItems.appendChild(cardItems);
    items.appendChild(misItems);
  });
}

//Agregar al carrito//

function agregarProductoAlCarrito(evento) {
  carrito.push(evento.target.getAttribute("marcador"));
  renderizarCarrito();
  console.log(carrito);
}

//Push al carrito//

function renderizarCarrito() {
  carritoDeCompras.textContent = "";
  const carritoSinDuplicados = [...new Set(carrito)];
  carritoSinDuplicados.forEach((item) => {
    const miItem = Productos.filter((itemProductos) => {
      return itemProductos.id === parseInt(item);
    });
    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
      return itemId === item ? (total += 1) : total;
    }, 0);
    const misItems = document.createElement("li");
    misItems.classList.add("list-group-item", "text-right", "mx-12");
    misItems.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}`;
    // Botón eliminar//
    const miBoton = document.createElement("button");
    miBoton.classList.add("btn", "btn-outline-secondary", "mx-2");
    miBoton.textContent = "Eliminar";
    miBoton.style.marginLeft = "1rem";
    miBoton.dataset.item = item;
    miBoton.addEventListener(
      "click",
      borrarItemCarrito,
      Swal.fire("¡Súper!", "Tu producto fue agregado al carrito")
    );
    misItems.appendChild(miBoton);
    carritoDeCompras.appendChild(misItems);
  });
  //Calcular total
  mostrarTotal.textContent = calcularTotal();
}

//Eliminar del carrito
function borrarItemCarrito(evento) {
  const id = evento.target.dataset.item;
  carrito = carrito.filter((carritoId) => {
    return carritoId !== id;
  });
  renderizarCarrito();
}

//Calcular total

function calcularTotal() {
  return carrito
    .reduce((total, item) => {
      const miItem = Productos.filter((itemProductos) => {
        return itemProductos.id === parseInt(item);
      });
      return total + miItem[0].precio;
    }, 0)
    .toFixed(2);
}

function vaciarCarrito() {
  carrito = [];
  renderizarCarrito();
  Swal.fire("Oh no!", "Tu productos fueron eliminados del carrito");
}

botonVaciar.addEventListener("click", vaciarCarrito);

mostrarProductos();
renderizarCarrito();
