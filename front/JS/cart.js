//recuperer photo+ id + quantité -> afficher panier
// option supprimer panier clear


import { afficherPanier} from "./fonction.js";
import { afficherPrixTotal, validateEmail, verifierPasDeChiffres} from "./fonction.js";
// import { supPanier} from "./fonction.js";



// calcul du total
let cartPrice = document.querySelector(".cart__price");

let spanQty = document.querySelector('#totalQuantity');
let spanPrice = document.querySelector('#totalPrice');
let element = 0;
let qteTotal = 0;
let prixTotal = 0;
afficherPanier();

  
       

// Récupérer tous les boutons qui ont la classe deleteItem
let deleteItems = document.querySelectorAll(".deleteItem") ;

//recuperer le panier dans le localstorage
let panier = JSON.parse(localStorage.getItem("panier"));
console.log(panier);

console.log(deleteItems);
// Parcourir le tableau des boutons
for(let i = 0; i < deleteItems.length; i++){
    deleteItems[i].addEventListener ('click', function(){
        let articlePanier = deleteItems[i].closest("article");
    
        // la supprimer
        articlePanier.remove() ;

        // creer une variable du produit sup
        let indiceProduitSupp = i;

        // Mettre  jour le panier
        console.log(panier[indiceProduitSupp]);
        //parcourir le panier pour voir le produit supprimé
        let eltSupp = panier.splice(indiceProduitSupp, 1);
        console.log(eltSupp);
        //supprimer du localstorage le produit sup de la page html
        localStorage.setItem('panier', JSON.stringify(panier));
    })
}

// aller chercher les prix dans le panier
for ( let p = 0; p < panier.length; p++) {
    qteTotal += panier[p].qty; // qteTotal = qteTotal + panier[p].qty
    prixTotal += panier[p].price; 
}

afficherPrixTotal(cartPrice, qteTotal, prixTotal);

//gerer la modification du lot dans le panier
let choixQty = document.querySelectorAll (".itemQuantity")
console.log(choixQty);
for (let i = 0; i < choixQty.length; i++) {
    choixQty[i].addEventListener ('input', function(){
        // panier = .findIndex ();
        let indice = i ; 
        let nouvelleQty = Number(choixQty[i]["value"]);
        panier[indice].qty = nouvelleQty;
        localStorage.setItem('panier', JSON.stringify(panier));
    });
    
};

// traitement du formulaire
let btnCommande = document.querySelector("#order");
let inputPrenom = document.querySelector("#firstName");
let inputNom  = document.querySelector("#lastName");
let inputAdresse = document.querySelector("#address");
let inputVille = document.querySelector("#city");
let inputMail = document.querySelector("#email");

console.log(btnCommande);

btnCommande.addEventListener('click', function(event){
    // annule le comportement par defaut du formulaire qui est d'envoyer des donnees au serveur
    event.preventDefault ();


    // recuperer les valeurs du formulaire
    let prenom = inputPrenom.value;
    let nom  = inputNom.value;
    console.log(nom);
    let adresse =inputAdresse.value;
    let ville = inputVille.value;
    let mail = inputMail.value;
    // console.log(inputNom.value, inputPrenom.value,inputAdresse.value, inputVille.value, inputMail.value );
    let isValid = verifierPasDeChiffres(nom);
    console.log(isValid);

    let isValidEmail = validateEmail(mail);
    console.log(isValidEmail);
});



//  localStorage.setItem( "firstName", document.querySelector("#firstName").value);