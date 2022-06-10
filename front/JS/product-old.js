//afficher le produit dans la page
import {getOneProduct} from "./api.js"
import {afficherProduit} from "./rendered.js"
import {ajouterPanier} from "./fonction.js"

//recuperer l'id dans l'url : url search param
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
let item = document.querySelector(`.item`);
let produitSolo = await getOneProduct(id); 
console.log(produitSolo);



//creer un tableau pour stocker le produit à ajouter au panier


afficherProduit(produitSolo,item);

//recuperer le bouton dans le dom
let btnAddToCart = document.querySelector(`#addToCart`);


//à mettre apres l'appel car "afficherProduit" crée le bouton
let price = document.querySelector('#price');
let select = document.querySelector('#colors');
let qty = document.querySelector('#quantity');
let nameId = document.querySelector('#title');



// les appeler 
// console.log(produitSolo);
// console.log(btnAddToCart);
let inCart;

//bouton ajouter au panier
btnAddToCart.addEventListener("click", function(){
 // pour ajouter dans le panier à la suite 
// produitSolo.id = id; 
// produitSolo.price = price.innerHTML ;
produitSolo.color = select.value ; 
produitSolo.qty = qty.value ;
// produitSolo.name = nameId.innerHTML;
let panier = localStorage.getItem('panier');
console.log(panier);
//verifier la presence du panier dans le local storage
  //si le panier est vide 
  if (panier !== null)
  {
    //recuperer des produits du panier dans un tableau
    let toto = JSON.parse(panier);
    console.log(typeof(toto));
    //verifiction si le produit à ajouter est present dans le(s) produits
    // produitsDansLepanier.forEach(p => {
      // if ((produitSolo._id ===p._id) && (produitSolo.color === p.color))
      // {
      //   p.qty += Number (produitSolo.qty);
      //   inCart = true;

      // }else {
      //   inCart = false;
      // }
    // });
    for (let i = 0; i < toto.length; i++) {
      if ((produitSolo._id === toto[i]._id) && (produitSolo.color === toto[i].color))
      {
        toto[i].qty += Number (produitSolo.qty);
        inCart = true;

      }else {
        inCart = false;
      }
    }
    if (inCart) {
      localStorage.setItem ('panier', JSON.stringify(toto));
    }else{
      toto.push(produitSolo);
      localStorage.setItem ('panier', JSON.stringify(toto));
    }
  } else {
    localStorage.setItem ('panier', JSON.stringify(produitSolo));
  }

  // console.log(produitSolo);
  // ajouterPanier(produitSolo, panier);

});


