//afficher le produit dans la page
import {getOneProduct} from "./api.js"
import {afficherProduit} from "./rendered.js"


//recuperer l'id dans l'url : url search param
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
let item = document.querySelector(`.item`);
let produitSolo = await getOneProduct(id); 
let produit = [];
let produitAAjouter = [] ;
let color = "";
let quantity = 0;
//creer un tableau pour stocker le produit à ajouter au panier
let productToAdd =[];

//recuperer le bouton dans le dom
let btnAddToCart = document.querySelector(`#addToCart`);

afficherProduit(produitSolo,item);

//à mettre apres l'appel car "afficherProduit" crée le bouton
const button = document.querySelector('#addToCart');
let champQte = document.querySelector("#quantity");
let champCouleur = document.querySelector("#colors");



// les appeler 
// console.log(produitSolo);
// console.log(btnAddToCart);

//bouton ajouter au panier
button.addEventListener("click", function (){
  quantity = champQte.value ;
  color = champCouleur.value;
  produit = [id, quantity, color]

  // recuperer la valeur du panier
  
  let valeurPanier = localStorage.getItem ("panier");
  
  //test si panier existe
  
  if (valeurPanier == null) {
    produitAAjouter.push(produit);  
    
    // AJouter mon produit dans le panier
    localStorage.setItem ("panier", JSON.stringify(produit));

  }else{

    console.log("Je suis ici");
    //va pousser le produit
   
// rajouter 1 article de plus lorsque celui-ci est déja dans le panier A VERIFIER

for (let i =0 ;i< valeurPanier.length; i++ ) {

     
      if ( valeurPanier[i]._id == produitAAjouter._id && valeurPanier[i].color == Selection.value)
        return valeurPanier[i].quantity++ ;
        // localStorage.setItem("produit", JSON.stringify(valeurPanier)),
        // valeurPanier = JSON.parse (localStorage.getItem("produit"))
      
    }

    console.log(produitAAjouter);

     // AJouter mon produit dans le panier
     localStorage.setItem ("panier", JSON.stringify(produitAAjouter));
  }

return (valeurPanier = JSON.parse (localStorage.getItem("produit")))

}); /* fin button add*/


//correction 

function ajouterPanier(product) {
  myProducts.push (product);
//verifier si le panier est vide ou pas
//Si le panier est vide Ajouter le produit dans le panier
//Si le produit est dans le panier incrementerla quantité
  let panier = JSON.parse (localStorage.getItem('panier'));
  if (panier === null ) {

    localStorage.setItem('panier', JSON.stringify (myProducts));
  }
 else {

  //parcourir le panier
  for (let i = 0; i< panier.lenght; i++) {

    //verifier que le name et l'id du produit dans le panier est le mm que le produit à ajouter 
    if (product.id === panier [i].id && product.name === panier [i].name ) {
      panier[i].qte = panier [i].qte + product.qte;
    }
  }
 }
  
}