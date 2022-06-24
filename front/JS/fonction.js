



function ajouterPanier(product, panier) {
  let inCart;
  
  //verifier la presence du panier dans le local storage
  //si le panier est vide 
  if (panier !== null)
  {
    let produitsDansLepanier =[];
    //recuperer des produits du panier dans un tableau
    produitsDansLepanier = JSON.parse(panier);
    console.log(typeof(produitsDansLepanier));
    //verifiction si le produit à ajouter est present dans le(s) produits
    produitsDansLepanier.forEach(p => {
      if ((product._id ===p._id) && (product.color === p.color))
      {
        p.qty += Number (product.qty);
        inCart = true;

      }else {
        inCart = false;
      }
    });
    if (inCart) {
      localStorage.setItem ('panier', JSON.stringify(produitsDansLepanier));
    }else{
      produitsDansLepanier.push(product);
      localStorage.setItem ('panier', JSON.stringify(produitsDansLepanier));
    }
  } else {
    localStorage.setItem ('panier', JSON.stringify(product));
  }
  
}


  const afficherPanier = () => {
    // //recuperer le panier du localstorage
    let prixTotal = 0;
    let qteTotal = 0;
    let panier = JSON.parse(localStorage.getItem('panier'));
    console.log(panier); 
    let section = document.getElementById('cart__items');
    console.log(section);
    panier.forEach (produit => 
    {
      // afficherProduitDuPanier (produit, section);
      section.innerHTML += `
      <article class="cart__item" data-id="${produit._id}" data-color="${produit.color}">
        <div class="cart__item__img">
          <img src="${produit.imageUrl}" alt="Photographie d'un canapé">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>${produit.altTxt}</h2>
            <p>${produit.color}</p>
            <p>${produit.price} €</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${produit.qty}">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </article>
      `
    });
  }
  

function afficherPrixTotal (element, qteTotal, prixTotal) {

element.innerHTML =
`
<p>
  Total (<span id="totalQuantity">${qteTotal}</span> articles) : <span id="totalPrice">${prixTotal}</span> €
</p>
`

}

//fonction du bouton supprimer pour enlever du panier un produit


function supPanier(btnSup) {
    // selectionner la div contenant le produit
    let articlePanier = btnSup.closest("article") ;
    
    // la supprimer
    articlePanier.remove() ;

}


//-------- verifier les erreurs de caractere dans le formulaire----------


function verifierPasDeChiffres (expression) {
  let sansChiffres = new RegExp('^[a-zà-ï- ]+$');
  let valid =  sansChiffres.test (expression);
  console.log(valid);

  if(valid) {
      return true;
  } else {
      return false;
  }

}

function validateEmail(email){
  var emailReg = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?', '')
  var valid = emailReg.test(email);

  if(!valid) {
      return false;
  } else {
      return true;
  }
}


  export {
    ajouterPanier, 
    afficherPanier, 
    supPanier,
    afficherPrixTotal,
    verifierPasDeChiffres,
    validateEmail
 
  }