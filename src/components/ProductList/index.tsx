import React from 'react';
import ProductCard from '../ProductCard';
import type { Product } from '@/models/product.interface';

interface ProductListProps {
  /**
   * An array of product objects to be displayed.
   */
  products: Product[];
}

/**
 * A component that displays a list of products in a grid layout.
 *
 * This component iterates through an array of product objects and renders each
 * product using the `ProductCard` component. It utilizes a responsive grid
 * layout that adapts to different screen sizes.
 *
 */
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section className="mx-8 h-full space-y-4 md:col-span-4 md:mx-0 md:grid md:grid-cols-1 md:gap-4 md:space-y-0 md:pl-4 lg:grid-cols-2 2xl:grid-cols-3">
      {products.map((product) => (
        <div>
          <ProductCard key={product.id} product={product} />
        </div>
      ))}
    </section>
  );
};

export default ProductList;
