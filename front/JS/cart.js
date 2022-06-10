//recuperer photo+ id + quantité -> afficher panier
// option supprimer panier clear


import { afficherPanier } from "./fonction.js";



// calcul du total

let prixTotalCalcul = 0;
let quantiteTotal = 0;
let spanQty = document.querySelector('#totalQuantity');
let spanPrice = document.querySelector('#price');
//aller chercher les prix dans le panier
//  for ( let p = 0; p < product; p++) {
//   let panier = product[p].price;

//   console.log(product[p].price);
//  }




afficherPanier();

let panier = JSON.parse(localStorage.getItem('panier'));
panier.forEach(p => {
    prixTotalCalcul += p.price;
    quantiteTotal += p.qty;
});

spanQty.innerHTML = quantiteTotal;
spanPrice.innerHTML = quantiteTotal;