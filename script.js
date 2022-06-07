let panier = document.getElementById("panier");
let container = document.getElementById("container");
let totelEl = document.getElementById("total-el");
let products = document.getElementById("products");
let nombre = document.getElementById("nomb");
let charette = document.getElementById("charette");
let chartEl = document.querySelectorAll(".chart-el");
let j = 0;
let total = 0;
let myArr = [
  {
    image: "lux1.jpg",
    nom: "Rolex",
    prix: 30000,
  },
  {
    image: "lux2.jpg",
    nom: "Rolex",
    prix: 25000,
  },
  {
    image: "lux3.jpg",
    nom: "Rolex",
    prix: 35000,
  },
  {
    image: "lux4.jpg",
    nom: "Hublot",
    prix: 18000,
  },
  {
    image: "lux5.jpg",
    nom: "Cartier",
    prix: 12000,
  },
  {
    image: "lux6.jpg",
    nom: "Cartier",
    prix: 18000,
  },
  {
    image: "lux7.jpg",
    nom: "Cartier",
    prix: 13000,
  },
  {
    image: "lux8.jpg",
    nom: "Mont Blanc",
    prix: 15000,
  },
  {
    image: "lux9.jpg",
    nom: "Mont Blanc",
    prix: 20000,
  }
];
//add product//
(function displayProduit() {
  for (let i = 0; i < myArr.length; i++) {
    products.innerHTML += `    <div
            class="neck grow"
            style="background: url(${myArr[i].image}) center/ cover no-repeat"
          >
            <button class="btn-buy" id="btn-buy">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
            <div class="titre">
              <h4>${myArr[i].nom}</h4>
              <h4><span class= "noir">$</span><span class= "noir">${myArr[i].prix}</span></h4>
            </div>
          </div>`;
  }
})();
// Trash trash manipulation du DOM
products.querySelectorAll(".btn-buy").forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("Hello World");
    alert("Voulez-vous ajouter ce produit au Panier?");
    // invoque variables
    let titreEl = this.parentNode.children[1].children[0].textContent;
   
    let priceEl =
      this.parentNode.children[1].children[1].children[1].textContent;
    priceEl = parseInt(priceEl);
    
    let bgEl = this.parentNode.style.background;
    console.log(this.parentNode.style.background);
    console.log(bgEl);
    console.log(priceEl);
    //add to trash

    container.innerHTML += ` <div class='chart-el '>
              <div  class='cercle' style= 'background: ${bgEl}'></div>
              <div class='donne'>
                <h5>${titreEl}</h5>
                <h5><span class= 'noir'>$</span><span class= 'noir'>${priceEl}</span></h5>
              </div>
              <button class='delete'>
                <i class='fa-solid fa-trash-can'></i>
              </button>
            </div>`;
    total += priceEl;
    // product number
    j++;
    nombre.innerHTML = `${j} items - $ ${total} `;
    totelEl.innerHTML = `$ ${total}`;
    //del product
    container.querySelectorAll(".delete").forEach((btn) => {
      btn.addEventListener("click", function () {
        alert("Voulez-vous retirer ce Produit du Panier?");
        //invoque variables
        let removeEl = this.parentNode;
        container.removeChild(removeEl);
        let priceEl =
          this.parentNode.children[1].children[1].children[1].textContent;
        priceEl = parseInt(priceEl);
        total -= priceEl;
        //remove elements
        j--;
        nombre.innerHTML = `${j} items - $ ${total} `;
        totelEl.innerHTML = `$ ${total}`;
      });
    });
  });
});
let etat;
//display product
panier.addEventListener("click", function () {
  if (etat === false) {
    charette.style.visibility = "visible";
    charette.style.transform = "translateX(-100%)";
    charette.style.transition = "transform 1s";
    etat = true;
  } else {
    charette.style.visibility = "hidden";
    etat = false;
  }
});