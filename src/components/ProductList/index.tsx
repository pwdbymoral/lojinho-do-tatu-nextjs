import React from 'react';
import ProductCard from '../ProductCard';
import { Product } from '@/models/product.interface';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section className="mx-8 space-y-4 md:col-span-4 md:mx-0 md:grid md:grid-cols-1 md:gap-4 md:space-y-0 md:pl-4 lg:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </section>
  );
};

export default ProductList;
