import { Product } from './type';

const products: Product[] = [
  { id: '1', name: 'Product 1', description: 'Description of Product 1' },
  { id: '2', name: 'Product 2', description: 'Description of Product 2' },
];

export const resolusi = {
  Query: {
    product: (parent: any, args: { id: string }) => {
      return products.find(product => product.id === args.id);
    },
  },
};