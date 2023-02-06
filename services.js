// 1/addProduct
// 2/removeProduct
// 3/updateProduct
// 4/printProducts
// 5/sortProducts
const addProduct = (product, products) => {
  products.push(product);
};

const updateProduct = (product, index, products) => {
  try {
    if (index < 0 || index >= products.length) {
      throw new Error("index is not valid");
    }
    products[index] = product;
  } catch (err) {
    console.log(err.message);
  }
};

const deleteProduct = (libelle, products) => {
  const result = products.filter((el) => {
    if (el.libelle !== libelle) return true;
  });
  return result;
};

const sortProducts = (products) => {
  return products.sort((a, b) => {
    return a.prix - b.prix;
  });
};

const printProducts = (products) => {
  console.log(products);
};

module.exports = {
  addProduct,
  updateProduct,
  sortProducts,
  printProducts,
  deleteProduct,
};
