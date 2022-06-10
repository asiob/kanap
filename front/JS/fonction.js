



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

//ancienne version du ajouter panier
// function ajouterPanier(product) {
//   console.log(product);

//   let produitsDansLePanier = JSON.parse (localStorage.getItem('panier'));
  
  
//   if (produitsDansLePanier !== null ) {
//     products.push(product);
//     localStorage.setItem("panier", JSON.stringify(products));
//   }

  
//   if (produitsDansLePanier !== null ) {
//     products = produitsDansLePanier;
//     //Vérifier si le produit qu'on ajoute n'est pas déjà dans le panier
//     produitsDansLePanier.forEach(p => {
//       if(product._id == p._id && product.color == p.color){
        
//         p.qty = Number(p.qty) + Number(product.qty);
//         localStorage.setItem('panier', JSON.stringify(produitsDansLePanier));
//       }
//     });
//   } else {
    
//     products.push(product);
//     localStorage.setItem("panier", JSON.stringify(products)); 
//   }
// }






  const afficherPanier = () => {
    //recuperer le panier du localstorage
  // let prixTotal = 0;
  let panier = JSON.parse(localStorage.getItem('panier'));
  console.log(panier); 
  let section = document.querySelector('#cart__items');
  panier.forEach (produit => 
  {
    afficherProduitDuPanier (produit, section);
    // prixTotal += produit.price;
  })
  
  }


  function afficherProduitDuPanier(produit, element) {
   
      element.innerHTML += `
    
              <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
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
                      <p>Qté :${produit.qty} </p>
                      <!--<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">-->
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>
            
            `
}

function afficherPrixTotal (produit, element) {

  element.innerHTML +=
`
<p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : <span id="totalPrice"><!-- 84,00 --></span> €</p>
            </div>
            <div class="cart__order">
`

}



  export {
    ajouterPanier, afficherPanier
  }