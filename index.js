// - [] array of products
// Product {
//     libelle,prix,qantite
// }
const {
  addProduct,
  updateProduct,
  sortProducts,
  printProducts,
  deleteProduct,
} = require("./services");

let products = [];
addProduct(
  {
    libelle: "ballon",
    prix: 500,
    quantite: 5,
  },
  products
);
addProduct(
  {
    libelle: "pc",
    prix: 15,
    quantite: 5,
  },
  products
);
printProducts(products);
products = sortProducts(products);
console.log("after sort");
printProducts(products);
products = deleteProduct("ballon", products);
console.log("after remove");
printProducts(products);

console.log("after update");
updateProduct(
  {
    libelle: "souris",
    prix: 15,
    quantite: 5,
  },
  90,
  products
);
printProducts(products);
