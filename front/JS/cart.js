//recuperer photo+ id + quantité -> afficher panier
// option supprimer panier clear


import { afficherPanier} from "./fonction.js";
import { supPanier} from "./fonction.js";



// calcul du total
// let cartPrice = document.querySelector(".cart__price");

let spanQty = document.querySelector('#totalQuantity');
let spanPrice = document.querySelector('#totalPrice');
afficherPanier(spanQty, spanPrice);

//aller chercher les prix dans le panier
//  for ( let p = 0; p < product; p++) {
    //   let panier = product[p].price;
    
    //   console.log(product[p].price);
    //  }
    // console.log(spanQty);
    
       


let deleteItems = document.querySelectorAll (".deleteItem") ;
for(let i = 0; i < deleteItems.length; i++){
    deleteItems[i].addEventListener (`click`, supPanier(deleteItems[i]))
}



