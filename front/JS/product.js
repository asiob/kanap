//afficher le produit dans la page
import {getOneProduct} from "./api.js"
import {afficherProduit} from "./rendered.js"
import {ajouterPanier} from "./fonction.js"

//recuperer l'id dans l'url : url search param
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
let item = document.querySelector(`.item`);
let produitSolo = await getOneProduct(id); 
let produit = [];

let color = "";
let quantity = 0;
//creer un tableau pour stocker le produit à ajouter au panier
let productToAdd = {};
console.log("test produit solo",produitSolo);
afficherProduit(produitSolo,item);

//recuperer le bouton dans le dom
let btnAddToCart = document.querySelector(`#addToCart`);


//à mettre apres l'appel car "afficherProduit" crée le bouton
let champQte = document.querySelector("#quantity");
let champCouleur = document.querySelector("#colors");



// les appeler 
// console.log(produitSolo);
// console.log(btnAddToCart);

//bouton ajouter au panier
btnAddToCart.addEventListener("click", function(){
  quantity = champQte.value ;
  color = champCouleur.value;
  produitSolo.quantite = quantity;
  produitSolo.selectedColor = color;
  ajouterPanier(produitSolo);

});