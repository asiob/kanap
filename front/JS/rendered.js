// Permet de créer toutes les foncitons de rendu de mon application

import { optionColors } from "./utils.js";


/**
 * Permet d'afficher les produits dans la page index.html
 * @param {Array} products Tableau de produits
 * @param {HtmlElement} elementHtml Elément Html 
 */
 function renderProducts(products, elementHtml) {
    for (let i = 0; i < products.length; i++) {
        elementHtml.innerHTML += `
        <a href="./product.html?id=${products[i]._id}">
            <article>
            <img src="${products[i].imageUrl}" alt="${products[i].altTxt}">
            <h3 class="productName">${products[i].name}</h3>
            <p class="productDescription">${products[i].description}</p>
            </article>
        </a>
        `;
    }
}



/**
 * afficher un produit
 * @param {Object} produitSolo 
 * @param {HtmlElement} elementHtml 
 */
function renderProduct(produitSolo, elementHtml) {
    elementHtml.innerHTML = `
    <article>
    <div class="item__img">
      <img src="${produitSolo.imageUrl}" alt="${produitSolo.altTxt}">
    </div>
    <div class="item__content">

      <div class="item__content__titlePrice">
        <h1 id="title">${produitSolo.name}</h1>
        <p>Prix : <span id="price"> ${produitSolo.price}</span> €</p>
      </div>

      <div class="item__content__description">
        <p class="item__content__description__title">Description :</p>
        <p id="description">${produitSolo.description}</p>
      </div>

      <div class="item__content__settings">
        <div class="item__content__settings__color">
          <label for="color-select">Choisir une couleur :</label>
          <select name="color-select" id="colors">
              <option value="">--SVP, choisissez une couleur --</option>
              <option value="vert">vert</option>
              <option value="blanc">blanc</option>
          </select>
        </div>

        <div class="item__content__settings__quantity">
          <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
          <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
        </div>
      </div>

      <div class="item__content__addButton">
        <button id="addToCart">Ajouter au panier</button>
      </div>

    </div>
  </article>
    `;
    optionColors(produitSolo.colors)
    
}

//A VERIFIER
// function quantite(quantity);


// optionColors (produitSolo.colors);

export {
    renderProducts,
    renderProduct,
}