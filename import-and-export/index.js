
const {createProduct, Product} = require("./product");

const product = createProduct(1, "TeslaY", "$60.000", "a tesla car");
const product2 = new Product(1, "TeslaX", "$65.000", "a tesla car")

console.log(product.getInfo());
console.log(product2.getInfo());