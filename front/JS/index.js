import { getAllProducts } from "./api.js";
import { renderProducts } from "./rendered.js";
// import { afficherProduit } from "./rendered.js";




let products = [];
let items = document.querySelector('#items');



getAllProducts()
    .then((response) => {
        
        products = response;
        renderProducts(products, items);
        }
    )
    .catch((error) => response.status(400).json({
        error: error
    }));