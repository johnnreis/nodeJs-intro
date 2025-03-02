export class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getInfo () {
        return `Id product: ${this.id}, name: ${this.name}, price: ${this.price}`;
    }
}

export function createProduct (id, name, price) {
    return new Product(id, name, price);
}

