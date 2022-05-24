// permets de recuperer les produits



// Permet de définir les fonctions pour requêter l'API

let erreur = document.querySelector('.error');


// L'url pour accéder à l'API
const URL_API = "http://localhost:3000/api/products/";
// const URL_ONEPRODUCT = "http://localhost:3000/api/products";





async function getAllProducts() {

    try {
    //recuperation de la reponse de l'api apres le get
    const response = await fetch(URL_API);

    //transformation de la réponse en json

    let products = await response.json();
    //retourne une promise
    return products;
}
    catch (error) {
    erreur.innerHTML = `L'erreur <strong> ${error.message} </strong> est survenue, nous essayons de la réler au plus vite !!!`;
    erreur.style.display= `block`;
    }

}

async function getOneProduct(id) {

   
    try {
        //recuperation de la reponse de l'api apres le get
        const response = await fetch("http://localhost:3000/api/products/"+id);
    
        //transformation de la réponse en json
    
        let product = await response.json();
        //retourne une promise
        return product ;
    }
        catch (error) {
        erreur.innerHTML = `L'erreur <strong> ${error.message} </strong> est survenue, nous essayons de la réler au plus vite !!!`;
        erreur.style.display= `block`;
        }


}
export {
    getAllProducts,
    getOneProduct,
};