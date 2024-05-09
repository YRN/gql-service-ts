"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolusi = void 0;
const products = [
    { id: '1', name: 'Product 1', description: 'Description of Product 1' },
    { id: '2', name: 'Product 2', description: 'Description of Product 2' },
];
exports.resolusi = {
    Query: {
        product: (parent, args) => {
            return products.find(product => product.id === args.id);
        },
    },
};
