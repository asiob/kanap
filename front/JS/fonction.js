

function ajouterPanier(product) {


    let myProducts = [];
    let panier = JSON.parse (localStorage.getItem('panier'));
    console.log(panier);
    
  //verifier si le panier est vide ou pas
  //Si le panier est vide Ajouter le produit dans le panier
  //Si le produit est dans le panier incrementerla quantité
    
    if (panier === null ) {
        myProducts.push (product);
        localStorage.setItem('panier', JSON.stringify (myProducts));
    }
   else {
       
    myProducts = panier;
    //parcourir le tableau myproduct
    for (let i = 0; i < myProducts.length; i++) {
      //verifier que le name et l'id du produit dans le panier est le mm que le produit à ajouter 
      if (product.id === myProducts[i].id && product.color === myProducts[i].color ) {
        
        myProducts[i].qte = Number(myProducts[i].qte) + Number(product.qte);
      }
    }
    // myProducts.push(product);
    localStorage.setItem('panier', JSON.stringify (myProducts));

   }
    
  }

  const afficherPanier = () => {
    //recuperer le panier du localstorage
  
  let panier =JSON.parse (localStorage.getItem ('panier'));
  console.log(panier); 
  let section = document.querySelector('#cart__items');
  panier.forEach (produit => 
  {
    afficherProduitDuPanier (produit, section);
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
                    <p>${produit.selectedColor}</p>
                    <p>${produit.price} €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté :${produit.quantite} </p>
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





  export {
    ajouterPanier, afficherPanier
  }