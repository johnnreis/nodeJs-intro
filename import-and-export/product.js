class Product {
    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }

    getInfo() {
        return `Id product: ${this.id}, name: ${this.name}, price: ${this.price}, description: ${this.description}`;
    }
}

function createProduct(id, name, price, description) {
    return new Product(id, name, price, description);
}


module.exports = {
    createProduct: createProduct,
    Product: Product
};