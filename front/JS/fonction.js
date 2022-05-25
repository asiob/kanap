

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





  export {
    ajouterPanier
  }