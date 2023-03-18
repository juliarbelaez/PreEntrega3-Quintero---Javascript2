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

const botonNosotros = document.querySelector("#botonNosotros");
const containerNosotros = document.querySelector("#containerNosotros");

//let women = element.filter(element.gender == female);

botonNosotros.addEventListener("click", async () => {
  for (let i = 1; i < 10; i++) {
    const data = await fetch("https://randomuser.me/api/");
    const res = await data.json();
    containerNosotros.innerHTML += ` `;
    res.results.forEach((element) => {
      console.log(element);
      containerNosotros.innerHTML += ` 
    <div id= "card" class="col-sm-3 card">
    <img src="${element.picture.large}" class="card-img-top" alt="">
    <div class="card-text">
    <h2>${element.name.first} ${element.name.last}</h2>
    <p>Celular: ${element.phone}</p>
    <p>Email: ${element.email}</p>
    </div>
    </div>
    </div>
    <br>
    `;
      console.log(element);
    });
  }
  console.log("Holi");
});
