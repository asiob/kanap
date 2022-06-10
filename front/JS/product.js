import { getOneProduct } from "./api.js";
import { renderProduct } from "./rendered.js";

let params = new URLSearchParams(document.location.search);
let id = params.get("id");
let item = document.querySelector('.item');
let produitsDansLePanier = new Array();
let inCart;

let product = await getOneProduct(id);
console.log(product);
renderProduct(product, item);

let btnAddProduct = document.querySelector('#addToCart');
let select = document.querySelectorAll('#colors');
let inputQte = document.querySelector('#quantity');

//Ajout du produit sélectionné dans le produit dans le panier
btnAddProduct.addEventListener('click', function () {
    product.color = select[0].value;
    product.qty = Number(inputQte.value);
    //Ajouter mon produit dans un panier dans le localStorage
    // 1. Vérifions la présence du panier dans le localStorage
    let panier = localStorage.getItem('panier');

    //Si le panier n'est pas vide
    if (panier !== null) {
        //Récupération des produits du panier dans un tableau
        produitsDansLePanier = JSON.parse(panier);
        produitsDansLePanier = Array.from(produitsDansLePanier);
        console.log(produitsDansLePanier);
        //Vérification si le produit à ajouter est présent dans le(s) produit(s) du panier
        produitsDansLePanier.forEach(p => {
            if ((product._id === p._id) && (product.color === p.color)) {
                p.qty += Number(product.qty);
                inCart = true;
            } else {
                inCart = false;
            }
        });
        if (inCart) {
            localStorage.setItem('panier', JSON.stringify(produitsDansLePanier));
        } else {
            produitsDansLePanier.push(product);
            localStorage.setItem('panier', JSON.stringify(produitsDansLePanier));
        }
    } else {
        localStorage.setItem('panier', JSON.stringify(product));
    }
});