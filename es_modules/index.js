
import {createProduct, Product} from "./product";

const product = createProduct(0, "NameProduct", "$100");

console.log(product.getInfo());